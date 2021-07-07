const questions = [
    {
        question: "Correct HTML Tag for the Largest Heading is",
        a: "<h6>",
        b: "<heading>",
        c: "<h1>",
        d: "<head>",
        answer: "ans3"
    },
    {
        question: "Which of the following i snot an attribute of <form> tag",
        a: "Action",
        b: "Method",
        c: "name",
        d: "url",
        answer: "ans4"
    },
    {
        question: "All HTML Tag are must be enclosed in",
        a: "/ AND !",
        b: "< AND >",
        c: "{ AND }",
        d: "# AND #",
        answer: "ans2"
    },
    {
        question: "The BODY tag is usually used after",
        a: "EM Tag",
        b: "TITLE tag",
        c: "HEAD Tag",
        d: "HTML Tag",
        answer: "ans4"
    }
    ,
    {
        question: "A much better approaqch to establish the base URL is to use the ______ element.",
        a: "BODY",
        b: "BASE",
        c: "HEAD",
        d: "None of the above",
        answer: "ans2"
    }
    ,
    {
        question: "To start a List using Circles, Use",
        a: "<ul Type='Circle'>",
        b: "<ul Type='round'>",
        c: "<ul ='round'>",
        d: "<ul 'round'>",
        answer: "ans4"
    }
    ,
    {
        question: "Which is Not a property of Attribute behaviour of &lt;Marquee> Tag?",
        a: "Blur",
        b: "Scroll",
        c: "Alternate",
        d: "Slide",
        answer: "ans3"
    }
    ,
    {
        question: "A simple Text File which tells the browser what to cache is known as a _______",
        a: "Input Files",
        b: "Output Files",
        c: "A Manifest File",
        d: "HTML File",
        answer: "ans4"
    }
    ,
    {
        question: "Which HTML Tag is used to define a Client-Side script such as the Javascript",
        a: "<unscript>",
        b: "<script>",
        c: "Both Above",
        d: "None of the Above",
        answer: "ans2"
    }
    ,
    {
        question: " with (function(x, undefined){}) length;",
        a: "1",
        b: "2",
        c: "undefined",
        d: "error",
        answer: "ans3"
    }
]

const ques = document.querySelector(".question")
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const answers = document.querySelectorAll('.radio');

const nextBtn = document.querySelector('.btn_right');
const prevBtn = document.querySelector('.btn_left');
const submitBtn = document.querySelector('.btn_submit');
const rsult = document.querySelector('.score');
const resultDiv = document.querySelector('.resultDiv');
const mainDiv = document.querySelector('.mainDiv');
const startDiv = document.querySelector('.startDiv');
const startBtn = document.querySelector('.startBtn');


let randNum = 0
let questionCount = 0;
let currentAns = ""

let score = 0
const loadQuestion = () => {
    // randNum=Math.floor(Math.random()*questions.length);
    console.log(questions[questionCount])
    // console.log(questions[questionCount])
    const questionList = questions[questionCount]

    console.log(questionList)
    ques.textContent = questionList.question
    option1.textContent = questionList.a
    option2.textContent = questionList.b
    option3.textContent = questionList.c
    option4.textContent = questionList.d
    currentAns = questionList.answer
}


loadQuestion()

const getAnswer = () => {
    let answer;
    answers.forEach((currenElement) => {
        if (currenElement.checked) {
            answer = currenElement.id
        }
    })
    return answer
}
const deSelectAll = () => {
    answers.forEach((currenElement) => {
        if (currenElement.checked) {
            currenElement.checked = false

        }
    })
}
startBtn.addEventListener("click", () => {
    startDiv.style.display = "none"
    mainDiv.style.display = "flex"
})
nextBtn.addEventListener('click', () => {
    // console.log("clicked")
    const checkedAnswer = getAnswer()

    prevBtn.classList.add("btn_show")

    if (checkedAnswer === currentAns) {
        score++
    }

    questionCount++
    deSelectAll()

    if (questionCount < questions.length) {
        loadQuestion()

    }
    if (questionCount == questions.length - 1) {
        nextBtn.style.display = "none"
        prevBtn.classList.remove("btn_show")
        submitBtn.style.display = "block"
    }
})

prevBtn.addEventListener("click", () => {
    console.log(questionCount)
    if (questionCount > 0) {
        questionCount--
        if (questionCount > -1) {
            loadQuestion()
        }
    }

})


submitBtn.addEventListener("click", () => {
    mainDiv.style.display = "none"
    rsult.textContent = `Your Score is ${score}`
    resultDiv.classList.add("show")
})