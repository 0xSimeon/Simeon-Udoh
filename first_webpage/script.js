/* First StartNG JS Task */
let name, courses;
name = "Simeon Udoh";
courses = ["Html", "Css", "Javascript"];

console.log(
	`My name is ${name} and the courses I am offering are: ${courses}.`
);

/***********
 * My number of courses = 3 (odd)
 * A loop to get all odds numbers between (1-200)
 */

for (i = 0; i <= 200; i++) {
	// Checking if the number of courses is odd or even.
	if (courses.length % 2 !== 0 && i % 2 !== 0) {
		// If it evaluates to True, then:
		console.log(i);
	} else {
		// Do something
	}
}
