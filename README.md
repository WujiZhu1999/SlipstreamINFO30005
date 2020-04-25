# INFO30005Bike Slipstream 

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
        


Functionality: A forum (where users can post articles) and tips (provided by the administrator) functionality
    
    Forum
    URL: /forum
    For the Forum we have implemented the functions to:
            get a forum page that displays all the titles of the current articles (forum)
            get a particlar article based on the number (forum/articleNum)
            deleteing an article (forum/articleNum)
            editing a particlar article (forum/articleNum) using a post request
            create an article using a post request 

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
                finish a route (POST map/finish)
Expected way to communicate with google map API. We are going to use Google Map API/Direction through following steps.

    1.	In index.js contain these for cross domain: 
    a)	app.all('*', function(req, res, next) {
    b)	  res.header('Access-Control-Allow-Origin', '*')
    c)	  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    d)	  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    e)	  res.header('X-Powered-By', ' 3.2.1')
    f)	  res.header('Content-Type', 'application/json;charset=utf-8')
    g)	  next()
    h)	})
    2.	In MapController.js
    a)	const axios = require('axios') for cross domain
    b)	const { data } = await axios({ url: `https://maps.googleapis.com/maps/api/directions/json?origin=${req.query.origin}&destination=${req.query.destination}&key=${req.query.key}&region=${req.query.region}`})
    // then we will get the data back for route with sample response like this
    c)	https://developers.google.com/maps/documentation/directions/start
    // then we can do the counting about route information which could present to users about route information and update personal records.

    For front-end presenting data, won’t considering that in this phase.


Alongside all this functionality users have been implement to compliment them
        
