const quizData = [
    {
        question: 'How old is EsneyJem?',
        a: '19',
        b: '26',
        c: '39',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programing lenguage 2022?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is he President of US?',
        a: 'EsneyJem',
        b: 'Danald trump',
        c: 'Ivan Saldano',
        d: 'Mihai Adrei',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminal Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'What year was JacaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
];

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEl = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    deselectAnswer() 
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected(){
    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
            
        }

    });
     return answer;
};

function deselectAnswer() {
    answerEl.forEach((answerEl) => {
    answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () =>{
   const answer = getSelected();
   console.log(answer);

   if (answer){
    if(answer === quizData[currentQuiz].correct){
        score++;
    }
   
    currentQuiz++;

    if (currentQuiz < quizData.length){
        loadQuiz();
        
    }else{
        quiz.innerHTML = 
        `<h2>You answered correctly at 
        ${score}/${quizData.length} 
        questions.</h2> 
        <button onclick ="location.reload()">
        Reload</button`; 
    }
   }
});

