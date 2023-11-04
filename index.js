function validateLogin() {
    var email = document.querySelector('.email').value;
    var password = document.querySelector('.password').value;

    // Check if the email ends with @vitstudent.ac.in
    if (email.endsWith('@vitstudent.ac.in') && password.length > 0) {
        // If validation is successful, redirect to start.html
        window.location.href = 'start.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Timer variables for each round
let round1Timer;
let round2Timer;
let round3Timer;

round1_questions = [
    {
        "question_number": 1,
        "question": "What is the chemical symbol for the element oxygen?",
        "options": ["A) O", "B) Ox", "C) Om", "D) Oz"],
        "correct_option": "A) O"
    },
    {
        "question_number": 2,
        "question": "Which planet is known as the 'Red Planet'?",
        "options": ["A) Venus", "B) Mars", "C) Jupiter", "D) Saturn"],
        "correct_option": "B) Mars"
    },
    {
        "question_number": 3,
        "question": "What is the process by which plants make their own food using sunlight?",
        "options": ["A) Respiration", "B) Photosynthesis", "C) Digestion", "D) Fermentation"],
        "correct_option": "B) Photosynthesis"
    },
    {
        "question_number": 4,
        "question": "Which gas is most abundant in Earth's atmosphere?",
        "options": ["A) Nitrogen", "B) Oxygen", "C) Carbon dioxide", "D) Hydrogen"],
        "correct_option": "A) Nitrogen"
    },
    {
        "question_number": 5,
        "question": "What is the SI unit of electric current?",
        "options": ["A) Volt", "B) Watt", "C) Ampere", "D) Ohm"],
        "correct_option": "C) Ampere"
    },
    {
        "question_number": 6,
        "question": "Which of the following is not a primary color in additive color mixing?",
        "options": ["A) Red", "B) Green", "C) Blue", "D) Yellow"],
        "correct_option": "D) Yellow"
    },
    {
        "question_number": 7,
        "question": "What is the largest organ in the human body?",
        "options": ["A) Heart", "B) Liver", "C) Skin", "D) Brain"],
        "correct_option": "C) Skin"
    },
    {
        "question_number": 8,
        "question": "What is the chemical symbol for gold?",
        "options": ["A) Au", "B) Ag", "C) Fe", "D) Cu"],
        "correct_option": "A) Au"
    },
    {
        "question_number": 9,
        "question": "Which force holds the nucleus of an atom together?",
        "options": ["A) Gravitational force", "B) Electromagnetic force", "C) Strong nuclear force", "D) Weak nuclear force"],
        "correct_option": "C) Strong nuclear force"
    },
    {
        "question_number": 10,
        "question": "What is the speed of light in a vacuum (approximately)?",
        "options": ["A) 299,792,458 meters per second", "B) 100,000 meters per second", "C) 1,000,000 meters per second", "D) 500,000 meters per second"],
        "correct_option": "A) 299,792,458 meters per second"
    }
]

// Variable to store user marks
var userMarksRound1 = 0;

// Function to start Round 1 and display questions
function openround1() {
    var questionContainer = document.querySelector(".round1-question");

    // Clear the existing content in the question container
    questionContainer.innerHTML = "";

    // Iterate through the questions and display them
    for (var i = 0; i < round1_questions.length; i++) {
        var question = round1_questions[i];

        var questionElement = document.createElement("div");
        questionElement.className = "question-container"; // Add a class for styling

        questionElement.innerHTML = `<p><strong>Question ${question.question_number}:</strong> ${question.question}</p>`;

        // Create radio buttons for each option
        for (var j = 0; j < question.options.length; j++) {
            var optionLabel = question.options[j];
            var optionId = `q${question.question_number}_option${j}`;

            questionElement.innerHTML += `
                <label for="${optionId}">
                    <input type="radio" name="question_${question.question_number}" id="${optionId}" value="${optionLabel}">
                    ${optionLabel}
                </label>
            `;
        }

        questionContainer.appendChild(questionElement);
    }

    // Add a submit button
    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit Round1 Answers";
    questionContainer.appendChild(submitButton);
    submitButton.addEventListener("click", checkAnswers1);
    questionContainer.appendChild(submitButton);
    // Start the 15-minute timer for Round 1
    startRound1Timer(15 * 60); // 15 minutes in seconds
}

// Function to check the selected answers and calculate marks
function checkAnswers1() {
    userMarksRound1 = 0;

    for (var i = 0; i < round1_questions.length; i++) {
        var question = round1_questions[i];
        var selectedOption = document.querySelector(`input[name="question_${question.question_number}"]:checked`);

        if (selectedOption && selectedOption.value === question.correct_option) {
            userMarksRound1++; // Increment the marks for correct answers
        }
    }

    // Disable the submit button after submission
    var submitButton = document.querySelector("button");
    submitButton.disabled = true;

    // Hide the round2-question div
    var round2QuestionDiv = document.querySelector(".round1-question");
    round2QuestionDiv.style.display = "none";

    // You can now access the user's marks from the 'userMarks' variable
    console.log("User Marks:", userMarksRound1);
}

// Define the JSON array of Round 2 questions
var round2_questions = [
    {
        "question_number": 1,
        "question": "Which gas is most abundant in Earth's atmosphere?",
        "options": ["A) Oxygen", "B) Carbon Dioxide", "C) Nitrogen", "D) Hydrogen"],
        "correct_option": "C) Nitrogen"
    },
    {
        "question_number": 2,
        "question": "What is the largest planet in our solar system?",
        "options": ["A) Earth", "B) Mars", "C) Jupiter", "D) Saturn"],
        "correct_option": "C) Jupiter"
    },
    {
        "question_number": 3,
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": ["A) China", "B) South Korea", "C) Japan", "D) Vietnam"],
        "correct_option": "C) Japan"
    },
    {
        "question_number": 4,
        "question": "What is the chemical symbol for gold?",
        "options": ["A) Go", "B) Gl", "C) Gd", "D) Au"],
        "correct_option": "D) Au"
    },
    {
        "question_number": 5,
        "question": "Who is the author of the famous play 'Romeo and Juliet'?",
        "options": ["A) Charles Dickens", "B) William Shakespeare", "C) Mark Twain", "D) Jane Austen"],
        "correct_option": "B) William Shakespeare"
    }
];

// Variable to store user marks for Round 2
var userMarksRound2 = 0;

// Function to start Round 2 and display questions
function openRound2() {
    var questionContainer = document.querySelector(".round2-question");

    // Clear the existing content in the question container
    questionContainer.innerHTML = "";

    // Iterate through the Round 2 questions and display them
    for (var i = 0; i < round2_questions.length; i++) {
        var question = round2_questions[i];

        var questionElement = document.createElement("div");
        questionElement.className = "question-container"; // Add a class for styling

        questionElement.innerHTML = `<p><strong>Question ${question.question_number}:</strong> ${question.question}</p>`;

        // Create radio buttons for each option
        for (var j = 0; j < question.options.length; j++) {
            var optionLabel = question.options[j];
            var optionId = `q${question.question_number}_option${j}`;

            questionElement.innerHTML += `
                <label for="${optionId}">
                    <input type="radio" name="question_${question.question_number}" id="${optionId}" value="${optionLabel}">
                    ${optionLabel}
                </label>
            `;
        }

        questionContainer.appendChild(questionElement);
    }

    // Add a submit button for Round 2
    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit Round 2 Answers";
    submitButton.addEventListener("click", checkRound2Answers);
    questionContainer.appendChild(submitButton);
    // Start the 15-minute timer for Round 2
    startRound2Timer(15 * 60); // 15 minutes in seconds
}

// Function to check Round 2 answers and calculate marks
function checkRound2Answers() {
    userMarksRound2 = 0;

    for (var i = 0; i < round2_questions.length; i++) {
        var question = round2_questions[i];
        var selectedOption = document.querySelector(`input[name="question_${question.question_number}"]:checked`);

        if (selectedOption && selectedOption.value === question.correct_option) {
            userMarksRound2++; // Increment the marks for correct answers in Round 2
        }

        // Disable radio buttons after submission
        var radioButtons = document.querySelectorAll(`input[name="question_${question.question_number}"`);
        radioButtons.forEach(function (radioButton) {
            radioButton.disabled = true;
        });
    }

    // Disable the submit button after submission
    var submitButton = document.querySelector("button");
    submitButton.disabled = true;

    // Hide the round2-question div
    var round2QuestionDiv = document.querySelector(".round2-question");
    round2QuestionDiv.style.display = "none";

    // You can now access the user's marks for Round 2 from the 'userMarksRound2' variable
    console.log("User Marks for Round 2:", userMarksRound2);
}

round3_questions = [
    {
        "question_number": 1,
        "question": "Identify the logo of this programming language.",
        "options": [
            "A) Python",
            "B) Java",
            "C) C++",
            "D) JavaScript"
        ],
        "correct_option": "A) Python",
        "image_path": "../img/python.png"
    },
    {
        "question_number": 2,
        "question": "Which programming language is represented by this logo?",
        "options": [
            "A) Java",
            "B) Ruby",
            "C) html",
            "D) Swift"
        ],
        "correct_option": "C) html",
        "image_path": "../img/html.png"
    },
    {
        "question_number": 3,
        "question": "Identify the logo of this programming language.",
        "options": [
            "A) C++",
            "B) Perl",
            "C) Python",
            "D) Ruby"
        ],
        "correct_option": "B) Perl",
        "image_path": "../img/perl.png"
    },
    {
        "question_number": 4,
        "question": "Which programming language is represented by this logo?",
        "options": [
            "A) JavaScript",
            "B) Swift",
            "C) Kotlin",
            "D) PHP"
        ],
        "correct_option": "C) Kotlin",
        "image_path": "../img/kotlin.png"
    },
    {
        "question_number": 5,
        "question": "Identify the logo of this programming language.",
        "options": [
            "A) JavaScript",
            "B) Ruby",
            "C) Python",
            "D) Swift"
        ],
        "correct_option": "A) JavaScript",
        "image_path": "../img/js.jpg"
    }
]

// Variable to store user marks for Round 3
var userMarksRound3 = 0;


// Function to start Round 3 and display questions
function openRound3() {
    var questionContainer = document.querySelector(".round3-question");

    // Clear the existing content in the question container
    questionContainer.innerHTML = "";

    // Iterate through the Round 3 questions and display them
    for (var i = 0; i < round3_questions.length; i++) {
        var question = round3_questions[i];

        var questionElement = document.createElement("div");
        questionElement.className = "question-container"; // Add a class for styling

        // Display the image associated with the question and center it
        questionElement.innerHTML = `
            <div style="text-align: center;">
                <img src="${question.image_path}" alt="Logo" class="question-image">
            </div>
        `;

        questionElement.innerHTML += `<p><strong>Question ${question.question_number}:</strong> ${question.question}</p>`;

        // Create radio buttons for each option
        for (var j = 0; j < question.options.length; j++) {
            var optionLabel = question.options[j];
            var optionId = `q${question.question_number}_option${j}`;

            questionElement.innerHTML += `
                <label for="${optionId}">
                    <input type="radio" name="question_${question.question_number}" id="${optionId}" value="${optionLabel}">
                    ${optionLabel}
                </label>
            `;
        }

        questionContainer.appendChild(questionElement);
    }

    // Add a submit button for Round 3
    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit Round 3 Answers";
    questionContainer.appendChild(submitButton);
    submitButton.addEventListener("click", checkRound3Answers);

    // Start the 8-minute timer for Round 3
    startRound3Timer(8 * 60); // 8 minutes in seconds
}

// Function to check Round 3 answers and calculate marks
function checkRound3Answers() {
    userMarksRound3 = 0;

    for (var i = 0; i < round3_questions.length; i++) {
        var question = round3_questions[i];
        var selectedOption = document.querySelector(`input[name="question_${question.question_number}"]:checked`);

        if (selectedOption && selectedOption.value === question.correct_option) {
            userMarksRound3++; // Increment the marks for correct answers in Round 3
        }

        // Disable radio buttons after submission
        var radioButtons = document.querySelectorAll(`input[name="question_${question.question_number}"`);
        radioButtons.forEach(function (radioButton) {
            radioButton.disabled = true;
        });
    }

    // Disable the submit button after submission
    var submitButton = document.querySelector("button");
    submitButton.disabled = true;

    // Hide the round3-question div
    var round3QuestionDiv = document.querySelector(".round3-question");
    round3QuestionDiv.style.display = "none";

    // You can now access the user's marks for Round 3 from the 'userMarksRound3' variable
    console.log("User Marks for Round 3:", userMarksRound3);
}

function calculateAdmissionStatus() {
    var cumulativeScore = userMarksRound1 + userMarksRound2 + userMarksRound3;
    var normalizedScore = (cumulativeScore / 30) * 10;

    var admissionStatus = "";
    if (normalizedScore > 9.5) {
        admissionStatus = "Admitted to Vellore campus";
    } else if (normalizedScore >= 7.5 && normalizedScore <= 9.4) {
        admissionStatus = "Admitted to Chennai campus";
    } else if (normalizedScore >= 6.5 && normalizedScore <= 7.4) {
        admissionStatus = "Admitted to Amravati campus";
    } else {
        admissionStatus = "Not admitted";
    }

    return {
        round1Marks: userMarksRound1,
        round2Marks: userMarksRound2,
        round3Marks: userMarksRound3,
        cumulativeScore: cumulativeScore,
        normalizedScore: normalizedScore,
        admissionStatus: admissionStatus
    };
}

function printAdmissionStatus() {
    var admissionInfo = calculateAdmissionStatus();

    // Update the HTML elements with the calculated values
    document.getElementById("round1Marks").textContent = admissionInfo.round1Marks;
    document.getElementById("round2Marks").textContent = admissionInfo.round2Marks;
    document.getElementById("round3Marks").textContent = admissionInfo.round3Marks;
    document.getElementById("cumulativeScore").textContent = admissionInfo.cumulativeScore;
    document.getElementById("normalizedScore").textContent = admissionInfo.normalizedScore;
    document.getElementById("admissionStatus").textContent = admissionInfo.admissionStatus;

    // Make the final-marks div visible
    document.querySelector(".final-marks").style.display = "block";
}

// Function to start the timer for Round 1
function startRound1Timer(duration) {
    let round1TimerDisplay = document.getElementById("round1-timer");
    startTimer(duration, round1TimerDisplay, checkAnswers1);
}

// Function to start the timer for Round 2
function startRound2Timer(duration) {
    let round2TimerDisplay = document.getElementById("round2-timer");
    startTimer(duration, round2TimerDisplay, checkRound2Answers);
}

// Function to start the timer for Round 3
function startRound3Timer(duration) {
    let round3TimerDisplay = document.getElementById("round3-timer");
    startTimer(duration, round3TimerDisplay, checkRound3Answers);
}

// Function to start the timer
function startTimer(duration, timerDisplay, onTimeoutCallback) {
    let timerValue = duration;

    const timer = setInterval(function () {
        let minutes = Math.floor(timerValue / 60);
        let seconds = timerValue % 60;

        timerDisplay.innerHTML = `Time left: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (timerValue === 0) {
            clearInterval(timer); // Stop the timer
            timerDisplay.innerHTML = "Time's up!";
            if (typeof onTimeoutCallback === "function") {
                onTimeoutCallback();
            }
        }

        timerValue--;
    }, 1000);
}