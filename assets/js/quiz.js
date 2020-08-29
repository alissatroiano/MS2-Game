!(document).readyState(function() {
    // Define variables here
    let newQuestion;
    let correctAnswer;
    let incorrectAnswer;
    let incompleteQuestions;
    let answered;
    let userSelect;
    let messages = {
        correct: "Excellent choice, Your Grace! That is correct",
        incorrect: "I'm sorry, My Lord. That is not the right choice"
    };

    // Create an array of objects for multiple choice questions here
    let quizQuestions = [
        {
            question: "Who was the, 'Mad King' (Aerys Targaryen) inspired by?",
            choiceList: [ 
                    "Henry VI of England",
                    "Charles VI of France",
                    "Ivan the Terrible"  
            ],
            answer: 1,
    
            answerMessage: "Much like the Mad King, Aerys Targaryen, King Charles VI of France was popular, charming, and successful before he went mad. In his last days, The Mad King wanted to, 'burn them all'. Charles VI became convinced he was made of glass and insisted on wearing iron rods in his clothes to prevent anyone 'breaking' him."
        },

        {
            question: "Where were the Winterfell castle scenes in Game Of Thrones' first/pilot episode filmed?",
            choiceList: [
                "Windsor Castle, Windsor",
                "Kilkenny Castle, Ireland",
                "Doune Castle, Scotland"
            ],
            answer: 2,
            map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2220.3748349009043!2d-4.052140248346791!3d56.185199065932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48888bd24de4fcbf%3A0x5599d30a61b7fb39!2sDoune%20Castle!5e0!3m2!1sen!2sus!4v1598723412732!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
            answerMessage: "Doune Castle is one of several sites in the UK being transformed into the world of Westeros to celebrate the legacy of the hit HBO series. The medieval stronghold, north of Stirling, was used as a filming location for the pilot episode, doubling as the Stark family home."
        },

        {
            question: "Which of these events inspired George R.R Martin's Red Wedding?",
            choiceList: [
                "The Black Dinner of 1440",
                "The Red Banquet of 1610",
                "The Black Massacre of 1430"
            ],
            answer: 0,
            map: "",
            answerMessage: "Author George R.R. Martin has said that the inspiration for the famously horrific, Red Wedding, came from Scotland's Black Dinner of 1440, where the teenage Earl, William Douglas, was invited to a dinner with King James. Similar to the demise of Robb Stark, young William his brother were seized, taken from the hall and murdered."
        },

        {
            question: "Which real family in history were the cannibal wildlings inspired by?",
            choiceList: [
                "The Bloodthirsty Thenns",
                "The Sawney Bean Family",
                "The Hungry Hungarians"
            ],
            answer: 1,
            map: "",
            answerMessage: "Much like the cannibal wildlings, The Sawney Bean family were a cave-dwelling, cannibalistic Scottish clan that made a living by hiding in bushes and jumping out on passers-by, hacking them to death, feasting on their flesh, and stealing their possessions.",
        },

        {
            question: "Which historical landmark inspired George R.R Martin to create 'The Wall'?",
            choiceList: [
                "The Great Wall Of China, China",
                "Hadrian’s Wall, England",
                "Wall of Babylon, Iraq"
            ],
            answer: 1,
            map: "",
            answerMessage: "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
        },

        {
            question: "Which war from history inspired Game Of Thrones', 'The War of Five Kings?",
            choiceList: [
                "The War of Roses",
                "The War of Four Kings",
                "World War I",
            ],
            answer: 0,
            answerMessage: "The War of Roses was a series of civil wars fought between two prominent families, the House of Lancaster (red rose) and House of York (white rose) for the throne of England."
        },

        {
            question: "Which historical landmark inspired George R.R Martin to create 'The Wall'?",
            choiceList: [
                "The Great Wall Of China, China",
                "Hadrian’s Wall, England",
                "Wall of Babylon, Iraq"
            ],
            answer: 1,
            map: "",
            answerMessage: "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
        },

        {
            question: "King's Landing' was filmed in which of these locations?",
            choiceList: [
                "Crete, Greece",
                "Vis, Croatia",
                "Dubrovnik, Croatia"
            ],
            answer: 2,
            answerMessage: "In Game of Thrones, the Night's Watch has been guarding, 'The Wall' for centuries. The inspiration for this came from Hadrian's Wall, a historic landmark located between England and Scotland. Built by the invading Roman army 122 AD, Hadrian's wall was meant to be the northern border of the Roman Empire and to keep the ‘barbarians’ out of reach."
        },

        {
            question: "Which real historical event inspired King Jeoffrey Baratheon's deadly, 'Purple Wedding'?",
            choiceList: [
                "The death of Eustace IV, Count of Boulogne - 1153",
                "The death of Charles II - 1685",
                "The death of Alexander the Great - 323 BC"
            ],
            answer: 0,
            answerMessage: "Author, George R.R. Martin, has revealed that the inspiration for the Purple Wedding came from the death of Eustace IV, Count of Boulogne. King Stephen of England, Eustace's father, had usurped the crown from his cousin, Empress Matilda, leading to the Anarchy."
        },


        {
            question: "Where did Game Of Thrones film the, 'Water Gardens of Dorne?",
            choiceList: [
                "Gardens of Versailles - Versailles, France",
                "Alcázar of Seville - Seville, Spain",
                "Powerscourt Gardens - Enniskerry, County Wicklow, Ireland"
            ],
            answer: 1,
            answerMessage: "In Game of Thrones, "
        },

        {
            question: "Who was Tywin Lannister's character based on?",
            choiceList: [
                "Henry VI of England",
                "Edward I of England",
                "Peter the Great"
            ],
            answer: 1,
            answerMessage: ".......explanation goes here"
        },


    ];

});