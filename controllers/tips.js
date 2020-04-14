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
    if (req.query.number == null || req.query.title == null || req.query.body == null){
        res.send("There is incomplete data");
        return;
    }

    if (users.find((tip) => tip.tipNum === req.query.number) != null) {
        res.send("This tip number already allocated");
        return;
    }

    users.push({
        "articleNum":req.query.number,
        "title":req.query.title,
        "body":req.query.body
    });

    res.send(users);
}

// Deleting an article
const deleteTip = (req, res) => {
    if (req.query.number == null || req.query.title == null || req.query.body == null){
        res.send("There is incomplete data");
        return;
    }

    if (tips.find((tip) => tip.tipNum === req.query.number) != null) {
        tips.delete({
            "tipNum":req.query.number,
            "title":req.query.title,
            "body":req.query.body,
        });
    }

    res.send(tips);
}

module.exports = {
    getTips,
    getTip,
    createTip
};