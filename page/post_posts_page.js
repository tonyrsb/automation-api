const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.API_URL);

const postPosts = (payload) => api
	.post('/posts')
	.send(payload);


module.exports = {
	postPosts
};
