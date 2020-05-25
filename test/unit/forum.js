  
const sinon = require('sinon');
const expect = require('chai').expect;

const Forum = require('../../models/article');
const controllers = require('../../controllers/forum');
const mongoose = require("mongoose")

describe("forum test", () => {
    const sandbox = sinon.createSandbox();

    after(async() => {
        sandbox.restore();
    })

    it("create article", async () => {
        const fake = sinon.fake();
        const req = {
            body:{
                title:"new article",
                body:"new body"
            },
            session: "Username"
        }

        const res = {
            render: fake
        }

        sandbox.replace(Forum, "create", (obj) => {
            return Promise.resolve({...obj, _id: "1111"})
        })

        sandbox.replace(Forum, "find", () => {
            //Promise.resolve([])
            return new mongoose.Query()
        })


        await controllers.createArticle(req, res);
        const result = fake.lastCall.lastArg;
        console.log("Aaas")
        console.log(result)

    })
})