/* eslint-disable no-console */
const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));
require ('dotenv').config();

const data = require('../data/post_posts_data.json');
const code = require('../helpers/status_code.json');
const schema = require('../data/post_posts_schema.json');
const { postPosts } = require('../page/post_posts_page');

const testCase = {
	describe: 'Post Posts',
	describePositive: 'Positive Test Case',
	positive: 'As an user, I can Post Posts and make sure the response have same data with payload'
};

describe(`@post @postPosts ${testCase.describe}`, () => {
	describe(testCase.describePositive, () => {
		it(testCase.positive, async () => {
			const response = await postPosts(data);
			assert(response.status).to.equal(code.successCreated.codeNumber, response.body.message);
			assert(response.body.title).to.equal(data.title);
			assert(response.body.body).to.equal(data.body);
			assert(response.body.userId).to.equal(data.userId);
			assert(response.body).to.be.jsonSchema(schema);
		});
	});
	
});