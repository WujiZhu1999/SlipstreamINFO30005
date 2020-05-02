//Forum article
//ideally ghave author automatically allocated when created
const articles = [
    {
        "articleNum" : 1,
        "title" : "I RODE MY BIKE",
        "body" : "MY BIKE IS SO GOOD I RODE IT",
        "author" : "food",
        "comments": [
            {
                "commentNumber": 1,
                "commentBody": "great job!",
                "commentAuthor": "yoyo"
            },

            {
                "commentNumber": 2,
                "commentBody": "thank you!",
                "commentAuthor": "food"
            },

        ]
    },

    {
        "articleNum" : 2,
        "title" : "It was raining today...",
        "body" : "The rain today meant I could not ride my bike. Hopefully tomorrow it is sunny!",
        "author" : "food", 
        "comments": [
            {
            "commentNumber": 1,
            "commentBody": "days like that are the worst!",
            "commentAuthor": "yoyo"
        }
        ]
    }
]

module.exports = articles; 