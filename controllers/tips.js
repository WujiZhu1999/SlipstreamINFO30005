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
    if (req.body.number == null || req.body.title == null || req.body.body == nulll){
        res.status(400)
        res.send("There is incomplete data");
        return;
    }

    if (tips.find((tip) => tip.tipNum === req.body.number) != null) {
        res.status(400)
        res.send("This tip number already allocated");
        return;
    }

    tips.push({
        "tipNum":req.body.number,
        "title":req.body.title,
        "body":req.body.body,
    });

    res.send();
}

// Deleting an tip
const deleteTip = (req, res) => {
    if (tips.find((tip) => tip.tipNum === req.params.tipNum) == null){
        res.status(400)
        res.send("this tip does not exist " + req.params.tip);
        return;
    }

    users.splice(tips.findIndex((tip) => tips.tipNum === req.params.tipNum), 1);
    res.send();
}

module.exports = {
    getTips,
    getTip,
    createTip,
    deleteTip
};