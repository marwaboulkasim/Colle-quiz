/* $(document).ready(function() {
    "use strict"; */
   /*  $('a').on('click', function(){
        console.log($(this).attr('class'))
    })   */ 

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}
let questions = [
  
  new Question("Who is the creator of PHP?", ["Jack Sparrow()","Rasmus Lerdorf()", "Tim Berners-Leed()", "Dennis Ritchie()"], "Rasmus Lerdorf()"),
  new Question("When was the first implementation of Blockchain Technology", ["2009()","2008()", "2000()", "1991()"], "2009()"),
  new Question("In which year was the first Playstation made", ["1994()","1992()", "1990()", "1995)"], "1994()"),
  new Question("What does PHP mean today?",["HP: Personal Home Page()","PHP: Program High Performace()","PHP: Hypertext Preprocessor()","PHP: Hypertext Page()"], "HP: Personal Home Page()"),
  new Question("Who is the creator of PHP?", ["Jack Sparrow()","Rasmus Lerdorf()", "Tim Berners-Leed()", "Dennis Ritchie()"], "Rasmus Lerdorf()"),
  new Question("What is the last Sega console?", ["Dreamcast()","Saturn()", "S-Gage()", "Lindbergh()"], "Dreamcast()"),
  new Question("What does www stands for?", ["Web wasabi world()","World wide web()", "Wide web world()", "Web war song()"], "World wide web()"),
  new Question("What's the name of the UNIX creator?", ["Mark Shuttleworth()","Kenneth Thompson()", "Linus Torvalds()", "Bill Gates()"], "Kenneth Thompson()"),
  new Question("When was born Alan Turing?", ["1981()","1891()", "1934()", "1912()"], "1912()"),
  new Question("What is the port for the http", ["70()","90()", "82()", "80()"], "80()"), ];
console.log(questions);

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

// Regroup all  functions relative to the App Display
const display = {
  elementShown: function(id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function() {
    endQuizHTML = `
      <h1>Quiz terminé !</h1>
      <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown("quiz", endQuizHTML);
  },
  question: function() {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function() {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function() {
        quiz.guess(guess);
        quizApp();
      }
    }
    // display choices and handle guess
    for(let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },
  progress: function() {
    let currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
  },
};

// Game logic
quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
  } 
}
// Create Quiz
let quiz = new Quiz(questions);
quizApp();

console.log(quiz);

