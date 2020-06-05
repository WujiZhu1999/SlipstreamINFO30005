const mongoose = require("mongoose");
const Tips = mongoose.model("tips");


//gets a tip page listing all the tips 
const getTips = async (req, res) => {
    try{
        //find tip posted on mogoDB
        const get_tips = await Tips.find();
        //render all the tip
        return res.render('tips/tips.pug', {
            title:"Tips",
            active:"Tips",
            current_tips : get_tips,
            userName: req.session.user
        });

    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to get tips",
            redirect: "/" 
        });
    }
}

//get a particular tip based off of the tipNum
const getTip = async (req, res) => {
    //if user put in tip id
    const id = parseInt(req.params.tipNum, 10);
    
    try{
        //find that tip id on mongoDB
        const found_tip = await Tips.findOne({"tipNum":id});
        //if found the tip
        if(found_tip){
            //render it
            return res.render('tips/tip.pug', {
                title:"Tips",
                active:"Tips",
                current_tip : found_tip,
                userName: req.session.user
            });
        }
        //render it
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