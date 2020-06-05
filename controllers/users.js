const mongoose = require("mongoose");
const User = mongoose.model("users");
const Friends = mongoose.model("friends")
const Article = mongoose.model("article");

/*
    1.createUser: -> if user exist -> if all data need given from req -> waiting database create user -> return :)
    2.deleteUser: -> if user exist -> delete User -> logyou out -> return to main page
    3.getUser:    -> check by userName(Identifier) -> return user if there is any
    4.changeUser: -> change user's info despite userName cuz that's the identifier
*/

//register a new user
const createUser = async (req, res) => {
    //if the form is incomplete, send an error
    try{
        if (req.body.name && req.body.userName && req.body.password){
            //if user name being taken by somebody else
            const _had = await User.findOne({"userName":req.body.userName});
            if(_had){
                return res.render("error", {
                    error: "Username Taken",
                    redirect: "/login/register"
                });
            }
            else{
                //creates a new user
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

    //checks whether authorised to delete user
    if(req.body.userName!=req.session.user){
        return res.render("error", {
            error: "You are not authorised to delete this user",
            redirect: "/users/" + req.params.userName
        });
    }

    try{
        //if the username not provided
        if(!req.params.userName){
            
            return res.render("error", {
                 error: "Username not specified",
                 redirect: "/users/" + req.params.userName
            });
        }
        else{
            //delete user and its relationship with friends
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
        //find user on mongoDB
        const user = await User.findOne({"userName":req.params.userName});
        
        if(user){

            var articles = []
            //gett all articles from mongoDB
            const get_articles = await Article.find();

            //sort out the article from log in user
            for(i in get_articles){
                if(user.userName == get_articles[i].author){
                    articles.push(get_articles[i])
                }
                
            }
            //render info
            return await res.render("user/user_profile.pug", {
                user: user,
                articles: articles,
                active:"Home",
                userName: req.session.user
            });
        
    
        }//not found the user
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
    try{//if there no username provided
        if(!req.body.userName){res.status(400);return res.render("error", {
            error: "Username was not given",
            redirect: "/" 
        });;}
        //if username is not the curren log in user (ex:try to change someone else info)
        if(req.body.userName!=req.session.user){res.status(403); return res.render("error", {
            error: "You are not authorsied to change this user",
            redirect: "/users" + req.body.userName 
        });;}
        //find user on mongoDB
        const user = await User.findOne({"userName":req.body.userName});
        //if not found on on mongoDB ->error
        if(!user){
            return res.render("error", {
                error: "User " + req.body.userName +" does not exist ",
                redirect: "/"
           });
        }
        //if found user
        var info_new = {};
        //if put in new name ->change name
        if(req.body.name){info_new["name"] = req.body.name};
        //if put in new password ->change password
        if(req.body.password){info_new["password"] = req.body.password};
        //update all the info on mongoDB
        const update = await User.findOneAndUpdate({"userName":req.body.userName},info_new);
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