$(document).ready(function () {

    var timer = 15;
    var startTimer;
    var correct = 0;
    var incorrect = 0;
    var timedOut = 0;
    var gifCounter = 0;
    var questionCounter = 0;
    var delay;

    var gifArrCorrect = ["assets/images/happy-snape.gif", "assets/images/dumbledore.gif", "assets/images/rawr.gif", "assets/images/invisible.gif", "assets/images/boom.gif", "assets/images/flying.gif"];
    var gifArrWrong = ["assets/images/voldemort.gif", "assets/images/explosion-hermione.gif", "assets/images/umbridge.gif", "assets/images/slappy-snape.gif", "assets/images/obviously.gif", "assets/images/werewolf.gif"];

    function Card(question, answer, choices) {
        this.question = question;
        this.answer = answer;
        this.choices = choices;
    }

    var questionOne = new Card("Who was Ginny Weasley's first boyfriend?", 'Michael Corner', ['Harry Potter', 'Dean Thomas', "Neville Longbottom", 'Michael Corner']);

    var questionTwo = new Card("What is the name of Voldemort's snake?", "Nagini", ['Nagini', 'Bellatrix', 'Goyle', 'Colin']);

    var questionThree = new Card("Who replaces Cornelius Fudge as minister of magic?", "Rufus Scrimgeour", ['Kingsley Shacklebolt', 'Rufus Scrimgeour', 'Arthur Weasley', 'Remus Lupin']);

    var questionFour = new Card("What does Ron and Hermione use to destroy Helga Hufflepuff's cup?", 'basilisk fang', ['Sword of Gryfindor', 'fiendfyre', 'killing curse', 'basilisk fang']);

    var questionFive = new Card("What creatures feed on positive human emotions?", 'dementors', ['boggarts', 'dementors', 'mermaids', 'grindylows']);

    var questionSix = new Card("What type of car is Mr Weasley's flying car?", 'Ford Anglia', ['Rolls Royce', 'Mini Cooper', 'Ford Anglia', 'Volkswagen Beetle']);

    var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];

    function setQA() {
        $('.answer-button').css("display", "inline-block");
        $('.question-text').html(questions[questionCounter].question);
        $('.answer-text1').html(questions[questionCounter].choices[0]);
        $('.answer-text2').html(questions[questionCounter].choices[1]);
        $('.answer-text3').html(questions[questionCounter].choices[2]);
        $('.answer-text4').html(questions[questionCounter].choices[3]);
        $('.main-content').css("background-color", "rgb(26, 32, 40)");
        $('.start-button').css("display", "none");
        $('.game-section').css("display", "block");
        $('.gif-area').css("display", "none");
        $('.right-or-wrong').html("");
        startTimer = setInterval(function () {
            if (timer === 0) {
                gifCounter++;
                questionCounter++;
                timedOut++;
                stopTimer();
                $('.gif-area').css("display", "inline-block");
                $('.answer-button').css("display", "none");
                $('.gif-area').attr("src", gifArrWrong[gifCounter]);
                restartQA();
                console.log('break');
            }
            timer--; $('#time-counter').html(timer);
        }, 1000);
    }
    function restartQA() {
        $('.right-or-wrong').html("Sorry. You're out of time. The answer was " + questions[questionCounter - 1].answer + ".");
        setTimeout(function () { setQA(); }, 5000);
    }
    // stops timer, sets time back to 30, and updates html
    function stopTimer() {
        timer = 15;
        clearInterval(startTimer);
        $('#time-counter').html(timer);
    }
    $('.start-button').on('click', function () {
        setQA();
        // remove first index of array after each question
    }) // end of start button being clicked

    $('.answer-button').on('click', function () {
        var buttonClicked = event.target.innerHTML;
        stopTimer();
        $('.answer-button').css("display", "none");
        if (buttonClicked == questions[questionCounter].answer) {
            correct++;
            console.log("correct = " + correct);
            $('.right-or-wrong').html("Correct!");
            $('.gif-area').attr("src", gifArrCorrect[gifCounter]);
            $('.gif-area').css("display", "inline-block");
        } else {
            incorrect++;
            console.log("incorrect = " + incorrect);
            $('.right-or-wrong').html("Sorry. The answer was " + questions[questionCounter].answer + ".");
            $('.gif-area').attr("src", gifArrWrong[gifCounter]);
            $('.gif-area').css("display", "inline-block");
        }
        // moved from 105
        delay = setTimeout(function () { setQA(); }, 5000);
        checkScore(); 
        gifCounter++;
        questionCounter++;
    }); // end of answer button being clicked

    function checkScore() {
        if ((correct + incorrect + timedOut) === questions.length) {
            clearTimeout(delay);
            $('.question-text').css("display", "none");
            //$('#time-counter').css("display", "none");
            $('.answer-button').css("display", "none");
            $('.reset-button').css("display", "inline-block");
            $('.correct').html("Correct: " + correct);
            $('.incorrect').html("Incorrect: " + correct);
            $('.timedout').html("Timed Out: " + correct);
            $('.correct').css("display", "inline-block");
            $('.incorrect').css("display", "inline-block");
            $('.timedout').css("display", "inline-block");
            $('.answer-button').css("display", "none");
            //return;
        }
    }
}); // end of document ready function

// display h1 and button
// click start and button disappears
// question 1 shows up with 4 answers and timer starts counting down
// user clicks answer and they get a message if they got it right or wrong - right will display a gif of a happy harry potter moment,
// - wrong will display a bad moment
// wait 5 seconds and show a new question with new answers
// go through all 6 questions and get a total score screen