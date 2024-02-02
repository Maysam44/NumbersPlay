function generateQuestion() {

    var num1 = Math.floor(Math.random() * 100) + 1;
    var num2 = Math.floor(Math.random() * 100) + 1;
    
        var randomOperation = Math.random();

        var operation = randomOperation < 0.5 ? "add" : "subtract";
    
        if (operation === "add") {
            return num1 + " + " + num2;
        } else {
            return num1 + " - " + num2;
        }
}

function checkAnswer() {
    var question = document.getElementById("question");
    var answerInput = document.getElementById("answer");
    var resultParagraph = document.getElementById("result");

    var nums;
    var operator;
    if (question.innerText.includes("+")) {
        nums = question.innerText.split("+");
        operator = "+";
    } else if (question.innerText.includes("-")) {
        nums = question.innerText.split("-");
        operator = "-";
    } else {
        resultParagraph.innerText = "خطأ في تنسيق السؤال";
        return;
    }


    if (nums.length === 2) {
        var num1 = parseInt(nums[0].trim(), 10);
        var num2 = parseInt(nums[1].trim(), 10);
        var correctAnswer;

        //للعملية جمع او طرح 
        if (operator === "+") {
            correctAnswer = num1 + num2;
        } else if (operator === "-") {
            correctAnswer = num1 - num2;
        }

        var userAnswer = parseInt(answerInput.value, 10);

        if (!isNaN(userAnswer)) {
            if (userAnswer === correctAnswer) {
                resultParagraph.innerText = "🎉🎉 أحسنت";
            } else {
                resultParagraph.innerText = "حاول مرة أخرى ، الاجابة الصحيحة " + correctAnswer + ".";
            }
        } else {
            resultParagraph.innerText = "رجاءاً أدخل رقم";
        }

        question.innerText = generateQuestion();
        answerInput.value = "";
    } else {
        question.innerText =  generateQuestion();
        answerInput.value = "";
    }
}


document.getElementById("question").innerText =  generateQuestion();
