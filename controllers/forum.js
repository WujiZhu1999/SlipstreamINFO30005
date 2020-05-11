const mongoose = require("mongoose");
const Article = mongoose.model("article");

//Forum Page
const getForum = async (req, res) => {

    try {
        const _articles = await Article.find();
        return res.render('forum/forum.pug', {
            title:'Forum',
            active:"Forum",
            current_articles: _articles,
            userName: req.session.user
        });

    }catch(err){
        res.status(400);
        return res.send("Database failed when finding all articles(create forums)");
    }
}    
 
//Gets a new article according to the article number 
const getArticle = async (req, res) => {
    try{
        const number = parseInt(req.params.articleNum, 10);
        const _article = await Article.findOne({"articleNum":number});
        
        if(_article){
            return res.render("forum/article.pug", {
                title: _article.title,
                article: _article,
                active:"Forum",
                userName: req.session.user
            });
        }else{
            return res.send("No corresponding article")
        }
    }catch(err){
        res.status(400);
        res.send("Database failed when getting 1 article");
    }
    

    /*
    if(article){
        var output = "<h1> Article: " + article.title + "</h1>" +  "<body>" + article.body + "</body>" + "<br>" + "<br>"+ "COMMENTS";

        //sends all the corresponding comments
        for (i in article.comments) {
            output += "<br>" +  article.comments[i].commentAuthor + " said:"+ "<br>"  + article.comments[i].commentBody + "<br>" ;
        }

        res.send(output);
    }

    else{
        res.status(400);
        res.send("This article does not exist");
    }
    */
}

//Creates a new article
const createArticle = async (req, res) => {

    //checks whether all the paramters needed to create an article is present
    if (req.body.title == null || req.body.title == ""  || req.body.body == null || req.body.body == ""){
        res.status(400);
        res.send("There is incomplete data");
        return;
    }

    try{
        const lastArticle = await Article.find().sort({_id:-1}).limit(1);
        var num = 1;
        if(lastArticle[0]){
            num = lastArticle[0].articleNum + 1;
        }
        const _new = await Article.create({
            "articleNum": num,
            "title":req.body.title,
            "body":req.body.body,
            "author":req.session.user,
            "comments": []
        });
        return res.redirect("/Forum/" + num);

    }catch(err){
        res.status(400);
        res.send("Failed when creating articles");
    }
}

//Deleting an article
const deleteArticle = async (req, res) => {
    var enteredNumber = parseInt(req.params.articleNum, 10);

    try{
        const intended = await Article.findOne({"articleNum":enteredNumber});
        if(intended){
            if(intended.author !== req.session.user){
                res.status(403)
                return res.send("You are not authorised to delete this article");
            }else{
                await Article.deleteOne({"articleNum":enteredNumber});
                return res.send("Article delete successful" + enteredNumber);
            }
        }else{
            res.status(400)
            return res.send("This article does not exist");
        }
    }catch(err){
        res.status(400);
        
        return res.send("Database failed when deleting article.");
    }
}

//Go to edit article
const getEditArticle = async (req,res) => {
    try {
        const _article = await Article.findOne({"articleNum":req.params.articleNum});

        return res.render("forum/change_article.pug", {
            title:'Change Article', 
            articleNum : _article.articleNum,
            active:"Forum",
            userName: req.session.user
            
        });

    }catch(err){
        res.status(400);
        return res.send("could not find article");
    }
}

//Changes an article's contents using the articleNum as a point of reference
const changeArticle = async (req, res) => {
    if(!req.params.articleNum){
        res.status(400)
        return res.send("Ariticle num not provided");
    }else{
        try{
            var _article = await Article.findOne({"articleNum":req.params.articleNum});
            
            if(!_article){
                res.status(404)
                return res.send("Article does not exist");
            }
            if(_article.author !== req.session.user){
                res.status(403)
                return res.send("You are not authorised to change this article");
            }
            var _new = {};
            if(req.body.title){
                _new["title"] = req.body.title;
            }
            if(req.body.body){
                _new["body"] = req.body.body;
            }
            const update = await Article.findOneAndUpdate({"articleNum":req.params.articleNum},_new);
            return await res.redirect("/forum/" + req.params.articleNum);
            
        }catch(err){
            res.status(400);
            return res.send("Database Failed when trying to modify article.");
        }
    }
}

//Creates a new comment
const createComment = async (req, res) => {
    if(!req.params.articleNum){
        return res.send("Article num not provided when creating comment");
    }

    if(!req.body.commentBody){
        res.status(400);
        return res.send("Can't make empty comment");
    }
    try{
        const _article = await Article.findOne({"articleNum":req.params.articleNum});
        
        if(!_article){
            res.status(404)
            return res.send("No such article.");
        }
        
        else{
            var comments = _article.comments.slice();
            var _new = {}
           
            if(req.session.user){
                _new["commentAuthor"] = req.session.user;
            }
            
            else{
                _new["commentAuthor"] = "anonymous";
            }
            _new["commentBody"] = req.body.commentBody;
            _new["commentNumber"] = comments.length + 1;

            comments.push(_new);

            const _update = await Article.findOneAndUpdate({"articleNum":req.params.articleNum},{"comments":comments});
            return await res.redirect("/forum/" + req.params.articleNum);

        }
    }catch(err){
        res.status(400);
        return res.send("Database failed when create comments.");
    }
}

const getComment = async (req, res) => {

    try{
        var enteredNumber = parseInt(req.params.commentNumber, 10);
        var articleNumber = parseInt(req.params.articleNum, 10);

        const _article = await Article.findOne({"articleNum":articleNumber});

        return res.render("forum/comment.pug", {
            title:'Get Comment', 
            articleNum : _article.articleNum,
            commentNumber: enteredNumber,
            active:"Forum",
            userName: req.session.user
            
        });
    }

    catch{
        res.status(400);
        return res.send("Database failed when create comments.");
    }
    
}

//Deleting a comment 
const deleteComment = async (req, res) => {
    var enteredNumber = parseInt(req.params.commentNumber, 10);
    var articleNumber = parseInt(req.params.articleNum, 10);

    try{
        const article = await Article.findOne({"articleNum":req.params.articleNum})
        
        
        if(!article){
            res.status(404)
            return res.send("No such article found.");
        }
        //var comments = article.comments.splice();
        var flag = 0;
        
        for(i in article.comments){
            if(enteredNumber == article.comments[i].commentNumber){
                console.log(i)
                if(article.comments[i].commentAuthor === req.session.user){
                    article.comments.splice(i,1);
                    flag = 1;
                    break;
                }

                else{
                    res.status(403)
                    return res.send("Not authorized to delete the comment");
                }
            }   
        }
        if(!flag){
            res.status(404)
            return res.send("No such comment.");
        }else{

            const _update = await Article.findOneAndUpdate({"articleNum":articleNumber},{"comments":article.comments});
            return await res.redirect("/forum/" + articleNumber);
        }
        
    }catch(err){
        res.status(400);
        return res.send("Database failed when deleteComment" + err);
    }
}

const getEditComment = async (req, res) => {
    try {
        var enteredNumber = req.params.commentNumber;
        var articleNumber = req.params.articleNum;

        const _article = await Article.findOne({"articleNum":articleNumber});

        if(!_article){
            res.status(404)
            return res.send("No such article.");
        }

        return res.render("forum/change_comment.pug", {
            title:'Change Comment', 
            article: _article,
            articleNum : articleNumber,
            commentNumber : enteredNumber,
            active:"Forum",
            userName: req.session.user
            
        });

    }catch(err){
        res.status(400);
        return res.send("could not find comment");
    }
}

//Editing a Comment
const changeComment= async (req, res) => {
    if(!req.params.commentNumber|| !req.params.articleNum){
        return res.send("No sufficient information provided");
    }
    var enteredNumber = req.params.commentNumber;
    var articleNumber = req.params.articleNum;

    try{
        const article = await Article.findOne({"articleNum":articleNumber});
        
        
        if(!article){
            res.status(404)
            return res.send("No such article found.");
        }
        var comments = article.comments.slice();
        var flag = 0;
        
        for(i in comments){
            if(enteredNumber == comments[i].commentNumber){
                if(comments[i].commentAuthor === req.session.user){
                    if(req.body.commentBody){
                        comments[i].commentBody = req.body.commentBody;
;
                    }
                    flag = 1;
                    break;
                }
                else{
                    res.status(403)
                    return res.send("Not authorized to change the comment");
                }
            }   
        }
        if(!flag){
            res.status(404)
            return res.send("No such comment.");
        }else{
            const _update = await Article.findOneAndUpdate({"articleNum":article.articleNum},{"comments":comments});

            return await res.redirect("/forum/" + article.articleNum);
        }
        
    }catch(err){
        res.status(400);
        return res.send("Database failed when deleteComment");
    }
}

module.exports = {
    getForum,
    getArticle,
    createArticle,
    deleteArticle,
    getEditArticle,
    changeArticle,
    createComment,
    deleteComment,
    getEditComment,
    changeComment,
    getComment
}
