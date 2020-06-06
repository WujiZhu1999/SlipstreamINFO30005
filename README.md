# INFO30005Bike Slipstream

# https://slipstream3.herokuapp.com/

Group Members:
Nathan Harvey 997261
Chloe Thai 995204
Thy Le 980822
LIJUN WANG 904796
Wuji Zhu 956195

-an example username and password is:
userName: yoyo
password: qwerty
  
 or you can make your own account

        NOTE: we are still not hashing our passwords, and just storing them as plaintext, as it is not a core functionality. DO NOT use any passwords you use for other accounts

To access any feature on our website, you must be logged in: click here to log in https://slipstream4.herokuapp.com/ or https://slipstream4.herokuapp.com/login

Functionality: A forum (where users can post articles) and tips (provided by the administrator) functionality
-Forum https://slipstream4.herokuapp.com/Forum
a user forum to share information and chat to other users https://slipstream4.herokuapp.com/Forum
a user can create a post, or comment on other users posts https://slipstream4.herokuapp.com/Forum
a user can edit their own comments or posts, or delete them https://slipstream4.herokuapp.com/Forum/1
  
 controllers/forum.js
model/article.js
routes/forum.js
views/forum/article.pug
views/forum/change_article.pug
views/forum/change_comment.pug
views/forum/forum.pug

        -Tips https://slipstream4.herokuapp.com/Tips
                users can see tips relating to cycling and safety, added by the page moderators through the back end

                controllers/tips.js
                model/tips.js
                routes/tips.js
                views/tips/tips.pug

        -Friends
                a user can add other users as friends either by clicking their names on articles and comments, or by searching
                their names on the friends page.

                Friends page: https://slipstream4.herokuapp.com/Friends

                controllers/friends.js
                model/friends.js
                routes/friends.js
                views/friends/friends.pug



Functionality: A dashboard to show summarised users details regarding bike rides (energySaved,carbonSaved and streaks), and a leaderboard
a user can view their own statistics as well as where they are ranked within a leaderbaord of friends
  
 can be assessed by : https://slipstream4.herokuapp.com/ when logged into a user
  
 controllers/dashboard.js
model/users.js
routes/dashboard.js
views/main/dashboard.pug

Functionality: A map functionality where a user can look at bike routes, save them, and track their riding
a user can search for the best routes from one place to another by bike, using googles embeded map api, or choose one
they have cycled recently
the user can then start the route, and either end it when they are dont, or abandon it
they can store a favourite route for later, which will store the number of times they cycle the route, as well as the
number of successful times they complete it
  
 controllers/map.js
model/route.js
routes/map.js
views/map/end.pug
views/map/map.pug
views/map/maphome.pug
views/map/ride.pug
views/map/welcome.pug

in addition to theses, some features that are needed for the core functionalities to function have been implemented, such as:
-Logging in/ registering
a user can create an account, or log into an already existing account using a username and password
https://slipstream4.herokuapp.com/login
  
 -user
they can edit their settings, such as their name or password
https://slipstream4.herokuapp.com/Users/yoyo
  
 controllers/users.js
model/users.js
routes/users.js
views/main/loggedOut.pug
views/login.pug
views/user_profile.pug

        the settings page, as well as the logout button and friends page are found in a dropdown under the username button

Testing
run the tests, simply run "npm test"
for the integration tests you will need to have the environment variable for the database set
creating a file named .env with the line "MONGO_PASSWORD=P31gZzQhxZh0WhNs" will give you access