const newCRmessage = (_data, html_) => {
	const mailOptions = {
		from: "noreply@codeRehack.com",
		to: "dominiccevans@gmail.com",
		subject: "New codeRehack Message",
		text: "Theres a new msg waiting",
		html: html_,
	};

	return mailOptions;
};

const newDEmessage = (_data, html_) => {
	const mailOptions = {
		from: "noreply@aspireForChange.app",
		to: "dominiccevans@gmail.com",
		subject: "New dominiccevans.dev Message",
		text: "Theres a new msg waiting",
		html: html_,
	};

	return mailOptions;
};

module.exports = { newCRmessage, newDEmessage };
