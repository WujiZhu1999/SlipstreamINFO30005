const sinon = require('sinon');
const expect = require('chai').expect;

const Article = require('../../models/article');
const controllers = require('../../controllers/forum');
const mongoose = require('mongoose');

describe('forum test', () => {
	const sandbox = sinon.createSandbox();

	afterEach(async () => {
		sandbox.restore();
	});

	it('create article', async () => {
		const fake = sinon.fake();
		const req = {
			body: {
				title: 'new article',
				body: 'new body',
			},
			session: {
				user: 'Username',
			},
		};

		const res = {
			render: fake,
			redirect: fake,
		};

		var newArticle = {};

		sandbox.replace(Article, 'create', (obj) => {
			newArticle = { ...obj, _id: '1111' };
			return Promise.resolve(newArticle);
		});

		sandbox.replace(Article, 'find', () => {
			return Promise.resolve([{ id: 0, articleNum: 0 }]);
		});

		await controllers.createArticle(req, res);
		const result = fake.lastCall.lastArg;

		expect(result).to.equal('/forum/1');
	});

	it('delete article', async () => {
		const fake = sinon.fake();
		const req = {
			params: {
				articleNum: 0,
			},
			session: {
				user: 'Username',
			},
		};

		const res = {
			render: fake,
			redirect: fake,
		};

		sandbox.replace(Article, 'findOne', (obj) => {
			return Promise.resolve({ author: 'Username', articleNum: 0 });
		});

		sandbox.replace(Article, 'deleteOne', (obj) => {
			expect(obj).to.have.property('articleNum');
			expect(obj.articleNum).to.equal(0);
			return Promise.resolve({});
		});

		await controllers.deleteArticle(req, res);
		const result = fake.lastCall.lastArg;

		expect(result).to.equal('/forum');
	});

	it('edit article', async () => {
		const fake = sinon.fake();
		const req = {
			params: {
				articleNum: '0',
			},
			session: {
				user: 'Username',
			},
			body: {
				title: 'newTitle',
				body: 'newBody',
			},
		};

		const res = {
			render: fake,
			redirect: fake,
		};

		sandbox.replace(Article, 'findOne', (obj) => {
			return Promise.resolve({
				articleNum: obj.articleNum,
				author: 'Username',
			});
		});

		sandbox.replace(Article, 'findOneAndUpdate', (obja, objb) => {
			expect(objb).to.have.property('title');
			expect(objb).to.have.property('body');
			expect(obja).to.have.property('articleNum');

			expect(objb.title).to.equal('newTitle');
			expect(objb.body).to.equal('newBody');
			expect(obja.articleNum).to.equal(0);
			return Promise.resolve({});
		});

		await controllers.changeArticle(req, res);
		const result = fake.lastCall.lastArg;

		expect(result).to.equal('/forum/0');
	});

	it('create comment with empty comments', async () => {
		const fake = sinon.fake();
		const req = {
			params: {
				articleNum: '0',
			},
			session: {
				user: 'Username',
			},
			body: {
				commentBody: 'newComment',
			},
		};

		const res = {
			render: fake,
			redirect: fake,
		};

		sandbox.replace(Article, 'findOne', (obj) => {
			expect(obj).to.have.property('articleNum');
			expect(obj.articleNum).to.equal(0);
			return Promise.resolve({
				articleNum: obj.articleNum,
				author: 'Username',
				comments: [],
			});
		});

		sandbox.replace(Article, 'findOneAndUpdate', (obja, objb) => {
			expect(obja).to.have.property('articleNum');
			expect(obja.articleNum).to.equal(0);

			expect(objb).to.have.property('comments');
			expect(objb.comments).to.have.lengthOf(1);
			expect(objb.comments[0]).to.have.property('commentBody');
			expect(objb.comments[0].commentBody).to.equal('newComment');
			expect(objb.comments[0]).to.have.property('commentNumber');
			expect(objb.comments[0].commentNumber).to.equal(1);
			expect(objb.comments[0]).to.have.property('time');
			expect(objb.comments[0]).to.have.property('edit');
			expect(objb.comments[0].edit).to.equal(false);

			return Promise.resolve({});
		});

		await controllers.createComment(req, res);
		const result = fake.lastCall.lastArg;

		expect(result).to.equal('/forum/0');
	});

	it('create comment with non empty comments', async () => {
		const fake = sinon.fake();
		const req = {
			params: {
				articleNum: '0',
			},
			session: {
				user: 'Username',
			},
			body: {
				commentBody: 'newComment',
			},
		};

		const res = {
			render: fake,
			redirect: fake,
		};

		sandbox.replace(Article, 'findOne', (obj) => {
			expect(obj).to.have.property('articleNum');
			expect(obj.articleNum).to.equal(0);
			return Promise.resolve({
				articleNum: obj.articleNum,
				author: 'Username',
				comments: [
					{
						commentNumber: 1,
					},
				],
			});
		});

		sandbox.replace(Article, 'findOneAndUpdate', (obja, objb) => {
			expect(obja).to.have.property('articleNum');
			expect(obja.articleNum).to.equal(0);

			expect(objb).to.have.property('comments');
			expect(objb.comments).to.have.lengthOf(2);
			expect(objb.comments[1]).to.have.property('commentBody');
			expect(objb.comments[1].commentBody).to.equal('newComment');
			expect(objb.comments[1]).to.have.property('commentNumber');
			expect(objb.comments[1].commentNumber).to.equal(2);
			expect(objb.comments[1]).to.have.property('time');
			expect(objb.comments[1]).to.have.property('edit');
			expect(objb.comments[1].edit).to.equal(false);
			expect(objb.comments[1]).to.have.property('commentAuthor');
			expect(objb.comments[1].commentAuthor).to.equal('Username');

			return Promise.resolve({});
		});

		await controllers.createComment(req, res);
		const result = fake.lastCall.lastArg;

		expect(result).to.equal('/forum/0');
	});

	it('delete comment', async () => {
		const fake = sinon.fake();
		const req = {
			params: {
				articleNum: '0',
				commentNumber: '1',
			},
			session: {
				user: 'Username',
			},
		};

		const res = {
			render: fake,
			redirect: fake,
		};

		sandbox.replace(Article, 'findOne', (obj) => {
			expect(obj).to.have.property('articleNum');
			expect(obj.articleNum).to.equal(0);
			return Promise.resolve({
				articleNum: obj.articleNum,
				author: 'Username',
				comments: [
					{
						commentNumber: 1,
						commentAuthor: 'Username',
					},
				],
			});
		});

		sandbox.replace(Article, 'findOneAndUpdate', (obja, objb) => {
			expect(obja).to.have.property('articleNum');
			expect(obja.articleNum).to.equal(0);

			expect(objb).to.have.property('comments');
			expect(objb.comments).to.have.lengthOf(0);

			return Promise.resolve({});
		});

		await controllers.deleteComment(req, res);
		const result = fake.lastCall.lastArg;

		expect(result).to.equal('/forum/0');
	});

	it('edit comment', async () => {
		const fake = sinon.fake();
		const req = {
			params: {
				articleNum: '0',
				commentNumber: '1',
			},
			session: {
				user: 'Username',
			},
			body: {
				commentBody: 'newBody',
			},
		};

		const res = {
			render: fake,
			redirect: fake,
		};

		sandbox.replace(Article, 'findOne', (obj) => {
			expect(obj).to.have.property('articleNum');
			expect(obj.articleNum).to.equal(0);
			return Promise.resolve({
				articleNum: obj.articleNum,
				author: 'Username',
				comments: [
					{
						commentNumber: 1,
						commentAuthor: 'Username',
					},
				],
			});
		});

		sandbox.replace(Article, 'findOneAndUpdate', (obja, objb) => {
			expect(obja).to.have.property('articleNum');
			expect(obja.articleNum).to.equal(0);

			expect(objb).to.have.property('comments');
			expect(objb.comments).to.have.lengthOf(1);
			expect(objb.comments[0]).to.have.property('commentBody');
			expect(objb.comments[0].commentBody).to.equal('newBody');
			expect(objb.comments[0]).to.have.property('commentNumber');
			expect(objb.comments[0].commentNumber).to.equal(1);
			expect(objb.comments[0]).to.have.property('time');
			expect(objb.comments[0]).to.have.property('edit');
			expect(objb.comments[0].edit).to.equal(true);

			return Promise.resolve({});
		});

		await controllers.changeComment(req, res);
		const result = fake.lastCall.lastArg;

		expect(result).to.equal('/forum/0');
	});
});
