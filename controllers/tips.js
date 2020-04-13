const getTips = (req, res) => {
    res.send("<h1>tips</h1>");
}

const getTip = (req, res) => {
    res.send("<h1>tip " + req.params.tipName + "</h1>");
}

module.exports = {
    getTips,
    getTip
};