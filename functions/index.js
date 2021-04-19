const functions = require("firebase-functions");

const express = require("express");
const contactUs = express();
contactUs.use(express.json());
const prepareEmail = require("./emails/index.js");
const { newCRmessage, newDEmessage } = require("./emails/newMessage");

contactUs.post("/contact_codeRehack", async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	const data = JSON.parse(req.body);

	prepareEmail({
		data: data,
		templateFile: "newCRmessage.mjml",
		setMailOptions: newCRmessage,
	})
		.then(() => {
			res.json({ success: true });
		})
		.catch((_err) => {
			res.status(500).send({ success: false, err: _err });
		});
});

contactUs.post("/contact_dominicevans", async (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	const data = req.body;

	prepareEmail({
		data: data,
		templateFile: "newDEmessage.mjml",
		setMailOptions: newDEmessage,
	})
		.then(() => {
			res.json({ success: true });
		})
		.catch((_err) => {
			res.status(500).send({ success: false, err: _err });
		});
});

exports.contactUs = functions.https.onRequest(contactUs);
