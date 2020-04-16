var articles = require('../models/article.js');

//Forum Page
const getForum = (req, res) => {

    var output = "<h1> Forum </h1>";

    var largestArticleNum = 1;

    article = articles.find((article) => article.articleNum ==  largestArticleNum)

    while(article!=null){
        newTitle = "<br>" + article.title
        output += newTitle;
        largestArticleNum++;
        article = articles.find((article) => article.articleNum ==  largestArticleNum)
    }

    res.send(output);
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

//Creates a new article
const createArticle = (req, res) => {

    //checks whether all the paramters needed to create an article is present
    if (req.body.title == null || req.body.body == null || req.body.author == null){
        res.status(400)
        res.send("There is incomplete data");
        return;
    }

    var newArticleNum = 1;

    //allocates the lowest article number availiable (larger then 0)
    while(articles.find((article) => article.articleNum == newArticleNum) != null){
        newArticleNum++;
    }

    //creates the new article
    articles.push({
        "articleNum":newArticleNum,
        "title":req.body.title,
        "body":req.body.body,
        "author":req.body.author
    });

    res.send(articles);
}


// Deleting an article
const deleteArticle = (req, res) => {
    var enteredNumber = parseInt(req.params.articleNum, 10);;

    //check's if the article requested to be deleted exsists
    if (articles.find((article) => article.articleNum === enteredNumber) == null){
        res.status(400)
        res.send("this article does not exist ");
        return;
    }

    //finds the article's index
    var articleIndex = articles.findIndex((article) => article.articleNum === enteredNumber);
    
    var largestArticleNum = 1;

    //allocates the lowest article number availiable (larger then 0)
    while(articles.find((article) => article.articleNum ==  largestArticleNum) != null){
        largestArticleNum++;
    }
    
    //slipices according to index
    if (articleIndex == 0){
        articles.splice(0,1);

    
        //changes all numbers afterwards
        if (largestArticleNum!=1){
        
            for(n=2; n < largestArticleNum; n++){
                var article = articles.find((article) => article.articleNum === n);
                article["articleNum"] = article.articleNum - 1;
            }
        }

        res.send(articles );
        return;
    }

   

    else{
        articles.splice(articleIndex,1);

        var numberAfterArticle = enteredNumber + 1

        if(largestArticleNum >= numberAfterArticle){
            
            //changes all numbers afterwards
            for(n = numberAfterArticle; n < largestArticleNum; n++){
                var article = articles.find((article) => article.articleNum === n);
                article["articleNum"] = article.articleNum - 1;
            }
            
        }

    }

    res.send(articles);
}

//changes an article's contents using the articleNum as a point of reference
const changeArticle = (req, res) => {

    // finds the article 
    var article = articles.find((article) => article.articleNum === parseInt(req.params.articleNum, 10));

    // checks if the article exists
    if (article == null){
        res.status(400);
        res.send("article does not exist");
        return;
    }

    // checks if the article change is valid (acutally specifed changes)
    if (req.body.title == null && req.body.body == null){
        res.status(400);
        res.send("cannot make no change");
    }

    //TO-DO: add a function to check if author is consistant

    //changes corresponding to what is requested
    if (req.body.title != null){
        article["title"] = req.body.title;
    }

    if (req.body.body != null){
        article["body"] = req.body.body;
    }

    res.send(article);
}

module.exports = {
    getForum,
    getArticle,
    createArticle,
    deleteArticle,
    changeArticle
}