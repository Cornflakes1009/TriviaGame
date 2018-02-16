$(document).ready(function(){
    var timer = 30;

    var questAnsObj = {
        
    }
    $('.start-button').on('click', function() {
        $('.main-content').css("background-color", "rgb(26, 32, 40)");
        $('.start-button').css("display", "none");
        $('.game-section').css("display", "block");
    })
    




});

// display h1 and button
// click start and button disappears
// question 1 shows up with 4 answers and timer starts counting down
// user clicks answer and they get a message if they got it right or wrong - right will display a gif of a happy harry potter moment,
// - wrong will display a bad moment
// wait 5 seconds and show a new question with new answers
// go through all 6 questions and get a total score screen