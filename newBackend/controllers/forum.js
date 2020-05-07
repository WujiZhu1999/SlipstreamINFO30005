var articles = require('../models/article.js');
const mongoose = require("mongoose");
const Article = mongoose.model("article");

//Forum Page
const getForum = async (req, res) => {
    try{
        const _articles = await Article.find();
        return res.send(_articles);
    }catch(err){
        res.status(400);W
        return res.send("Database failed when finding all articles(create forums)");
    }
}

//Gets a new article according to the article number 
const getArticle = async (req, res) => {

    const number = parseInt(req.params.articleNum, 10);
    try{
        const _article = await Article.findOne({"articleNum":number});
        if(_article){
            return res.send(_article);
        }else{
            return res.send("No corresponding article")
        }
    }catch(err){
        res.status(400);
        res.send("Database failed when getting 1 article");
    }
}

//Creates a new article
const createArticle = async (req, res) => {

    //checks whether all the paramters needed to create an article is present
    if (req.body.title == null || req.body.body == null){
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
        return res.send(_new);
    }catch(err){
        res.status(400);
        res.send("Failed when creating articles");
    }
}


// Deleting an article
const deleteArticle = async (req, res) => {
    var enteredNumber = parseInt(req.params.articleNum, 10);

    try{
        const intended = await Article.findOne({"articleNum":enteredNumber});
        if(intended){
            if(intended.author !== req.session.user){
                return res.send("You are not authorised to delete this article");
            }else{
                await Article.deleteOne({"articleNum":enteredNumber});
                return res.send("Article delete successful" + enteredNumber);
            }
        }else{
            return res.send("This article does not exist");
        }
    }catch(err){
        res.status(400);
        return res.send("Database failed when deleting article.");
    }
}

//changes an article's contents using the articleNum as a point of reference
const changeArticle = async (req, res) => {
    if(!req.body.articleNum){
        res.status(400)
        return res.send("Ariticle num not provided");
    }else{
        try{
            var _article = await Article.findOne({"articleNum":req.body.articleNum});
            
            if(!_article){
                res.status(400)
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
            const update = await Article.findOneAndUpdate({"articleNum":req.body.articleNum},_new);
            return res.send(update);
            
        }catch(err){
            res.status(400);
            return res.send("Database Failed when trying to modify article.");
        }
    }
}

//Creates a new comment
const createComment = async (req, res) => {
    if(!req.body.articleNum){
        return res.send("Article num not provided when creating comment");
    }
    if(!req.body.commentBody){
        return res.send("Can't make empty comment");
    }
    try{
        const _article = await Article.findOne({"articleNum":req.body.articleNum});
        if(!_article){
            return res.send("No such article.");
        }else{
            var comments = _article.comments.slice();
            var _new = {}
            if(req.body.author){
                _new["commentAuthor"] = req.body.author;
            }else{
                _new["commentAuthor"] = "anonymous";
            }
            _new["commentBody"] = req.body.commentBody;
            _new["commentNumber"] = comments.length + 1;
            comments.push(_new);

            const _update = await Article.findOneAndUpdate({"articleNum":req.body.articleNum},{"comments":comments});
            return res.send(_update);

        }
    }catch(err){
        res.status(400);
        return res.send("Database failed when create comments.");
    }
}

const deleteComment = async (req, res) => {
    var enteredNumber = parseInt(req.params.commentNum, 10);
    var articleNumber = parseInt(req.params.articleNum, 10);

    try{
        const article = await Article.findOne({"articleNum":articleNumber});
        
        
        if(!article){
            return res.send("No such article found.");
        }
        var comments = article.comments.slice();
        var flag = 0;
        
        for(i in comments){
            if(enteredNumber === (parseInt(i)+1)){
                if(comments[i].commentAuthor === req.session.user || article.author === req.session.user){
                    comments.splice(i);
                    flag = 1;
                    break;
                }
                else{
                    return res.send("Not authorized to delete the comment");
                }
            }   
        }
        if(!flag){
            return res.send("No such comment.");
        }else{
            const _update = await Article.findOneAndUpdate({"articleNum":articleNumber},{"comments":comments});
            return res.send(_update);
        }
        
    }catch(err){
        res.status(400);
        return res.send("Database failed when deleteComment");
    }
}

const changeComment= async (req, res) => {
    if(!req.body.commentNum || !req.body.articleNum){
        return res.send("No sufficient information provided");
    }
    var enteredNumber = req.body.commentNum;
    var articleNumber = req.body.articleNum;

    try{
        const article = await Article.findOne({"articleNum":articleNumber});
        
        
        if(!article){
            return res.send("No such article found.");
        }
        var comments = article.comments.slice();
        var flag = 0;
        
        for(i in comments){
            if(enteredNumber === (parseInt(i)+1)){
                if(comments[i].commentAuthor === req.session.user){
                    if(req.body.newComment){
                        comments[i].commentBody = req.body.newComment;
                    }
                    flag = 1;
                    break;
                }
                else{
                    return res.send("Not authorized to change the comment");
                }
            }   
        }
        if(!flag){
            return res.send("No such comment.");
        }else{
            const _update = await Article.findOneAndUpdate({"articleNum":articleNumber},{"comments":comments});
            return res.send(_update);
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
    changeArticle,
    createComment,
    deleteComment,
    changeComment
}