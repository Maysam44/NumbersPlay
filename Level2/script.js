var currentQuestion = "";
var score = 0; // تعريف المتغير الذي سيحمل النتيجة
var level = 1; // تعريف المتغير الذي سيحمل مستوى اللاعب


function generateQuestion() {

    var num1 = Math.floor(Math.random() * 50) + 1;
    var num2 = Math.floor(Math.random() * num1) + 1;

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

        if (operator === "+") {
            correctAnswer = num1 + num2;
        } else if (operator === "-") {
            correctAnswer = num1 - num2;
        }

        var userAnswer = parseInt(answerInput.value, 10);

        if (!isNaN(userAnswer)) {
            if (userAnswer === correctAnswer) {
                resultParagraph.innerText = " 🎉🎉 أحسنت";
                score++; // زيادة النتيجة عند الإجابة الصحيحة
                
                // فحص إذا وصل اللاعب للنقاط 20
                if (score === 20) {
                    level++; // زيادة مستوى اللاعب
                    score = 0; // إعادة تعيين عدد النقاط
                    alert("Congratulations! You've reached level " + level);
                }
            } else {
                resultParagraph.innerText = "😔❌ حاول مرة أخرى ";
                
            }
        } else {
            resultParagraph.innerText = "🤗😇رجاءاً أدخل رقم";
        }

        answerInput.value = "";
    } else {
        question.innerText = generateQuestion();
        currentQuestion = question.innerText; // حفظ السؤال الحالي
        answerInput.value = "";
    }
}

// دالة لتوليد سؤال جديد عند النقر على الزر
function generateNewQuestion() {
    var question = document.getElementById("question");
    var answerInput = document.getElementById("answer");
    var resultParagraph = document.getElementById("result");

    question.innerText = generateQuestion();
    currentQuestion = question.innerText; // حفظ السؤال الجديد
    answerInput.value = "";
    resultParagraph.innerText = ""; // حذف أي نص ناتج عن الإجابة السابقة
}

// دالة لعرض النتيجة
function showScore() {
    alert("Your score is: " + score);
}

// توليد سؤال جديد عند تحميل الصفحة
window.onload = function() {
    var question = document.getElementById("question");
    question.innerText = generateQuestion();
    currentQuestion = question.innerText; // حفظ السؤال الحالي
}



document.getElementById("question").innerText = generateQuestion();
