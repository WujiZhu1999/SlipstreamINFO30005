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

Alongside all this functionality users have been implement to compliment them
        
