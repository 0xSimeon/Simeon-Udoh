/* A  function that takes one parameter (a whole number/integer) and checks if numbers from 1 to the given parameter (inclusive) are divisible by 2,3,5 while replacing with the appropriate words.
*/
const assignWord1 = (num) => {
	//==> A variable and array defined.
	let arr = [];
	let currentElem; // to store the value of current Element 

	//==> Loop through to get all numbers and check conditions to assign values;
	for (let i = 1; i <= num; i++) {
		if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
			currentElem = "yu-gi-oh";
		} else if (i % 2 === 0 && i % 3 === 0) {
			currentElem = "yu-gi";
		} else if (i % 2 === 0 && i % 5 === 0) {
			currentElem = "yu-oh";
		} else if (i % 3 === 0 && i % 5 === 0) {
			currentElem = "gi-oh";
		} else if (i % 2 === 0) {
			currentElem = "yu";
		} else if (i % 3 === 0) {
			currentElem = "gi";
		} else if (i % 5 === 0) {
			currentElem = "oh";
		} else {
			currentElem = i;
		}
		//add the current element to the end of arr
		arr.push(currentElem);
	}
	console.log(arr);
	// return the value of modified arr;
	return arr;
};

// initiating/invoking the function
assignWord(100);
assignWord(10);  




/****************
 * Alternative Switch case implementation
 */
/* const assignWord1 = (num) => {
	let arr = [];
	let currentElem;
	for (let i = 1; i <= num; i++) {
		switch (true) {
			case i % 2 === 0 && i % 3 === 0 && i % 5 === 0:
				currentElem = "yu-gi-oh";
				break;
			case i % 2 === 0 && i % 3 === 0:
				currentElem = "yu-gi";
				break;
			case i % 2 === 0 && i % 5 === 0:
				currentElem = "yu-oh";
				break;
			case i % 3 === 0 && i % 5 === 0:
				currentElem = "gi-oh";
				break;
			case i % 2 === 0:
				currentElem = "yu";
				break;
			case i % 3 === 0:
				currentElem = "gi";
				break;
			case i % 5 === 0:
				currentElem = "oh";
				break;
			default:
				currentElem = i;
				break;
		}

		arr.push(currentElem);
	}
	console.log(arr);
	return arr; 
};

assignWord1(100);
assignWord1(10);

*/