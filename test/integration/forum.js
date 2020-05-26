const supertest = require('supertest-session');
const expect = require('chai').expect;
const app = require('../../app.js');
const Article = require('../../models/article');


describe("forum integration test", () => {

    before(async () => {
        session = supertest(app)
        await session.post("/login").send({userName: "yoyo", password:"qwerty"});
        
        await Article.deleteMany({});
    });

    it("create article", async () => {
        const res = await session.post("/Forum").send({
            title:"new article",
            body:"new body"
        })

        expect(res.status).to.equal(302);

        const articles = await Article.find({});
        expect(articles).to.have.length(1);
        expect(articles[0]).to.have.property("articleNum");
        expect(articles[0]).to.have.property("title");
        expect(articles[0]).to.have.property("body");
        expect(articles[0]).to.have.property("author");
        expect(articles[0]).to.have.property("time");
        expect(articles[0]).to.have.property("edit");
        expect(articles[0]).to.have.property("comments");

        expect(articles[0].articleNum).to.equal(1);
        expect(articles[0].title).to.equal("new article");
        expect(articles[0].body).to.equal("new body");
        expect(articles[0].author).to.equal("yoyo");
        expect(articles[0].edit).to.equal(false);
        expect(articles[0].comments).to.have.length(0);


    });

    it("edit article", async () => {
        const res = await session.post("/Forum/1/edit").send({
            title: "newTitle",
            body: "newBody"
        });

        expect(res.status).to.equal(302);

        const articles = await Article.find({});
        expect(articles).to.have.length(1);

        expect(articles[0]).to.have.property("articleNum");
        expect(articles[0]).to.have.property("title");
        expect(articles[0]).to.have.property("body");
        expect(articles[0]).to.have.property("author");
        expect(articles[0]).to.have.property("time");
        expect(articles[0]).to.have.property("edit");
        expect(articles[0]).to.have.property("comments");

        expect(articles[0].articleNum).to.equal(1);
        expect(articles[0].title).to.equal("newTitle");
        expect(articles[0].body).to.equal("newBody");
        expect(articles[0].author).to.equal("yoyo");
        expect(articles[0].edit).to.equal(true);
        expect(articles[0].comments).to.have.length(0);
    });

    it("create comment with empty comments", async () => {
        const res = await session.post("/Forum/1").send({commentBody: "newComment"})
        expect(res.status).to.equal(302);

        const articles = await Article.find({});
        expect(articles).to.have.length(1);

        expect(articles[0]).to.have.property("comments");
        expect(articles[0].comments).to.have.length(1);

        expect(articles[0].comments[0]).to.have.property("commentBody");
        expect(articles[0].comments[0].commentBody).to.equal("newComment")
        expect(articles[0].comments[0]).to.have.property("commentNumber");
        expect(articles[0].comments[0].commentNumber).to.equal(1)
        expect(articles[0].comments[0]).to.have.property("time");
        expect(articles[0].comments[0]).to.have.property("edit");
        expect(articles[0].comments[0].edit).to.equal(false)
    });

    it("create comment with non empty comments", async () => {
        const res = await session.post("/Forum/1").send({commentBody: "newnewComment"})
        expect(res.status).to.equal(302);

        const articles = await Article.find({});
        expect(articles).to.have.length(1);

        expect(articles[0]).to.have.property("comments");
        expect(articles[0].comments).to.have.length(2);

        expect(articles[0].comments[1]).to.have.property("commentBody");
        expect(articles[0].comments[1].commentBody).to.equal("newnewComment")
        expect(articles[0].comments[1]).to.have.property("commentNumber");
        expect(articles[0].comments[1].commentNumber).to.equal(2)
        expect(articles[0].comments[1]).to.have.property("time");
        expect(articles[0].comments[1]).to.have.property("edit");
        expect(articles[0].comments[1].edit).to.equal(false)
    });

    it("edit comment", async () => {
        const res = await session.post("/Forum/1/1/edit").send({commentBody: "editComment"})
        expect(res.status).to.equal(302);

        const articles = await Article.find({});
        expect(articles).to.have.length(1);

        expect(articles[0]).to.have.property("comments");
        expect(articles[0].comments).to.have.length(2);

        expect(articles[0].comments[0]).to.have.property("commentBody");
        expect(articles[0].comments[0].commentBody).to.equal("editComment")
        expect(articles[0].comments[0]).to.have.property("time");
        expect(articles[0].comments[0]).to.have.property("edit");
        expect(articles[0].comments[0].edit).to.equal(true)
    });

    it("delete comment", async () => {
        const res = await session.post("/Forum/1/1/delete")
        expect(res.status).to.equal(302);

        const articles = await Article.find({});
        expect(articles).to.have.length(1);

        expect(articles[0]).to.have.property("comments");
        expect(articles[0].comments).to.have.length(1);

    });

    it("delete article", async () => {
        const res = await session.post("/Forum/1/delete")

        expect(res.status).to.equal(302);

        const articles = await Article.find({});
        expect(articles).to.have.length(0);
    });

    

    
})