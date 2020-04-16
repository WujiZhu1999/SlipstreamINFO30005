//where loopf for to allocate number

var articles = require('../models/article.js');

//Forum Page
const getForum = (req, res) => {
    res.send("<h1> Forum </h1>");
}

//Gets a new article according to the article number
const getArticle = (req, res) => {
    const number = req.params.articleNum;
    const article = articles.find((a) => a.articleNum === number);
    
    if(article){
        res.send("<h1> Article: " + article.title + "</h1>" +  "<body>" + article.body + "</body>");
    }

    else{
        res.status(400);
        res.send("This article does not exist");
    }
}

//Creates a new acticle
const createArticle = (req, res) => {
    if (req.body.title == null || req.body.body == null || req.body.author == null){
        res.status(400)
        res.send("There is incomplete data");
        return;
    }

    var newArticleNum = 1;

    while(articles.find((article) => article.articleNum == newArticleNum) != null){
        newArticleNum++;
    }

    //need a function to automatically allocator author

    articles.push({
        "articleNum":(""+newArticleNum),
        "title":req.body.title,
        "body":req.body.body,
        "author":req.body.author
    });

    res.send(articles);
}


// Deleting an article
const deleteArticle = (req, res) => {
    if (articles.find((article) => article.articleNum === req.params.articleNum) == null){
        res.status(400)
        res.send("this article does not exist " + req.params.article);
        return;
    }

    var articleIndex = articles.findIndex((article) => article.articleNum === req.params.articleNum);
    
    if (articleIndex = 0){
        articles.splice(1,);
    }

    else{
        articles.splice(articleIndex,1);
    }

    res.send(articles);
}

module.exports = {
    getForum,
    getArticle,
    createArticle,
    deleteArticle
}