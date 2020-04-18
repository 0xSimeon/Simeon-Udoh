/* A  function that takes one parameter (a whole number/integer) and checks if numbers from 1 to the given parameter (inclusive) are divisible by 2,3,5 while replacing with the appropriate words as specified below.

==>  Numbers divisible by 2 are replaced with "yu"

==> Numbers divisible by 3 are replaced with "gi"

==> Numbers divisible by 5 are replaced with "oh"

==> Numbers are unchanged if not divsible by any of the above

N/B: If a number is divisible by more than one of the above, the words are replaced and joined representing their divsiors, separated by hyphen (-).

*/
const assignWord = num => {
	//==> A variable and array defined.
	let arr = [];
    let current;
    
	// ==> Loop through to get all numbers and check conditions to assign values;
	for (let i = 1; i <= num; i++) {
		if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
			current = "yu-gi-oh";
		} else if (i % 2 === 0 && i % 3 === 0) {
			current = "yu-gi";
		} else if (i % 2 === 0 && i % 5 === 0) {
			current = "yu-oh";
		} else if (i % 3 === 0 && i % 5 === 0) {
			current = "gi-oh";
		} else if (i % 2 === 0) {
			current = "yu";
		} else if (i % 3 === 0) {
			current = "gi";
		} else if (i % 5 === 0) {
			current = "oh";
		} else {
			current = i;
		}
		//add the current element to the end of arr
		arr.push(current);
	}
	console.log(arr);
	// return the value of modified arr;
	return arr;
}

// initiating/invoking the function
assignWord(10); 
