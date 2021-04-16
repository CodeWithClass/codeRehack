const functions = require("firebase-functions");

const express = require("express");
const contactUs = express();
contactUs.use(express.json());
const prepareEmail = require("./emails/index.js");
const { newCRmessage, newDEmessage } = require("./emails/newMessage");

contactUs.get("/contact_codeRehack", async (_req, res) => {
	prepareEmail({
		data: {},
		templateFile: "newCRmessage.mjml",
		setMailOptions: newCRmessage,
	})
		.then((_res) => {
			res.json({ res: "sent" });
		})
		.catch((_err) => {
			res.status(500).send({ res: _err });
		});
});

exports.contactUs = functions.https.onRequest(contactUs);
