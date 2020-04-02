let data, interestData;

data = [
	{ principal: 2500, time: 1.8 },
	{ principal: 1000, time: 5 },
	{ principal: 3000, time: 1 },
	{ principal: 2000, time: 3 }
];
function interestCalculator(arr) {
	arr.forEach(element => {
		if (element.principal >= 2500 && element.time > 1 && element.time < 3) {
			element.rate = 3;
		} else if (element.principal >= 2500 && element.time >= 3) {
			element.rate = 4;
		} else if (element.principal < 2500 || element.time <= 1) {
			element.rate = 2;
		} else {
			element.rate = 1;
		}
		element.interest = (element.principal * element.rate * element.time) / 100;
	});

	interestData = data.map(element => {
		return element;
	});
	console.log(interestData);
	return interestData;
}

interestCalculator(data);


