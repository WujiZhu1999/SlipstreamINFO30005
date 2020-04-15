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
    if (req.body.number == null || req.body.title == null || req.body.body == null || req.body.author == null){
        res.status(400)
        res.send("There is incomplete data");
        return;
    }

    if (articles.find((article) => article.articleNum === req.body.number) != null) {
        res.status(400)
        res.send("This article number already allocated");
        return;
    }

    articles.push({
        "articleNum":req.body.number,
        "title":req.body.title,
        "body":req.body.body,
        "author":res.body.author
    });

    res.send();
}

// Deleting an article
const deleteArticle = (req, res) => {
    if (articles.find((article) => article.articleNum === req.params.articleNum) == null){
        res.status(400)
        res.send("this article does not exist " + req.params.article);
        return;
    }

    users.splice(articles.findIndex((article) => articles.articleNum === req.params.articleNum), 1);
    res.send();
}

module.exports = {
    getForum,
    getArticle,
    createArticle,
    deleteArticle
}