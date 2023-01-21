
/*
1. Start Button
2. Timer 
3. Questions (choose between A-D)
4. More Questions (choose between A-D)
5. More Questions (choose between A-D)
6. Bonus (Add like 6 sets of questions and make it add a random 3).
7. Incorrect Questions subtracts time from the clock.
8. When All questions are answered game over
9. When timer reaches 0 game over
10. Save Initials and score
11. View HighScore button
*/

//calling the ids to be used in the program
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start-btn");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");

var time = 60;
var answerSet = [];
var correct = 0;
var incorrect = 0;
var questionNumber = 1;

//Placing answers in objects.
var answer1 = ["var variable_name = Hi;",
"var variable_name = 'Hi';", 
"var variable_name = ['Hi'];", 
"variable_name = 'Hi';"];
var answer2 = ["for(var i = 0; i < 30; i++) {}",
"for(var i = 0, i < 30, i++) {}",
"for(i = 0; i < 30; i++) {}",
"for(i =0, i <30, i++) {}"];
var answer3 = ["groceryProducts[index];",
"groceryProducts[i];",
"groceryProducts[3];",
"groceryProducts[2];"];

var answer4 = ["console.log(genre(music));",
"console.log(music.genre);",
"console.log(music(genre));",
"console.log(genre.music);"];

var answer5 = ["Document Object Model",
"Domain Object Methods",
"Domain Object Model",
"Document Object Methods"];

var answer6 = ["<button id= 'start-btn'></div>",
                    "<div class = 'start-btn'></div>",
                    "<button class= 'start-btn'></div>",
                    "<div id = 'btn'></div>"];

//Function to display the answers in an ordered list
function displayQuestion() {
li1.textContent = answerSet[0]; 
li2.textContent = answerSet[1];
li3.textContent = answerSet[2]; 
li4.textContent = answerSet[3];  

//appending ol to question div & appending li to ol
answerEl.appendChild(li1);
answerEl.appendChild(li2);
answerEl.appendChild(li3);
answerEl.appendChild(li4);



}
  //Creating a list <li> to append in the question div
  var li1 = document.createElement("button");
  var li2 = document.createElement("button");
  var li3 = document.createElement("button");
  var li4 = document.createElement("button");
  

  

//creating the timer function
function setTime() {
    var timerInterval = setInterval(function() {
        time --;
        timerEl.textContent = time + " :Seconds Remaining";
        if(time === 0) {
            clearInterval(timerInterval); //stops the execution of the code
            //end the game here
        }
    }, 1000);
}

//making the timer activate when clicking start button
startEl.addEventListener("click", function() {
    setTime();
    generateQuestion();
}, 1000);

//If the first button is clicked it will add 1 to correct score and go to the next question
li1.addEventListener("click", function(){
  correct += 1;
  questionNumber++;
  console.log("Question Number" + questionNumber);
  console.log("Correct" + correct);
  generateQuestion();
}, 1000);

//If any of these buttons are clicked it will add incorrect to the score and go to the next question
li2.addEventListener("click", function(){
  incorrect += 1;
  questionNumber++;
  console.log("Question Number" + questionNumber);
  console.log("Incorrect" + incorrect);
  generateQuestion();
}, 1000);

li3.addEventListener("click", function(){
  incorrect += 1;
  questionNumber++;
  console.log("Question Number" + questionNumber);
  console.log("Incorrect" + incorrect);
  generateQuestion();
}, 1000);

li4.addEventListener("click", function(){
  incorrect += 1;
  questionNumber++;
  console.log("Question Number" + questionNumber);
  console.log("Incorrect" + incorrect);
  generateQuestion();
}, 1000);

//Function to ask questions
function generateQuestion() {

if(questionNumber === 1) {
  //generating question
  questionEl.textContent = "What is the proper way to declare a string variable containing the message Hi? ________";
  answerSet = answer1;
  displayQuestion();

}

if(questionNumber === 2) {
  questionEl.textContent = "Which one of these statements is properly declared?";
  answerSet = answer2;
  displayQuestion();
}

if(questionNumber === 3) {
  
  questionEl.textContent = "A list of grocery products have been declared in an array -\n var groceryProducts = ['Eggs', 'Milk', 'Cheese', 'Bacon'];\n Select the statement that would get Cheese from the array. _______________";
  answerSet = answer3;
  displayQuestion();

    }
    
if(questionNumber === 4) {
    questionEl.textContent = "Console log the genre which belongs to the music object. _________";
    answerSet = answer4;
    displayQuestion();
    
  } 
  
if(questionNumber === 5) {
    questionEl.textContent = "What does DOM stand for? ________"
    answerSet = answer5; 
    displayQuestion();
    
    
  } 
  
if(questionNumber === 6) {
    questionEl.textContent = "What div is this statement accessing document.getElementByID('start-btn');? _______"
    answerSet = answer6; 
    displayQuestion();

  } else {
    //game over
    return ;
}

}












