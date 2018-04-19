function selectOption()
{
	var option = document.getElementById('browser-type').value
	console.log(option);
	if (option == 'Google Chrome')
		console.log("Bingo - great browser!")
	else
		console.log("Just anothr browser...");
	document.getElementById("fave").innerHTML = "Your favourite browser is: " + option;
}