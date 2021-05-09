const axios = require("axios");

const scrape = async (url) => {
	return axios
		.get(url)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return console.log(error);
		});
};

module.exports = { scrape };
