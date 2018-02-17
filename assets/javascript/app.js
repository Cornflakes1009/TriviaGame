$(document).ready(function () {

    var timer = 15;
    var correct = 0;
    var incorrect = 0;

    function Card(question, answer, choices) {
        this.question = question;
        this.answer = answer;
        this.choices = choices;
    }
    var gifArrCorrect = ["assets/images/happy-snape.gif"];
    var gifArrWrong = ["assets/images/voldemort.gif"];

    var questionOne = new Card("Who was Ginny Weasley's first boyfriend?", 'Michael Corner', ['Harry Potter', 'Dean Thomas', "Neville Longbottom", 'Michael Corner']);

    var questionTwo = new Card("What is the name of Voldemort's snake?", "Nagini", ['Nagini', 'Bellatrix', 'Goyle', 'Colin']);

    var questionThree = new Card("Who replaces Cornelius Fudge as minister of magic?", "Rufus Scrimgeour", ['Kingsley Shacklebolt', 'Rufus Scrimgeour', 'Arthur Weasley', 'Remus Lupin']);

    var questionFour = new Card("What does Ron and Hermione use to destroy Helga Hufflepuff's cup?", 'basilisk fang', ['Sword of Gryfindor', 'fiendfyre', 'killing curse', 'basilisk fang']);

    var questionFive = new Card("What creatures feed on positive human emotions?", 'dementors', ['boggarts', 'dementors', 'mermaids', 'grindylows']);

    var questionSix = new Card("What type of car is Mr Weasley's flying car?", 'Ford Anglia', ['Rolls Royce', 'Mini Cooper', 'Ford Anglia', 'Volkswagen Beetle']);

    var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
    var questionCounter = 0;

    function setQA() {
        $('.question-text').html(questions[questionCounter].question);
        $('.answer-text1').html(questions[questionCounter].choices[0]);
        $('.answer-text2').html(questions[questionCounter].choices[1]);
        $('.answer-text3').html(questions[questionCounter].choices[2]);
        $('.answer-text4').html(questions[questionCounter].choices[3]);
        ///// - content below from start button clicked
        $('.main-content').css("background-color", "rgb(26, 32, 40)");
        $('.start-button').css("display", "none");
        $('.game-section').css("display", "block");
        $('.gif-area').css("display", "none");
        $('.right-or-wrong').html("");
        startTimer = setInterval(function () {
            if (timer === 0) {

                stopTimer();
                $('.gif-area').css("display", "inline-block");
                $('.gif-area').attr("src", gifArrWrong[0]);
                //timer++; // added extra 1 because timer was going down to 14 seconds
                restartQA();
                console.log('break');


            }
            timer--; $('#time-counter').html(timer);
        }, 1000);
    }
    function restartQA() {
        $('.right-or-wrong').html("Sorry. You're out of time. The answer was " + questions[0].answer);
        setTimeout(function () { setQA(); }, 5000);
    }
    var startTimer;
    // stops timer, sets time back to 30, and updates html
    function stopTimer() {
        clearInterval(startTimer);
        timer = 16;
        $('#time-counter').html(timer);
    }

    $('.start-button').on('click', function () {
        setQA();
        // remove first index of array after each question
    }) // end of start button being clicked


    $('.answer-button').on('click', function () {
        var buttonClicked = event.target.innerHTML;
        console.log(buttonClicked);
        stopTimer();
        if (buttonClicked == questions[0].answer) {
            correct++;
            $('.right-or-wrong').html("Correct!");
            $('.gif-area').attr("src", gifArrCorrect[0]);
            $('.gif-area').css("display", "inline-block");
        } else {
            $('.right-or-wrong').html("Sorry. The answer was " + questions[0].answer);
            $('.gif-area').attr("src", gifArrWrong[0]);
            $('.gif-area').css("display", "inline-block");
        }
        setTimeout(function () { setQA(); }, 5000);
    }); // end of answer button being clicked





}); // end of document ready function

// display h1 and button
// click start and button disappears
// question 1 shows up with 4 answers and timer starts counting down
// user clicks answer and they get a message if they got it right or wrong - right will display a gif of a happy harry potter moment,
// - wrong will display a bad moment
// wait 5 seconds and show a new question with new answers
// go through all 6 questions and get a total score screen