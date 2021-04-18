function call() {
	let data = getFormData($("#contact-form"));

	const url =
		"http://localhost:5001/coderehack-dotcom/us-central1/contactUs/contact_codeRehack";
	fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
	})
		.then(
			(response) => response.text() // .json(), etc.
		)
		.then((res) => console.log(res));
}

function getFormData($form) {
	var unindexed_array = $form.serializeArray();
	var indexed_array = {};

	$.map(unindexed_array, function (n, i) {
		indexed_array[n["name"]] = n["value"];
	});

	return indexed_array;
}
