const mongoose = require("mongoose");
const Article = mongoose.model("article");

//get a forum page that displays all the titles of the current articles 
const getForum = async (req, res) => {

    try {
        
        //var current_page = 1;
        //var perpage = 2;
        //var str = (current_page-1)*perpage;
        //var end = start+perpage;
        //var current_page = req.params.page || 1;

        //find all articles
        const found_articles = await Article.find();
        var article;
        for(article of found_articles){
            //console.log(Math.abs(new Date() - new Date(article["time"]))/(1000*3600));
            //console.log(Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*3600)));
            //console.log(Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*60)) - Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*3600)) * 60);
            //console.log(Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000)) - Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*60)) * 60);
            
            //articles will contain hours, min and sec to display as time update or create
            article["Hrs"] = Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*3600));
            article["Mins"] = Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*60)) - Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*3600)) * 60;
            article["Secs"] = Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000)) - Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*60)) * 60;

        } 

        //render the info
        return res.render('forum/forum.pug', {
            title:'Forum',
            active:"Forum",
            current_articles: found_articles,
            userName: req.session.user
        });

    }
    catch(err){
        console.log(err);
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
        const found_article = await Article.findOne({"articleNum":number});
        
        if(found_article){
            
            for(comment of found_article.comments){
                //console.log(Math.abs(new Date() - new Date(article["time"]))/(1000*3600));
                //console.log(Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*3600)));
                //console.log(Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*60)) - Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*3600)) * 60);
                //console.log(Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000)) - Math.floor(Math.abs(new Date() - new Date(article["time"]))/(1000*60)) * 60);
                
                //folow the same mechanism as articles, will display time/min/sec rather than day if the posted less than a month
                comment["Hrs"] = Math.floor(Math.abs(new Date() - new Date(comment["time"]))/(1000*3600));
                comment["Mins"] = Math.floor(Math.abs(new Date() - new Date(comment["time"]))/(1000*60)) - Math.floor(Math.abs(new Date() - new Date(comment["time"]))/(1000*3600)) * 60;
                comment["Secs"] = Math.floor(Math.abs(new Date() - new Date(comment["time"]))/(1000)) - Math.floor(Math.abs(new Date() - new Date(comment["time"]))/(1000*60)) * 60;
    
            } 

            //render info
            return res.render("forum/article.pug", {
                title: found_article.title,
                article: found_article,
                active:"Forum",
                userName: req.session.user,
            });
        }else{
            return res.render("error", {
                error: "No corresponding article",
                redirect: "/forum"
            });
        }
    }catch(err){
        console.log(err);
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
        var lastArticle = await Article.find()

        lastArticle.sort((a, b) => (a.id < b.id) ? 1: -1)//    _id:-1}).limit(1);

        var num = 1;
        if(lastArticle[0]){
            num = lastArticle[0].articleNum + 1;
        }
        //finds the current date
        const d = new Date();

        //creates new article
        const article_new = await Article.create({
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
        console.log(err);
        return res.render("error", {
            error: "Server Error: Failed to create article " + err,
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
        console.log(err);
        return res.render("error", {
            error: "Server Error: Failed to when deleteing article",
            redirect: "/forum" + intended.articleNum
        });
    }
}

//Go to a page to edit an article
const getEditArticle = async (req,res) => {
    try {
        //find article on mongoDB
        const found_article = await Article.findOne({"articleNum":req.params.articleNum});
        //render info
        return res.render("forum/change_article.pug", {
            title:'Change Article', 
            articleNum : found_article.articleNum,
            article: found_article,
            active:"Forum",
            userName: req.session.user
            
        });

    }catch(err){
        console.log(err);
        return res.render("error", {
            error: "Server Error: Failed to get article to edit",
            redirect: "/forum/" + found_article.articleNum
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
            var enteredNumber = parseInt(req.params.articleNum, 10);
            //checks if the article exists
            var found_article = await Article.findOne({"articleNum":enteredNumber});
            
            if(!found_article){
                return res.render("error", {
                    error: "This article does not exist",
                    redirect: "/forum"
                });
            }

            //checks if the user is authorsied to edit the article
            if(found_article.author != req.session.user){
                return res.render("error", {
                    error: "You are not authorised to change this article",
                    redirect: "/forum/" + enteredNumber
                });

            }

            //sets new edit changes 
            var is_new = {};
            if(req.body.title){
                is_new["title"] = req.body.title;
            }
            if(req.body.body){
                is_new["body"] = req.body.body;
            }

            //saves the date it was edited 
            const d = new Date();
            is_new["time"] = d.toString().slice(0,24);
            is_new["edit"] = true;

            //makes changes
            await Article.findOneAndUpdate({"articleNum":enteredNumber}, is_new);
            return res.redirect("/forum/" + enteredNumber);
            
        }catch(err){
            console.log(err);
            return res.render("error", {
                error: "Server Error: Failed to edit article. ",
                redirect: "/forum/" + enteredNumber
            });
        }
    }
}

//Creates a new comment based on a post request
const createComment = async (req, res) => {
    try{
        
        //checks if an article number was specifed 
        if(!req.params.articleNum){
            res.status(400);
            return res.render("error", {
                error: "This article does not exist",
                redirect: "/forum/"
            });
        }

        var enteredNumber = parseInt(req.params.articleNum, 10);

        const found_article = await Article.findOne({"articleNum":enteredNumber});

        //checks if there is suffecient amout of data
        if(!req.body.commentBody){
            res.status(400);
            return res.render("error", {
                error: "Cannot make an empty comment",
                redirect: "/forum/" + found_article.articleNum
            });
        }
        
        //checks if the article exists
        if(!found_article){
            res.status(400);
            return res.render("error", {
                error: "This article does not exist",
                redirect: "/forum/"
            });
        }
        
        else{
            var comments = found_article.comments.slice();
            var comment_new = {}
           
            if(req.session.user){
                comment_new["commentAuthor"] = req.session.user;
            }
            
            else{
                comment_new["commentAuthor"] = "anonymous";
            }

            //crates a new  comment
            comment_new["commentBody"] = req.body.commentBody;
            comment_new["commentNumber"] = comments.length + 1;
            const d = new Date();
            comment_new["time"] = d.toString().slice(0,24);
            comment_new["edit"] = false;

            comments.push(comment_new);

            const comment_update = await Article.findOneAndUpdate({"articleNum":enteredNumber},{"comments":comments});
            return await res.redirect("/forum/" + enteredNumber);

        }
    }catch(err){
        console.log(err);
        return res.render("error", {
            error: "Server Error: Failed to make comment",
            redirect: "/forum/" + enteredNumber
        });
    }
}

//Deleting a comment 
const deleteComment = async (req, res) => {
    var enteredNumber = parseInt(req.params.commentNumber, 10);
    var articleNumber = parseInt(req.params.articleNum, 10);

    try{
        const article = await Article.findOne({"articleNum":articleNumber})
        
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
            const comment_update = await Article.findOneAndUpdate({"articleNum":articleNumber},{"comments":article.comments});
            return await res.redirect("/forum/" + articleNumber);
        }
        
    }catch(err){
        console.log(err);
        return res.render("error", {
            error: "Server Error: Failed to delete comment",
            redirect: "/forum/" + article.articleNum
        });
    }
}

//Gets a page to edit a comment
const getEditComment = async (req, res) => {
    try {
        var enteredNumber = parseInt(req.params.commentNumber, 10);
        var articleNumber = parseInt(req.params.articleNum, 10);

        const found_article = await Article.findOne({"articleNum":articleNumber});

        //checks if the article exsists
        if(!found_article){
            return res.render("error", {
                error: "This article does not exist",
                redirect: "/forum/"
            });
        }

        var have_comment = -1

        //finds the comment
        for (comment in found_article.comments){
            if (found_article.comments[comment].commentNumber == enteredNumber){
                have_comment = comment
            }
        }

        //goes to edit comment page
        return res.render("forum/change_comment.pug", {
            title:'Change Comment', 
            article: found_article,
            articleNum : articleNumber,
            commentNumber : enteredNumber,
            commentIndex: have_comment,
            active:"Forum",
            userName: req.session.user
            
        });

    }catch(err){
        console.log(err);
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
            redirect: "/forum/" + found_article.articleNum
        });
    }
    var enteredNumber = parseInt(req.params.commentNumber, 10);
    var articleNumber = parseInt(req.params.articleNum, 10);

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
            const article_update = await Article.findOneAndUpdate({"articleNum":article.articleNum},{"comments":comments});

            return await res.redirect("/forum/" + article.articleNum);
        }
        
    }catch(err){
        console.log(err);
        return res.render("error", {
            error: "Server Error: Failed to edit comment",
            redirect: "/forum/" + articleNumber
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
