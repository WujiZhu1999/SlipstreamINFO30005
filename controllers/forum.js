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
        res.send("This article does not exist");
    }
}

//Creates a new acticle
const createArticle = (req, res) => {
    if (req.query.number == null || req.query.title == null || req.query.body == null || req.query.author == null){
        res.send("There is incomplete data");
        return;
    }

    if (articles.find((article) => article.articleNum === req.query.number) != null) {
        res.send("This article number already allocated");
        return;
    }

    articles.push({
        "articleNum":req.query.number,
        "title":req.query.title,
        "body":req.query.body,
        "author":res.query.author
    });

    res.send(articles);
}

// Deleting an article
const deleteArticle = (req, res) => {
    if (req.query.number == null || req.query.title == null || req.query.body == null || req.query.author == null){
        res.send("There is incomplete data");
        return;
    }

    if (articles.find((article) => article.articleNum === req.query.number) != null) {
        articles.delete({
            "articleNum":req.query.number,
            "title":req.query.title,
            "body":req.query.body,
            "author":res.query.author
        });
    }

    res.send(articles);
}

module.exports = {
    getForum,
    getArticle,
    createArticle
}