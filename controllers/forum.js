const getForum = (req, res) => {
    res.send("<h1> forum </h1>");
}

const getArticle = (req, res) => {
    res.send("<h1> article: " + req.params.articleName + "</h1");
}

module.exports = {
    getForum,
    getArticle
}