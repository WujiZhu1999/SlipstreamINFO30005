//We'll hash the passwords, we're not goint to be saving them as plain text

const users = [
    {
        "name" : "Chloe",
        "userName": "hello",
        "password" :"food",
        "data":{
            "totalDistance": 2,
            "energySaved": 12, //in KJ
            "carbonSaved": 2.1, //in KG
            "streak": 10 // days
        }
    },

    {
        "name" : "James",
        "userName": "yoyo",
        "password" :"qwerty",
        "data":{
            "totalDistance": 2,
            "energySaved": 12, //in KJ
            "carbonSaved": 2.1, //in KG
            "streak": 10 // days
        }
    },

    {
        "name" : "Shelly",
        "userName": "food",
        "password" :"cookie",
        "data":{
            "totalDistance": 2,
            "energySaved": 12, //in KJ
            "carbonSaved": 2.1, //in KG
            "streak": 10 // days
        }
    }

]

module.exports = users;
