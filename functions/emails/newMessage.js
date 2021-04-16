const newCRmessage = (data, html_) => {
	const mailOptions = {
		from: "noreply@codeRehack.com",
		to: "dominiccevans@gmail.com",
		subject: "New Message",
		text: "Theres a new msg waiting",
		html: html_,
	};

	return mailOptions;
};

const newDEmessage = (data, html_) => {
	const mailOptions = {
		from: "noreply@aspireForChange.app",
		to: data.user.email,
		subject: "New Prayer!",
		text: "Theres a new prayer waiting for you :)",
		html: html_,
	};

	return mailOptions;
};

module.exports = { newCRmessage, newDEmessage };
