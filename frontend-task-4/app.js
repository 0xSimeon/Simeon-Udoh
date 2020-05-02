/*    

Task
Build a responsive quiz game. Your quiz game should function according to these specifications: 

It must have 5 questions of any topic of your choice
Each question must have a minimum of 3 options- 1 correct option and 2 or more wrong options.
A user can click an option to answer a question. If the correct option is clicked, the option is given a green background with a white text. If it's wrong, then it is given a red background with white text while the correct option is given a green background and white text.
It has a visible score counter that records how many questions have been correctly answered.
It has a next button that can be clicked to display the next question.
The game ends after the 5th question and shows the total attained score.
Submission: 
Submit the GITHUB PAGES link. This link should be your HOSTED version of the app. 

Total Obtainable Points: 10


Deadline: 10/05/2020 12:00 AM

*/


/*************************************************
 * QUESTIONS 
 */
/*
1. Inside which HTML element do we put the JavaScript?
<javascript>
<link>
<style>
<script>



2. What is the correct syntax for referring to an external script called "app.js"?

<script src="xxx.js">
<script href="xxx.js">
<script name="xxx.js">
<script url="app.js">

3. How do you write "Hello World" in an alert box?

alert("Hello World");
msg("Hello World");
alertBox("Hello World");
promt("Hello World");
 

4. How do you create a function in JavaScript? 
function = myFunction(){}
function myFunction(){}
function: myFunction(){}
myFunction() function{} 

5. How would you call a function called myFunction in javascript?
call myFunction()
myFunction
invoke myFunction
myFunction() 
*/

const date = new Date().getFullYear();
document.querySelector('#year').innerHTML = date; 