var button = document.getElementById("button");

button.addEventListener("click", function () {
	var unit = document.getElementById("units").value;
	var temperature = Number(document.getElementById("temperature").value, 10);
	var displayedTemp = document.getElementById("conversion");
	if(unit === "fahrenheit") {
		displayedTemp.innerText = (temperature + " degrees Celsius converts to " + (temperature * 9/5 + 32) + " degrees Fahrenheit.");
	}
	else {
		displayedTemp.innerText = (temperature + " degrees Fahrenheit converts to " + (temperature - 32) * 5 / 9 + " degrees Celsius.");
	}
});