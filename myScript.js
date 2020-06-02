function myFunction() {
	document.getElementById("dateChange").innerHTML = "Paragraph changed.";
	const today = new Date();
	var options = { weekday: 'long'};
	// Sets the property of the text element to be a string representing today's date in the user's local format
	if (String(today.toLocaleDateString('da-DK', options)) === 'mandag') {
		document.getElementById("dateChange").innerHTML.text = 'JA!';
	} else {
		document.getElementById("dateChange").innerHTML.text = 'Nej det er: ' + today.toLocaleDateString('da-DK', options);
	}
}
	