const correctAnswers = ['B','B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const passed = document.querySelector('.passed');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });
    scrollTo(0, 0);
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}`;
        if (output === score){
            clearInterval(timer);
            if(score > 79){
                passed.textContent = 'Congratulations, You passed';
                passed.style.color = 'green';
            }else{
                passed.textContent = 'Try again'
                passed.style.color = 'crimson';
            }
        }else{
            output++;
        }
    }, 10)
    
  
    
});

