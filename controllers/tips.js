var tips = require('../models/tips.js');

const getTips = (req, res) => {
    res.send("<h1>tips</h1>");
}

const getTip = (req, res) => {
    const id = req.params.tipNum;
    const tip = tips.find((a) => a.tipNum === id);
    
    if(tip){
        res.send("<h1> Tip: " + tip.title + "</h1>" +  "<body>" + tip.body + "</body>");
    }

    else{
        res.send("This tip does not exists");
    }
}

const createTip = (req, res) => {
    if (req.body.title == null || req.body.body == null){
        res.status(400)
        res.send("There is incomplete data");
        return;
    }
    var newTipNum = 1;

    while(tips.find((tip) => tip.tipNum == newTipNum) != null){
        newTipNum++;
    }

    tips.push({
        "tipNum":(""+newTipNum),
        "title":req.body.title,
        "body":req.body.body,
    });

    res.send(tips);
}

// Deleting an tip
const deleteTip = (req, res) => {
    if (tips.find((tip) => tip.tipNum === req.params.tipNum) == null){
        res.status(400)
        res.send("tip " + req.params.tipNum + " does not exist");
        return;
    }

    var tipIndex = tips.findIndex((tip) => tips.tipNum === req.params.tipNum);
    
    if (tipIndex = 0){
        tips.splice(1,);
    }

    else{
        tips.splice(tipIndex, 1);
    }

    res.send();
}

module.exports = {
    getTips,
    getTip,
    createTip,
    deleteTip
};