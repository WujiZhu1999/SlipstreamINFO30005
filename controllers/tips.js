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
        return res.render("error", {
            error: "Server Error: Failed to get tips",
            redirect: "/" 
        });
    }
}

//get a particular tip based off of the tipNumber
const getTip = async (req, res) => {
    const id = parseInt(req.params.tipNum, 10);
    
    try{
        const _tip = await Tips.findOne({"tipNum":id});

        if(_tip){

            return res.render('tips/tip.pug', {
                title:"Tips",
                active:"Tips",
                current_tip : _tip,
                userName: req.session.user
            });
        }

        else{
            return res.render("error", {
                error: "This tip does not exist",
                redirect: "/tips" 
            });
        }
    }

    catch(err){
        return res.render("error", {
            error: "Server Error: Failed to get tip " + req.params.tipNum,
            redirect: "/tips" 
        });
    }
}


module.exports = {
    getTips,
    getTip,
}