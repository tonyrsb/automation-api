/* eslint-disable no-console */
const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));
require ('dotenv').config();

const code = require('../helpers/status_code.json');
const schema = require('../data/get_posts_schema.json');
const { getPosts } = require('../page/get_posts_page');

const testCase = {
	describe: 'Get Posts',
	describePositive: 'Positive Test Case',
	positive: 'As an user, I can Get Posts and make sure the response have correct data type'
};

describe(`@get @getPosts ${testCase.describe}`, () => {
	describe(testCase.describePositive, () => {
		it(testCase.positive, async () => {
			const response = await getPosts();
			assert(response.status).to.equal(code.successOK.codeNumber, response.body.message);
            assert(response.body).to.be.jsonSchema(schema);
		});
	});
	
});