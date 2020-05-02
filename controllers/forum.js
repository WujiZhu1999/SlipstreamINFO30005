//All the controlers relating to forums
//Author: Chloe Thai
//Student Numbe : 995204
var articles = require('../models/article.js');

//Forum Page
const getForum = (req, res) => {

    var output = "<h1> Forum </h1>";

    var largestArticleNum = 1;

    article = articles.find((article) => article.articleNum ==  largestArticleNum);

    //display the title all the articles
    while(article!=null){
        newTitle = "<br>" + article.title;
        output += newTitle;
        largestArticleNum++;
        article = articles.find((article) => article.articleNum ==  largestArticleNum);
    }

    res.send(output);
}

//Gets a new article according to the article number 
const getArticle = (req, res) => {

    const number = parseInt(req.params.articleNum, 10);
    const article = articles.find((a) => a.articleNum === number);
    
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
}

//Creates a new article
const createArticle = (req, res) => {

    //checks whether all the paramters needed to create an article is present
    if (req.body.title == null || req.body.body == null){
        res.status(400);
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
        "author":req.session.user,
        "comments": []
    });

    res.send(articles.find((article) => article.articleNum == newArticleNum));
}


// Deleting an article
const deleteArticle = (req, res) => {
    var enteredNumber = parseInt(req.params.articleNum, 10);

 

    //check's if the article requested to be deleted exsists
    if (articles.find((article) => article.articleNum === enteredNumber) == null){
        res.status(400);
        res.send("this article does not exist ");
        return;
    }

    //checks if the user is authorised to remove the article
    if (req.session.user != (articles.find((article) => article.articleNum === enteredNumber)).author){
        res.status(400);
        res.send("you are not authorised to delete this article");
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

        res.send();
        return;
    }

   

    else{
        articles.splice(articleIndex,1);

        var numberAfterArticle = enteredNumber + 1;

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
        return;
    }

    // checks if the user has permission to edit a particular article

    if (req.session.user != article.author){
        res.status(400);
        res.send("you are not authorised to change this article");
        return;
    }

    //changes corresponding to what is requested
    if (req.body.title != null){
        article["title"] = req.body.title;
    }

    if (req.body.body != null){
        article["body"] = req.body.body;
    }

    res.send();
}

//Creates a new comment
const createComment = (req, res) => {

    // checks if the article exists
    if (article == null){
        res.status(400);
        res.send("article does not exist");
        return;
    }

    var article = articles.find((article) => article.articleNum === parseInt(req.params.articleNum, 10));

    //checks whether all the paramters needed to create an comment is present
    if (req.body.commentBody == null){
        res.status(400);
        res.send("There is incomplete data");
        return;
    }


    //allocates an author to the comment
    if (req.session.user != null){
        var author = req.session.user
    }

    else {
         var author = "anonymous";
    }

    var newCommentNum = 1;

    //allocates the lowest comment number availiable (larger then 0)
    for (i in article.comments) {
        newCommentNum++;
    }


    //pushes the comment into the article comment list
    article.comments.push({
        "commentNumber": newCommentNum,
        "commentBody":req.body.commentBody,
        "commentAuthor": author
    });

    res.send();
}

const deleteComment = (req, res) => {
    var enteredNumber = parseInt(req.params.commentNum, 10);
    var articleNumber = parseInt(req.params.articleNum, 10);
    var article = articles.find((article) => article.articleNum === articleNumber);

    // checks if the article exists
    if (article == null){
        res.status(400);
        res.send("article does not exist");
        return;
    }

    //check's if the article requested to be deleted exsists
    
    var commentStatus = 0;

    for (i in article.comments) {
        if (enteredNumber == article.comments[i].commentNumber){
            commentStatus = 1;
            var comment = article.comments[i];
            var commentIndex = enteredNumber - 1;
        }
    }

    if (commentStatus == 0){
        res.status(400);
        res.send("this comment does not exist");
        return;
    }

    //checks if the user is authorised to remove the comment
    if ((req.session.user == null) || (req.session.user != article.comments[commentIndex].commentAuthor)){
        res.status(400);
        res.send("you are not authorised to delete this comment");
        return;
    }

    var largestCommentNumber = 1;

    //allocates the lowest article number availiable (larger then 0)
    for (i in article.comments) {
        largestCommentNumber++;
    }
    
    //slipices according to index
    if (commentIndex == 0){
        article.comments.splice(0,1);
    
        //changes all numbers afterwards
        if (largestCommentNumber!=1){
            for(n=1; n < largestCommentNumber - 1; n++){
                article.comments[n]["commentNumber"] = article.comments[n].commentNumber - 1;
            }
        }

        res.send();
        return;
    }

   

    else{
        article.comments.splice(commentIndex,1);

        var numberAfterComment = enteredNumber + 1;

        if(largestCommentNumber >= numberAfterComment){
            
            //changes all numbers afterwards
            for(n = numberAfterComment - 1 ; n < largestCommentNumber - 1; n++){
                article.comments[n]["commentNumber"] = article.comments[n].commentNumber - 1;
            }
            
        }

    }
    
    res.send();

}

const changeComment= (req, res) => {
    var enteredNumber = parseInt(req.params.commentNum, 10);
    var articleNumber = parseInt(req.params.articleNum, 10);
    var article = articles.find((article) => article.articleNum === articleNumber);

    // checks if the article exists
    if (article == null){
        res.status(400);
        res.send("article does not exist");
        return;
    }

    //checks if the comment exists

    var commentStatus = 0;

    for (i in article.comments) {
        if (enteredNumber == article.comments[i].commentNumber){
            commentStatus = 1;
            var comment = article.comments[i];
            var commentIndex = enteredNumber - 1;
        }
    }

    if (commentStatus == 0){
        res.status(400);
        res.send("this comment does not exist");
        return;
    }

    //checks if the user is authorised to edit the comment
    if ((req.session.user == null) || (req.session.user != article.comments[commentIndex].commentAuthor)){
        res.status(400);
        res.send("you are not authorised to edit this comment");
        return;
    }

    //checks that a change is acutally being made
    if (req.body.commentBody == null){
        res.status(400);
        res.send("no changes to make to comment");
        return;
    }

    
    
     //changes corresponding to what is requested
    if (req.body.commentBody != null){
        article.comments[commentIndex]["commentBody"]  = req.body.commentBody;
    }
    

   res.send();
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