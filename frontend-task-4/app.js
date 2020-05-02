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






 // Elements selection

 const btnStart = document.getElementById('quiz-start');
 const quiz = document.querySelector('#quiz');
 const footer = document.querySelector('.footer');
 let currentScore = 0;  
 let currentQuestion = 1; 


 /*****************************************************************
  * Questions
  */

 const questions = [
    
    {
        question: "Inside which HTML element do we put the JavaScript?",
        A: "javascript",
        B: "link",
        C: "style",
        D: "script",
        correctAnswer: "C"
        

    },
    
    
    
    {   
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
    
        A:"<script name='app.js'>",
        B:"<script href='app.js'>",
        C:"<script src='app.js'>",
        D:"<script url='app.js'>",
        correctAnswer: "C"
    },
    
    { 
        "question":"How do you write 'Hello World' in an alert box?",
    
        A:"alert('Hello World');",
        B:"msg('Hello World');",
        C:"alertBox('Hello World');",
        D:"prompt('Hello World');",
        correctAnswer: "A"
    },
     
    
    { 
        question: "How do you create a function in JavaScript?", 
        A:"function = myFunction(){}",
        B:"function myFunction(){}",
        C:"function: myFunction(){}",
        D:"myFunction() function{}", 
        correctAnswer: "B"

    },
    
    { 
        question: "How would you call a function called myFunction in javascript?",
        A:"call myFunction()",
        B:"myFunction",
        C:"invoke myFunction",
        D:"myFunction()",
        correctAnswer: "D"   
    }

]

console.log(questions[0].A);





/*************************************
 * EVENT LISTENERS
 */

btnStart.addEventListener('click', (e) => {
    const markup = `
    <div class="quiz__box">
    <div class="quiz__tracker">
        <p class="quiz__counter">Q: ${currentQuestion}/5</p>
        <p class="quiz__score">Score ${currentScore}</p> 
    </div>

    <div class="quiz__text">
        <h1 class="quiz__heading"> Which one is correct?</h1>
        <div class="quiz__question">
        ${questions[3].question} 
        </div>
    </div>
    

    <ul class="quiz__options">
        <li>
            <button class="quiz__options-list">
                <span class="options__color"></span> ${questions[4].A}
            </button>
        </li>
        <li>
            <button class="quiz__options-list">
                <span class="options__color"></span> ${questions[4].B}
            </button>
        </li>
        <li>
            <button class="quiz__options-list">
                <span class="options__color"></span> ${questions[4].C}
            </button>
        </li>
        <li>
            <button class="quiz__options-list">
                <span class="options__color"></span> ${questions[4].D}
           </button>
        </li>
    </ul>
    <button id="submit" class="submit">Next question</button>
    
    `;

    setTimeout(() => {
        footer.classList.remove('footer-fix'); 
        quiz.innerHTML = markup; 


    }, 500); 

      


    

    e.preventDefault();   
});  

// const getQuestions = questions => {
//     questions.forEach(question {
        
//     }); 
// }


















const date = new Date().getFullYear();
document.querySelector('#year').innerHTML = date; 