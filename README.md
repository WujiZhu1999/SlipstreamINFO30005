# INFO30005Bike Slipstream 
# https://slipstream1.herokuapp.com/

TO LOG IN:
        -an example username and password is:
                userName: yoyo
                password: qwerty
        
        we have a route for register user (POST /login/register), but because it users the user controller, and we dont have a real database set up for now, it uses a separate instance of the users.js json model, 
        and so you wont be able to log in with users you create through this. This will not be the case for the next deliverable, as they will all access the same database

Functionality: A dashboard to show summarised users details regarding bike rides (energySaved,carbonSaved and streaks)
        Users
        URL: /users
        We have implemented:
                deleting a new user (DELETE /users/:userName)
                fetching information about the user (GET /users/:userName) (We'll sort out what information we send later, it wont just be the whole thing)
                edit a user, changing something about them (POST /users/:userName)

        Login
        URL /login
        We have implemented:
                get the login page (GET /login)
                log in (POST /login)
                get the register page (GET /login/register)
                register a new account (POST /login/register)
                logout (POST /login/logout)

        Friends
        URL /friends
        We have implemented:
                get a list of pending friend requests (GET /friends)
                send a friend request, or accept a friend request (POST /friends/:userName)


        
        


Functionality: A forum (where users can post articles) and tips (provided by the administrator) functionality
    
    Forum
    URL: /forum
    For the Forum we have implemented the functions to:
            get a forum page that displays all the titles of the current articles (forum)
            get a particlar article based on the number & corresponding comments(forum/articleNum)
            delete an article (forum/articleNum)
            editing a particlar article (forum/articleNum) using a post request
            create an article using a post request 
            create a new comment on a particular article
            delete a comment
            edit a comment 

    Tips
    URL: /tips
    For tips we have implemented the functions to: 
        get a tip page that diplays all the titles of the current tips (tips)
        get a particular tip using a tipNumber (tips/tipNum)
        create a new tip using a post request 
        delete a tip pasted on a tipNumber (tips/tipNum)

        (we did not to a editing since we an assume this can be done manually)
    
    

Functionality: A map functionality where a route can be created linking to a MAP API

    URL: /map
        We have implemented:
                fetching a map (now is juts a text "Map") (GET /map/)
                get initial info of route from API (POST /map/)


        URL: /map/route
        We have implemented:
                deleting a route (DELETE /map/route)
                fetching information of a route (GET /map/route) 
                edit info of a route (POST map/route)
        
        URL: /map/finish
        We have implemented:
                finish a route and update personal record from that(POST map/finish)

                
Expected way to communicate with google map API. We are going to use Google Map API/Direction through following steps.

    1.	In app.js(entry point) contain these for cross domain: 
        >>	app.all('*', function(req, res, next) {
        >>	    res.header('Access-Control-Allow-Origin', '*')
        >>          res.header('Access-Control-Allow-Headers', 'X-Requested-With')
        >>          res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
        >>          res.header('X-Powered-By', ' 3.2.1')
        >>          res.header('Content-Type', 'application/json;charset=utf-8')
        >>          next()
        >>      })
    2.	In MapController.js we call google map api through passed in:
                1.Source
                2.Destination
                3.Key (our unique after we pay for the api)
                4.Region (Australia in this case since we are dealing with Melbourne bike path)
        Code:
        >>      const axios = require('axios') //for cross domain
        >>      const { data } = await axios({ url: `https://maps.googleapis.com/maps/api/directions/json?                                       
        >>          origin=${req.query.origin}&destination=${req.query.destination}&key=${req.query.key}&region=${req.query.region}`})
        >>      //for example outcome(response): see https://developers.google.com/maps/documentation/directions/start
        Then we can put the map(actual active map) through front end and update:
                1. personal info by calculating distance
                2. route info by response
        In this phase we mock up the API by array with just info about road and distance for which are enough for server side
        
    In this phase we won't actually implement then but just put

Alongside all this functionality users have been implement to compliment them
        
