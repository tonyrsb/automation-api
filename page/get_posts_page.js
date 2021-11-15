const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.API_URL);

const getPosts = () => api
	.get('/posts')


module.exports = {
	getPosts
};
