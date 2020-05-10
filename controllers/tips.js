const mongoose = require("mongoose");
const Tips = mongoose.model("tips");


//get"s a tip page
const getTips = async (req, res) => {
    try{
        const _tips = await Tips.find();
        return res.render('tips/tips.pug', {
            title:"Tips",
            active:"Tips",
            current_tips : _tips,
            userName: req.session.user
        });

    }catch(err){
        res.status(400);
        return res.send("Database Failed getting all tips");
    }
}

//get a particular tip based off of the tipNumber
const getTip = async (req, res) => {
    const id = parseInt(req.params.tipNum, 10);
    try{
        const _tip = await Tips.findOne({"tipNum":id});
        if(_tip){

            return res.render('tips/tips.pug', {
                title:"Tips",
                active:"Tips",
                current_tips : _tips,
                userName: req.session.user
            }
        }

        else{
            res.status(404);
            return res.send("This tip does not exists");
        }
    }
    catch(err){
        res.status(400);
        res.send("Database failed, find one tip");
    }
}

module.exports = {
    getTips,
    getTip,
};