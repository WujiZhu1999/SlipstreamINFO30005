const mongoose = require("mongoose");
const User = mongoose.model("users");
const Friends = mongoose.model("friends")
const Article = mongoose.model("article");

//register a new user
const createUser = async (req, res) => {
    //if the form is incomplete, send an error
    try{
        if (req.body.name && req.body.userName && req.body.password){
            const _had = await User.findOne({"userName":req.body.userName});
            if(_had){
                return res.render("error", {
                    error: "Username not specified",
                    redirect: "/login/register"
                });
            }
            else{
                const _new  = await User.create({
                    "name":req.body.name,
                    "userName":req.body.userName,
                    "password":req.body.password,
                    "data":{
                        "totalDistance": 0,
                        "energySaved": 0,
                        "carbonSaved": 0,
                        "streak": 0
                    }
                });
                req.session.user = req.body.userName

                return res.redirect("/");
            }
        }
        else{
            return res.render("error", {
                error: "Incomplete Data",
                redirect: "/login/register"
            });
        }
    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to create user",
            redirect: "/login/register"
        });
    }
}

//delete a user of the chosen name
const deleteUser = async (req, res) => {
    if(req.body.userName!=req.session.user){
        return res.render("error", {
            error: "You are not authorised to delete this user",
            redirect: "/users/" + req.params.userName
        });
    }
    try{
        if(!req.params.userName){
            return res.render("error", {
                 error: "Username not specified",
                 redirect: "/users/" + req.params.userName
            });
        }
        else{
            await User.deleteOne({"userName":req.params.userName});
            await Friends.deleteMany({"receiver":req.session.user});
            
            await Friends.deleteMany({"sender":req.session.user});
            req.session.user = null;
            res.redirect("/")
        }
    }catch(err){
        return res.render("error", {
            error: "Server Side: Failed to delete user",
            redirect: "/users/" + req.params.userName
       });
    }
}

//fetch a users information, but not all the information (ie not password)
const getUser = async (req, res) => {
    try{ 
        const user = await User.findOne({"userName":req.params.userName});
        
        if(user){

            var articles = []

            const _articles = await Article.find();

            for(i in _articles){
                if(user.userName == _articles[i].author){
                    articles.push(_articles[i])
                }
                
            }

            return await res.render("user/user_profile.pug", {
                user: user,
                articles: articles,
                active:"Home",
                userName: req.session.user
            });
        
    
        }
        else{
            return res.render("error", {
                error: "User does not exist",
                redirect: "/" 
           });
        }
    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to get user",
            redirect: "/" 
       });
    }
}

//edit a user, if they change their information
const changeUser = async (req, res) => {
    try{
        if(!req.body.userName){res.status(400);return res.render("error", {
            error: "Username was not given",
            redirect: "/" 
        });;}
        if(req.body.userName!=req.session.user){res.status(403); return res.render("error", {
            error: "You are not authorsied to change this user",
            redirect: "/users" + req.body.userName 
        });;}
        const user = await User.findOne({"userName":req.body.userName});
        if(!user){
            return res.render("error", {
                error: "User " + req.body.userName +" does not exist ",
                redirect: "/"
           });
        }

        var _new = {};
        if(req.body.name){_new["name"] = req.body.name};
        if(req.body.password){_new["password"] = req.body.password};
        const update = await User.findOneAndUpdate({"userName":req.body.userName},_new);
        return res.redirect("/users/" + req.body.userName); 
    }catch(err){
        return res.render("error", {
            error: "Server Error: Failed to edit user",
            redirect: "/users/" + req.body.userName
       });
    }
}

module.exports = {
    createUser,
    deleteUser,
    getUser,
    changeUser
};