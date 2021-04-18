const nodemailer = require("nodemailer");
var mjml2html = require("mjml");
var { compile } = require("handlebars");
var fs = require("fs");
const mailtrap = require("../mailtrap");
var transport = nodemailer.createTransport(mailtrap);

const prepareEmail = ({ data, templateFile, setMailOptions }) => {
	console.log({ ...data });
	return new Promise((resolve, reject) => {
		fs.readFile(__dirname + "/emailTemplates/" + templateFile, (err, html) => {
			if (err) reject(err);

			const htmlString = html.toString();
			const template = compile(htmlString);
			const mjml = template(data);
			const htmlOutput = mjml2html(mjml);
			const mailOptions = setMailOptions(data, htmlOutput.html);
			resolve(sendEmail(mailOptions));
			resolve();
		});
	});
};

const sendEmail = (_mailOptions) => {
	return new Promise((resolve, reject) => {
		transport.sendMail(_mailOptions, (err) => {
			if (err) return reject(err.toString());

			return resolve("sent");
		});
	});
};

module.exports = prepareEmail;
