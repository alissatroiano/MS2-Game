/* 
GAME STRUCTURE:
===============
01. The game starts when the player hits the START button.
02. Once the game starts the is a clock countdown.
03. The time given is the total time to finish the whole game.
04. The game ends if the time runs out, Game Over.
05. The player can only guess one answer per question.
06. Include the timer so the player can see it.
07. All the questions are displayed at once.
08. There is a DONE button at the end, if the user is finished before the timer stops.
*/

//IMPORTANT!
$(document).ready(function () {

    //Define all global letiables and objects
    let currentQuestion;
    let correctAnswer;
    let incorrectAnswer;
    let unanswered;
    let seconds;
    let time;
    let answered;
    let userSelect;
    let messages = {
        correct: "'That's what I do. I drink and I know things'",
        incorrect: "'You know nothing, Jon Snow.'",
        endTime: "'Nothing f*** s you harder than time'",
        finished: "When you play the game of thrones, you win or you die. You survived"
    };

    const submitButton = document.getElementById('submit');

    //All questions inside an array of objects
    let triviaQuestions = [
        {
            question: "Who was the, 'Mad King' (Aerys Targaryen) inspired by?",
            answerList: [
                "Henry VI of England",
                "Charles VI of France",
                "Ivan the Terrible"],
            answer: 1,
            answerText: "Much like the Mad King, Aerys Targaryen, King Charles VI of France was popular, charming, and successful before he went mad. In his last days, The Mad King wanted to, 'burn them all'. Charles VI became convinced he was made of glass and insisted on wearing iron rods in his clothes to prevent anyone from, 'breaking' him."
        },

        {
            question: "Where were the Winterfell castle scenes in Game Of Thrones' first/pilot episode filmed?",
            answerList: [
                "Windsor Castle, Windsor",
                "Kilkenny Castle, Ireland",
                "Doune Castle, Scotland"],
            answer: 2,
            image: "assets/images/dounecastle.jpg",
            answerText: "Doune Castle is one of several sites in the UK being transformed into the world of Westeros to celebrate the legacy of the hit HBO series. The medieval stronghold, north of Stirling, was used as a filming location for the pilot episode, doubling as the Stark family home."
        },

        {
            question: "Which of these events inspired George R.R Martin's Red Wedding?",
            answerList: [
                "The Black Dinner of 1440",
                "The Red Banquet of 1610",
                "The Black Massacre of 1430"],
            answer: 0,
            answerText: "Author George R.R. Martin has said that the inspiration for the famously horrific, Red Wedding, came from Scotland's Black Dinner of 1440, where the teenage Earl, William Douglas, was invited to a dinner with King James. Similar to the demise of Robb Stark, young William his brother were seized, taken from the hall and murdered."
        },

        {
            question: "Which real family in history were the cannibal wildlings inspired by?",
            answerList: [
                "The Bloodthirsty Thenns",
                "The Sawney Bean Family",
                "The Hungry Hungarians"],
            answer: 1,
            image: "",
            answerText: "Much like the cannibal wildlings, The Sawney Bean family were a cave-dwelling, cannibalistic Scottish clan that made a living by hiding in bushes and jumping out on passers-by, hacking them to death, feasting on their flesh, and stealing their possessions.",
        },

        {
            question: "Which historical landmark inspired George R.R Martin to create 'The Wall'?",
            answerList: [
                "The Great Wall Of China, China",
                "Hadrian’s Wall, England",
                "Wall of Babylon, Iraq"],
            answer: 1,
            img: "",
            answerText: "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
        },

        {
            question: "Which war from history inspired Game Of Thrones', 'The War of Five Kings?",
            answerList: [
                "The War of Roses",
                "The War of Four Kings",
                "World War I"],
            answer: 0,
            answerText: "The War of Roses was a series of civil wars fought between two prominent families, the House of Lancaster (red rose) and House of York (white rose) for the throne of England."
        },

        {
            question: "Which historical landmark inspired George R.R Martin to create 'The Wall'?",
            answerList: [
                "The Great Wall Of China, China",
                "Hadrian’s Wall, England",
                "Wall of Babylon, Iraq"],
            answer: 1,
            img: "",
            answerText: "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
        },

        {
            question: "King's Landing' was filmed in which of these locations?",
            answerList: [
                "Crete, Greece",
                "Vis, Croatia",
                "Dubrovnik, Croatia"],
            answer: 2,
            answerText: "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
        },

        {
            question: "Which real historical event inspired King Jeoffrey Baratheon's deadly, 'Purple Wedding'?",
            answerList: [
                "The death of Eustace IV, Count of Boulogne - 1153",
                "The death of Charles II - 1685",
                "The death of Alexander the Great - 323 BC"],
            answer: 0,
            answerText: "Author, George R.R. Martin, has revealed that the inspiration for the Purple Wedding came from the death of Eustace IV, Count of Boulogne. King Stephen of England, Eustace's father, had usurped the crown from his cousin, Empress Matilda, leading to the Anarchy."
        },


        {
            question: "Where did Game Of Thrones film the, 'Water Gardens of Dorne?",
            answerList: [
                "Gardens of Versailles - Versailles, France",
                "Alcázar of Seville - Seville, Spain",
                "Powerscourt Gardens - Enniskerry, County Wicklow, Ireland"],
            answer: 1,
            answerText: "In Game of Thrones, "
        },

        {
            question: "Who was Tywin Lannister's character based on?",
            answerList: [
                "Henry VI of England",
                "Edward I of England",
                "Peter the Great"],
            answer: 1,
            answerText: ".......explanation goes here"
        },
    ];

    // Functions start here
    $("#gameCol").hide();

    //This captures user click on start button to create a new game
    $("#startBtn").on("click", function () {
        $(this).hide();
        newGame();
    });

    //This captures the user's click on the reset button to create a new game
    $("#startOverBtn").on("click", function () {
        $(this).hide();
        newGame();
    });

    //This function sets up the page for a new game emptying all areas and showing game area
    function newGame() {
        $("#gameCol").show();
        $("#finalMessage").empty();
        $("#correctAnswers").empty();
        $("#incorrectAnswers").empty();
        $("#unanswered").empty();
        $("#img").hide();
        $("#imgCaption").hide();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        newQuestion();
    }

    //This function displays the next question
    function newQuestion() {
        $("#message").empty();
        $("#correctedAnswer").empty();
        $("#map").hide();
        $("#mapCaption").hide();
        answered = true;

        //This function displays the new question
        $("#currentQuestion").html("Question " + (currentQuestion + 1) + " of " + triviaQuestions.length);
        $(".question").html(triviaQuestions[currentQuestion].question);

        //This function displays the new questions's answer options in multiple choice type
        for (let i = 0; i <= 5; i++) {

            let choices = $("<div>");
            choices.text(triviaQuestions[currentQuestion].answerList[i]);
            choices.attr({ "data-index": i });
            choices.addClass("thisChoice");
            $(".answerList").append(choices);
        }

        //This sets the timer
        countdown();

        //When user clicks on n answer this will pause the time and display the correct answer to the question 
        $(".thisChoice").on("click", function () {
            userSelect = $(this).data("index");
            clearInterval(time);
            answerPage();
        });
    }

    //This function is for the timer countdown
    function countdown() {
        seconds = 30;
        $("#timeLeft").html("00:" + seconds);
        answered = true;
        //Sets a delay of one second before the timer starts
        time = setInterval(showCountdown, 1000);
    }

    //This function displays the countdown
    function showCountdown() {
        seconds--;

        if (seconds < 10) {
            $("#timeLeft").html("00:0" + seconds);
        } else {
            $("#timeLeft").html("00:" + seconds);
        }

        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }

    //This function takes the user to the answer page after the user selects an answer or timer runs out
    function answerPage() {
        $("#currentQuestion").empty();
        $(".thisChoice").empty(); //Clears question page
        $(".question").empty();
        $("#map").show();
        $("#mapCaption").show();

        let rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
        let rightAnswerIndex = triviaQuestions[currentQuestion].answer;

        //This adds the map that corresponds to this quesiton
        let mapImageLink = triviaQuestions[currentQuestion].image;
        let newMap = $("<img>");
        newMap.attr("src", mapImageLink);
        newMap.addClass("mapImg");
        $("#map").html(newMap);

        //STILL TO DO
        //This adds a line of text below the map that talks about why the answer is correct.
        let mapCaption = triviaQuestions[currentQuestion].answerText;
        newCaption = $("<div>");
        newCaption.html(mapCaption);
        newCaption.addClass("mapCaption");
        $("#mapCaption").html(newCaption);

        //This checks to see if user choice is correct, incorrect, or unanswered
        if ((userSelect == rightAnswerIndex) && (answered === true)) {
            correctAnswer++;
            $('#message').html(messages.correct);
        } else if ((userSelect != rightAnswerIndex) && (answered === true)) {
            incorrectAnswer++;
            $('#message').html(messages.incorrect);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        } else {
            unanswered++;
            $('#message').html(messages.endTime);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
            answered = true;
        }

        if (currentQuestion == (triviaQuestions.length - 1)) {
            setTimeout(scoreboard, 30000);
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 30000);
        }
    }

    //This function displays all the game stats
    function scoreboard() {
        $('#timeLeft').empty();
        $('#message').empty();
        $('#correctedAnswer').empty();
        $('#map').hide();
        $("#mapCaption").hide();

        $('#finalMessage').html(messages.finished);
        $('#correctAnswers').html("Correct Answers: " + correctAnswer);
        $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
        $('#unanswered').html("Unanswered: " + unanswered);
        $('#startOverBtn').addClass('reset');
        $('#startOverBtn').show();
        $('#startOverBtn').html("PLAY AGAIN");
    }
});