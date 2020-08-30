$(document).ready(function() {
    // Define variables here
    let currenQuestion;
    let correctAnswer;
    let incorrectAnswer;
    let incomplete;
    let seconds;
    let time;
    let answered;
    let userSelect;
    let messages = {
        correct: alert("Excellent choice, Your Grace! That is correct"),
        incorrect: alert("I'm sorry, My Lord. That is not the right choice"),
        endTime: "Looks like you ran out of time!" + "<br>" + "But... It's never too late, it's never too late for now!",
        finished: "So, how'd you do?"
    };

    // Create an array of objects for multiple choice questions here
    let triviaQuestions = [
        {
            question: "Who was the, 'Mad King' (Aerys Targaryen) inspired by?",
            answerList: [ 
                    "Henry VI of England",
                    "Charles VI of France",
                    "Ivan the Terrible"],
            answer: 1,
            image: "assets/images/zones.png",
            answerMessage: "Much like the Mad King, Aerys Targaryen, King Charles VI of France was popular, charming, and successful before he went mad. In his last days, The Mad King wanted to, 'burn them all'. Charles VI became convinced he was made of glass and insisted on wearing iron rods in his clothes to prevent anyone 'breaking' him."
        },

        {
            question: "Where were the Winterfell castle scenes in Game Of Thrones' first/pilot episode filmed?",
            answerList: [
                "Windsor Castle, Windsor",
                "Kilkenny Castle, Ireland",
                "Doune Castle, Scotland"],
            answer: 2,
            image: "assets/images/throne.jpg",
            answerMessage: "Doune Castle is one of several sites in the UK being transformed into the world of Westeros to celebrate the legacy of the hit HBO series. The medieval stronghold, north of Stirling, was used as a filming location for the pilot episode, doubling as the Stark family home."
        },

        {
            question: "Which of these events inspired George R.R Martin's Red Wedding?",
            answerList: [
                "The Black Dinner of 1440",
                "The Red Banquet of 1610",
                "The Black Massacre of 1430"],
            answer: 0,
            image: "",
            answerMessage: "Author George R.R. Martin has said that the inspiration for the famously horrific, Red Wedding, came from Scotland's Black Dinner of 1440, where the teenage Earl, William Douglas, was invited to a dinner with King James. Similar to the demise of Robb Stark, young William his brother were seized, taken from the hall and murdered."
        },

        {
            question: "Which real family in history were the cannibal wildlings inspired by?",
            answerList: [
                "The Bloodthirsty Thenns",
                "The Sawney Bean Family",
                "The Hungry Hungarians"],
            answer: 1,
            images: "",
            answerMessage: "Much like the cannibal wildlings, The Sawney Bean family were a cave-dwelling, cannibalistic Scottish clan that made a living by hiding in bushes and jumping out on passers-by, hacking them to death, feasting on their flesh, and stealing their possessions.",
        },

        {
            question: "Which historical landmark inspired George R.R Martin to create 'The Wall'?",
            answerList: [
                "The Great Wall Of China, China",
                "Hadrian’s Wall, England",
                "Wall of Babylon, Iraq"],
            answer: 1,
            img: "",
            answerMessage: "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
        },

        {
            question: "Which war from history inspired Game Of Thrones', 'The War of Five Kings?",
            answerList: [
                "The War of Roses",
                "The War of Four Kings",
                "World War I"],
            answer: 0,
            answerMessage: "The War of Roses was a series of civil wars fought between two prominent families, the House of Lancaster (red rose) and House of York (white rose) for the throne of England."
        },

        {
            question: "Which historical landmark inspired George R.R Martin to create 'The Wall'?",
            answerList: [
                "The Great Wall Of China, China",
                "Hadrian’s Wall, England",
                "Wall of Babylon, Iraq"],
            answer: 1,
            img: "",
            answerMessage: "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
        },

        {
            question: "King's Landing' was filmed in which of these locations?",
            answerList: [
                "Crete, Greece",
                "Vis, Croatia",
                "Dubrovnik, Croatia"],
            answer: 2,
            answerMessage: "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
        },

        {
            question: "Which real historical event inspired King Jeoffrey Baratheon's deadly, 'Purple Wedding'?",
            answerList: [
                "The death of Eustace IV, Count of Boulogne - 1153",
                "The death of Charles II - 1685",
                "The death of Alexander the Great - 323 BC"],
            answer: 0,
            answerMessage: "Author, George R.R. Martin, has revealed that the inspiration for the Purple Wedding came from the death of Eustace IV, Count of Boulogne. King Stephen of England, Eustace's father, had usurped the crown from his cousin, Empress Matilda, leading to the Anarchy."
        },


        {
            question: "Where did Game Of Thrones film the, 'Water Gardens of Dorne?",
            answerList: [
                "Gardens of Versailles - Versailles, France",
                "Alcázar of Seville - Seville, Spain",
                "Powerscourt Gardens - Enniskerry, County Wicklow, Ireland"],
            answer: 1,
            answerMessage: "In Game of Thrones, "
        },

        {
            question: "Who was Tywin Lannister's character based on?",
            answerList: [
                "Henry VI of England",
                "Edward I of England",
                "Peter the Great"],
            answer: 1,
            answerMessage: ".......explanation goes here"
        },

    ];
    // end questions array

    // Create Functions here
    $("#quizCol").hide();

    // Trigger start on click functionality here
    $("#startBtn").on("click", function () {
        $(this).hide();
        newQuiz();
    });
    
    // Trigger reset button on click functionality here
    $("#tryAgainBtn").on("click", function () {
        $(this).hide();
        newQuiz();
    });

    // Trigger a new quiz
    function newQuiz() {
        $("#quizCol").show();
        $("#newMessage").empty();
        $("#correctAnswers").empty();
        $("#incorrectAnswers").empty();
        $("#incomplete").empty();
        $("#img").hide();
        $("#imgCaption").hide();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        incomplete = 0;
        newQuestion();
    }

    // Function to display next question
    function newQuestion() {
        $("#message").empty();
        $("#correctedAnswer").empty();
        $("#img").hide();
        $("#imgCaption").hide();
        answered = true;

        $("#currentQuestion").html("Question " + (currentQuestion + 1) + " of " + triviaQuestions.length);
        $(".question").html(triviaQuestions[currentQuestion].question);

        // Create a for loop to display a list of choices for user to select
        for (let i = 0; i <= 5; i++) {
            let choices = $("<div>");
            choices.text(triviaQuestions[currentQuestion].choiceList[i]);
            choices.attr({ "data-index": i });
            choices.addClass("thisChoice");
            $(".choiceList").append(choices);
        }

        countdown();

        //When user clicks on n answer this will pause the time and display the correct answer to the question 
        $(".thisChoice").on("click", function () {
            userSelect = $(this).data("index");
            clearInterval(time);
            answerPage();
        });
    }

    function countdown() {
        seconds = 15;
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

        // Set up the explanation to answers page
        function answerPage() {
            $("#currentQuestion").empty();
            $(".thisChoice").empty(); //Clears question page
            $(".question").empty();
            $("#img").show();
            $("#imgCaption").show();

            let rightAnswerMessage = triviaQuestions[currentQuestion].choiceList[triviaQuestions[currentQuestion].answer];
            let rightAnswerIndex = triviaQuestions[currentQuestion].answer;

        // Add the img/image that corresponds to eachh question
            let newImageLink = triviaQuestions[currentQuestion].image;
            var newImg = $("<img>");
            newImg.attr("src", newImageLink);
            newImg.addClass("newImage");
            $("#img").html(newImg);
            
            // Add captions below each img/image to explain correct answer
            let imgCaption = triviaQuestions[currenQuestion].answerMessage;
            newCaption = $("<div>");
            newCaption.html(imgCaption);
            newCaption.addClass("imgCaption");
            $("#imgCaption").html(newCaption);

            if ((userSelect == rightAnswerIndex) && (answered === true)) {
                correctAnswer++;
                $('#message').html(messages.correct);
            } else if ((userSelect != rightAnswerIndex) && (answered === true)) {
                incorrectAnswer++;
                $('#message').html(messages.incorrect);
                $('#correctedAnswer').html('The correct answer was: ' + rightAnswerMessage);
            } else {
                unanswered++;
                $('#message').html(messages.endTime);
                $('#correctedAnswer').html('The correct answer was: ' + rightAnswerMessage);
                answered = true;
            }

            if (currentQuestion == (triviaQuestions.length - 1)) {
                setTimeout(scoreboard, 6000);
            } else {
                currentQuestion++;
                setTimeout(newQuestion, 6000);
            }
        }

        //This fucntion displays all the game stats
        function scoreboard() {
            $('#timeLeft').empty();
            $('#message').empty();
            $('#correctedAnswer').empty();
            $('#img').hide();
            $("#imgCaption").hide();

            $('#newMessage').html(messages.finished);
            $('#correctAnswers').html("Correct Answers: " + correctAnswer);
            $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
            $('#incomplete').html("Unanswered: " + incomplete);
            $('#tryAgainBtn').addClass('reset');
            $('#tryAgainBtn').show();
            $('#tryAgainBtn').html("TRY AGAIN!");
        }
});