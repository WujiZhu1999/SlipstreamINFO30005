const mongoose = require("mongoose");
const Article = mongoose.model("article");

//get a forum page that displays all the titles of the current articles 
const getForum = async (req, res) => {

    try {
        const _articles = await Article.find();
        return res.render('forum/forum.pug', {
            title:'Forum',
            active:"Forum",
            current_articles: _articles,
            userName: req.session.user
        });

    }
    catch(err){
        return res.render("error", {
            error: "Server Error: Could not fetch articles from database",
            redirect: "/"
        });
    }
}    
 
//Gets a new article according to the article number 
const getArticle = async (req, res) => {
    try{
        const number = parseInt(req.params.articleNum, 10);

        //Finds the article according do the parameters of the URL
        const _article = await Article.findOne({"articleNum":number});
        
        if(_article){
            return res.render("forum/article.pug", {
                title: _article.title,
                article: _article,
                active:"Forum",
                userName: req.session.user
            });
        }else{
            return res.render("error", {
                error: "No corresponding article",
                redirect: "/forum"
            });
        }
    }catch(err){
        return res.render("error", {
            error: "Server Error: Could not fetch article from database",
            redirect: "/forum"
        });
    }
}

//Creates a new article
const createArticle = async (req, res) => {

    //checks whether all the paramters needed to create an article is present
    if (req.body.title == null || req.body.title == ""  || req.body.body == null || req.body.body == ""){
        return res.render("error", {
            error: "There is incomplete data for article. Make sure you include a title and body",
            redirect: "/forum"
        });
    }

    try{
        //finds the lowest avaliable article number
        const lastArticle = await Article.find().sort({_id:-1}).limit(1);
        var num = 1;
        if(lastArticle[0]){
            num = lastArticle[0].articleNum + 1;
        }

        //finds the current date
        const d = new Date();

        //creates new article
        const _new = await Article.create({
            "articleNum": num,
            "title":req.body.title,
            "body":req.body.body,
            "author":req.session.user,
            "time":d.toString().slice(0,24),
            "edit": false,
            "comments": []
        });

        //directs to new article
        return res.redirect("/forum/" + num);

    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to create article",
            redirect: "/forum"
        });
    }
}

//Deleting an article pased on article number
const deleteArticle = async (req, res) => {
    var enteredNumber = parseInt(req.params.articleNum, 10);

    try{
        const intended = await Article.findOne({"articleNum":enteredNumber});

        //checks if the article specified exsists
        if(intended){
            //checking authorisation
            if(intended.author !== req.session.user){
                return res.render("error", {
                    error: "You are not authorised to delete this article",
                    redirect: "/fourm/" + intended.articleNum
                });
               
            }else{
                await Article.deleteOne({"articleNum":enteredNumber});
                return res.redirect("/forum");
            }
        }else{
            return res.render("error", {
                error: "This article does not exist",
                redirect: "/forum"
            });
        }
    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to when deleteing article",
            redirect: "/forum" + intended.articleNum
        });
    }
}

//Go to a page to edit an article
const getEditArticle = async (req,res) => {
    try {
        const _article = await Article.findOne({"articleNum":req.params.articleNum});

        return res.render("forum/change_article.pug", {
            title:'Change Article', 
            articleNum : _article.articleNum,
            article: _article,
            active:"Forum",
            userName: req.session.user
            
        });

    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to get article to edit",
            redirect: "/forum/" + _article.articleNum
        });
    }
}

//Changes an article's contents using the articleNum as a point of reference
const changeArticle = async (req, res) => {

    //checks whether article number was provided
    if(!req.params.articleNum){
        return res.render("error", {
            error: "Article Number was not provided",
            redirect: "/forum"
        });
    }else{
        try{
            //checks if the article exists
            var _article = await Article.findOne({"articleNum":req.params.articleNum});
            
            if(!_article){
                return res.render("error", {
                    error: "This article does not exist",
                    redirect: "/forum"
                });
            }

            //checks if the user is authorsied to edit the article
            if(_article.author != req.session.user){
                return res.render("error", {
                    error: "You are not authorised to change this article",
                    redirect: "/forum/" + _article.articleNum
                });

            }

            //sets new edit changes 
            var _new = {};
            if(req.body.title){
                _new["title"] = req.body.title;
            }
            if(req.body.body){
                _new["body"] = req.body.body;
            }

            //saves the date it was edited 
            const d = new Date();
            _new["time"] = d.toString().slice(0,24);
            _new["edit"] = true;

            //makes changes
            await Article.findOneAndUpdate({"articleNum":req.params.articleNum}, _new);
            return res.redirect("/forum/" + req.params.articleNum);
            
        }catch(err){
            return res.render("error", {
                error: "Server Error: Failed to edit article. " + err,
                redirect: "/forum/" + _article.articleNum
            });
        }
    }
}

//Creates a new comment based on a post request
const createComment = async (req, res) => {
    try{
        
        //checks if an article number was specifed 
        if(!req.params.articleNum){
            return res.render("error", {
                error: "This article does not exist",
                redirect: "/forum/"
            });
        }

        const _article = await Article.findOne({"articleNum":req.params.articleNum});

        //checks if there is suffecient amout of data
        if(!req.body.commentBody){
            return res.render("error", {
                error: "Cannot make an empty comment",
                redirect: "/forum/" + _article.articleNum
            });
        }
        
        //checks if the article exists
        if(!_article){
            return res.render("error", {
                error: "This article does not exist",
                redirect: "/forum/"
            });
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

            //crates a new  comment
            _new["commentBody"] = req.body.commentBody;
            _new["commentNumber"] = comments.length + 1;
            const d = new Date();
            _new["time"] = d.toString().slice(0,24);
            _new["edit"] = false;

            comments.push(_new);

            const _update = await Article.findOneAndUpdate({"articleNum":req.params.articleNum},{"comments":comments});
            return await res.redirect("/forum/" + req.params.articleNum);

        }
    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to make comment",
            redirect: "/forum/" + req.params.articleNum
        });
    }
}

//Deleting a comment 
const deleteComment = async (req, res) => {
    var enteredNumber = parseInt(req.params.commentNumber, 10);
    var articleNumber = parseInt(req.params.articleNum, 10);

    try{
        const article = await Article.findOne({"articleNum":req.params.articleNum})
        
        //checks if article exists
        if(!article){
            return res.render("error", {
                error: "This article does not exist",
                redirect: "/forum/"
            });
        }
        
        var flag = 0;
        //finds and deletes the comment specifed based off of comment number
        for(i in article.comments){
            if(enteredNumber == article.comments[i].commentNumber){
                console.log(i)
                if(article.comments[i].commentAuthor === req.session.user){
                    article.comments.splice(i,1);
                    flag = 1;
                    break;
                }

                else{
                    return res.render("error", {
                        error: "You are not authorised to delete this comment",
                        redirect: "/forum/" + article.articleNum
                    });
                }
            }   
        }
        if(!flag){
            return res.render("error", {
                error: "This comment does not exist",
                redirect: "/forum/" + article.articleNum
            });
        }else{
            //updats delete in the databse
            const _update = await Article.findOneAndUpdate({"articleNum":articleNumber},{"comments":article.comments});
            return await res.redirect("/forum/" + articleNumber);
        }
        
    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to delete comment",
            redirect: "/forum/" + article.articleNum
        });
    }
}

//Gets a page to edit a comment
const getEditComment = async (req, res) => {
    try {
        var enteredNumber = req.params.commentNumber;
        var articleNumber = req.params.articleNum;

        const _article = await Article.findOne({"articleNum":articleNumber});

        //checks if the article exsists
        if(!_article){
            return res.render("error", {
                error: "This article does not exist",
                redirect: "/forum/"
            });
        }

        var _comment = -1

        //finds the comment
        for (comment in _article.comments){
            if (_article.comments[comment].commentNumber == enteredNumber){
                _comment = comment
            }
        }

        //goes to edit comment page
        return res.render("forum/change_comment.pug", {
            title:'Change Comment', 
            article: _article,
            articleNum : articleNumber,
            commentNumber : enteredNumber,
            commentIndex: _comment,
            active:"Forum",
            userName: req.session.user
            
        });

    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to get comment to edit",
            redirect: "/forum"
        });
    }
}

//Editing a Comment using a post request
const changeComment= async (req, res) => {
    //checking there is sufficent data to find the ocmment
    if(!req.params.commentNumber|| !req.params.articleNum){
        return res.render("error", {
            error: "Sufficient Information has not been provided",
            redirect: "/forum/" + _article.articleNum
        });
    }
    var enteredNumber = req.params.commentNumber;
    var articleNumber = req.params.articleNum;

    try{
        const article = await Article.findOne({"articleNum":articleNumber});
        
        
        if(!article){
            return res.render("error", {
                error: "This article does not exist",
                redirect: "/forum/" 
            });
        }
        var comments = article.comments.slice();
        var flag = 0;

        //edits the comment
        for(i in comments){
            if(enteredNumber == comments[i].commentNumber){
                if(comments[i].commentAuthor === req.session.user){
                    if(req.body.commentBody){
                        comments[i].commentBody = req.body.commentBody;
                        const d = new Date();
                        comments[i]["time"] = d.toString().slice(0,24);
                        comments[i]["edit"] = true;
                    }
                    flag = 1;
                    break;
                }
                else{
                    return res.render("error", {
                        error: "You are not authorised to make this change",
                        redirect: "/forum/" + article.articleNum
                    });
                }
            }   
        }
        if(!flag){
            return res.render("error", {
                error: "This comment does not exist",
                redirect: "/forum/" + article.articleNum
            });
        }else{
            //updates the comment in the Article database
            const _update = await Article.findOneAndUpdate({"articleNum":article.articleNum},{"comments":comments});

            return await res.redirect("/forum/" + article.articleNum);
        }
        
    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to edit comment",
            redirect: "/forum/" + _article.articleNum
        });
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
    changeComment
}
