/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "The internal elements of a valve are collectively referred to as a valve's .", ///// Write the question inside double quotes
            answers: {
                a: "works ", ///// Write the option 1 inside double quotes
                b: "trim", ///// Write the option 2 inside double quotes
				c: "guts",
				d: "packings"
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "The manually operated handwheel, manual lever, motor operator, solenoid operator, pneumatic operator, or hydraulic ram are all examples of",  ///// Write the question inside double quotes
      answers: {
        a: "an actuator",                  ///// Write the option 1 inside double quotes
        b: "a bonnet",                  ///// Write the option 2 inside double quotes
        c: "a yoke",      
		d: "a stem"
		},
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
	{
            question: "Which one of the following valve parts is NOT usually considered to be a part of the pressure boundary.", ///// Write the question inside double quotes
            answers: {
                a: "body", ///// Write the option 1 inside double quotes
                b: "disk", ///// Write the option 2 inside double quotes
				c: "bonnet",
				d: "seal rings"
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },
		{
            question: "Most valves use___________to prevent leakage from the space between the stem and the bonnet.", ///// Write the question inside double quotes
            answers: {
                a: "a liquid seal", ///// Write the option 1 inside double quotes
                b: "o-rings", ///// Write the option 2 inside double quotes
				c: "packing",
				d: "a metal to metal seal"
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },
		{
            question: "Which of the following types of valve uses a flow control element that involves sliding a flat, cylindrical, or spherical surface across an orifice?", ///// Write the question inside double quotes
            answers: {
                a: "globe and needle valves", ///// Write the option 1 inside double quotes
                b: "butterfly and diaphragm valves", ///// Write the option 2 inside double quotes
				c: "globe and gate valves",
				d: "gate and plug valves"
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
