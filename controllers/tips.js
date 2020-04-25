//All the controlers relating to tips
//Author: Chloe Thai
//Student Numbe : 995204

var tips = require('../models/tips.js');

//get's a tip page
const getTips = (req, res) => {
    var output = "<h1> Tips </h1>";

    var largestArticleNum = 1;

    tip = tips.find((tip) => tip.tipNum ==  largestArticleNum);

    while(tip!=null){
        newTitle = "<br>" + tip.title
        output += newTitle;
        largestArticleNum++;
        tip = tips.find((tip) => tip.tipNum ==  largestArticleNum)
    }

    res.send(output);
}

//get a particular tip based off of the tipNumber
const getTip = (req, res) => {
    const id = parseInt(req.params.tipNum, 10);
    const tip = tips.find((a) => a.tipNum === id);
    
    if(tip){
        res.send("<h1> Tip: " + tip.title + "</h1>" +  "<body>" + tip.body + "</body>");
    }

    else{
        res.send("This tip does not exists");
    }
}

//create a  tip
const createTip = (req, res) => {
    if (req.body.title == null || req.body.body == null){
        res.status(400)
        res.send("There is incomplete data");
        return;
    }
    var newTipNum = 1;

    //find the lowest tipNumber availiable 
    while(tips.find((tip) => tip.tipNum == newTipNum) != null){
        newTipNum++;
    }

    //create new data
    tips.push({
        "tipNum":(newTipNum),
        "title":req.body.title,
        "body":req.body.body,
    });

    res.send();
}

// Deleting an tip
const deleteTip = (req, res) => {
    var enteredNumber = parseInt(req.params.tipNum, 10);;

    //check's if the tip requested to be deleted exsists
    if (tips.find((tip) => tip.tipNum === enteredNumber) == null){
        res.status(400)
        res.send("this tip does not exist ");
        return;
    }

    //finds the tip's index
    var tipIndex = tips.findIndex((tip) => tip.tipNum === enteredNumber);
    
    var largestArticleNum = 1;

    //allocates the lowest tip number availiable (larger then 0)
    while(tips.find((tip) => tip.tipNum ==  largestArticleNum) != null){
        largestArticleNum++;
    }
    
    //slipices according to index
    if (tipIndex == 0){
        tips.splice(0,1);

    
        //changes all numbers afterwards
        if (largestArticleNum!=1){
        
            for(n=2; n < largestArticleNum; n++){
                var tip = tips.find((tip) => tip.tipNum === n);
                tip["tipNum"] = tip.tipNum - 1;
            }
        }

        res.send();
        return;
    }

   

    else{
        tips.splice(tipIndex,1);

        var numberAfterArticle = enteredNumber + 1

        if(largestArticleNum >= numberAfterArticle){
            
            //changes all numbers afterwards
            for(n = numberAfterArticle; n < largestArticleNum; n++){
                var tip = tips.find((tip) => tip.tipNum === n);
                tip["tipNum"] = tip.tipNum - 1;
            }
            
        }

    }

    res.send();
}

module.exports = {
    getTips,
    getTip,
    createTip,
    deleteTip
};