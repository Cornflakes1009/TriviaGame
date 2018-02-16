$(document).ready(function () {
    
    var timer = 30;

    function Card(question, answer, choices) {
        this.question = question;
        this.answer = answer;
        this.choices = choices;
      }
      
      var questionOne = new Card("Who was Ginny Weasley's first boyfriend?",'Michael Corner', ['Harry Potter', 'Dean Thomas', "Neville Longbottom", 'Michael Corner']);
      console.log(questionOne);
      var questionTwo = new Card("What is the name of Voldemort's snake?", "Nagini", ['Nagini', 'Bellatrix', 'Goyle', 'Colin']);
      
      var questionThree = new Card("Who replaces Cornelius Fudge as minister of magic?", "Rufus Scrimgeour", ['Kingsley Shacklebolt', 'Rufus Scrimgeour', 'Arthur Weasley', 'Remus Lupin']);
      
      var questionFour = new Card("What does Ron and Hermione use to destroy Helga Hufflepuff's cup?", 'basilisk fang', ['Sword of Gryfindor', 'fiendfyre', 'killing curse', 'basilisk fang']);
      
      var questionFive = new Card("What creatures feed on positive human emotions?", 'dementors', ['boggarts', 'dementors', 'mermaids', 'grindylows']);
      
      var questionSix = new Card("What type of car is Mr Weasley's flying car?", 'Ford Anglia', ['Rolls Royce', 'Mini Cooper', 'Ford Anglia', 'Volkswagen Beetle']);
      
      var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
      function setQA() {
        $('.question-text').html(questions[0].question);
        $('.answer-text1').html(questions[0].choices[0]);
        $('.answer-text2').html(questions[0].choices[1]);
        $('.answer-text3').html(questions[0].choices[2]);
        $('.answer-text4').html(questions[0].choices[3]);
      }
      

    $('.start-button').on('click', function () {
        $('.main-content').css("background-color", "rgb(26, 32, 40)");
        $('.start-button').css("display", "none");
        $('.game-section').css("display", "block");
        
        setInterval(function () {
            timer--;
            $('#time-counter').html(timer);
        }, 1000);
        setQA();
// remove first index of array after each question
    })

    




});

// display h1 and button
// click start and button disappears
// question 1 shows up with 4 answers and timer starts counting down
// user clicks answer and they get a message if they got it right or wrong - right will display a gif of a happy harry potter moment,
// - wrong will display a bad moment
// wait 5 seconds and show a new question with new answers
// go through all 6 questions and get a total score screen