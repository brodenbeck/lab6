function convertTemp(temp, toUnit) {
	if(toUnit === "F") {
		convertedTemp = (temp * 9/5 + 32);
		console.log(temp + " degrees Celsius converts to " + convertedTemp + " degrees Fahrenheit.");
	}
	else if(toUnit === "C") {
		convertedTemp = (temp - 32) * 5 / 9;
		console.log(temp + " degrees Fahrenheit converts to " + convertedTemp + " degrees Celsius.");
	}
	else {
		console.log('Please enter your temperature unit as either Celsius ("C") or Fahrenheit ("F").')
	}
}

convertTemp(32, "C");