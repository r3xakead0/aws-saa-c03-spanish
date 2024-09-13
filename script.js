document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Respuestas correctas
    const correctAnswers = {
        q1: 'B', 
        q2: 'C', 
        q3: 'A', 
        q4: 'A', 
        q5: 'B', 
        q6: ['A', 'E'],
        q7: 'D', 
        q8: 'A',
        q9: ['A', 'D', 'E'],
        q10: 'D', 
        q11: 'B', 
        q12: ['A', 'C', 'D'],
        q13: 'B', 
        q14: 'D', 
        q15: ['A', 'C']
    };

    let message = '';

    // Validación de la respuesta para la Pregunta 1
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === correctAnswers.q1) {
        message += '<p class="message correct">Pregunta 1: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 1: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q1 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 2
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === correctAnswers.q2) {
        message += '<p class="correct">Pregunta 2: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 2: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q2 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 3
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === correctAnswers.q3) {
        message += '<p class="correct">Pregunta 3: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 3: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q3 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 4
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === correctAnswers.q4) {
        message += '<p class="correct">Pregunta 4: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 4: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q4 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 5
    const q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer && q5Answer.value === correctAnswers.q5) {
        message += '<p class="correct">Pregunta 5: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 5: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q5 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 6
    const q6Answers = Array.from(document.querySelectorAll('input[name="q6"]:checked')).map(input => input.value);
    const correctQ6Answers = correctAnswers.q6.sort();
    const selectedQ6Answers = q6Answers.sort();

    if (JSON.stringify(selectedQ6Answers) === JSON.stringify(correctQ6Answers)) {
        message += '<p class="correct">Pregunta 6: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 6: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctQ6Answers) + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 7
    const q7Answer = document.querySelector('input[name="q7"]:checked');
    if (q7Answer && q7Answer.value === correctAnswers.q7) {
        message += '<p class="correct">Pregunta 7: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 7: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q7 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 8
    const q8Answer = document.querySelector('input[name="q8"]:checked');
    if (q8Answer && q8Answer.value === correctAnswers.q8) {
        message += '<p class="correct">Pregunta 8: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 8: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q8 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 9
    const q9Answers = Array.from(document.querySelectorAll('input[name="q9"]:checked')).map(input => input.value);
    const correctQ9Answers = correctAnswers.q9.sort();
    const selectedQ9Answers = q9Answers.sort();

    if (JSON.stringify(selectedQ9Answers) === JSON.stringify(correctQ9Answers)) {
        message += '<p class="correct">Pregunta 9: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 9: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctQ9Answers) + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 10
    const q10Answer = document.querySelector('input[name="q10"]:checked');
    if (q10Answer && q10Answer.value === correctAnswers.q10) {
        message += '<p class="correct">Pregunta 10: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 10: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q10 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 11
    const q11Answer = document.querySelector('input[name="q11"]:checked');
    if (q11Answer && q11Answer.value === correctAnswers.q11) {
        message += '<p class="correct">Pregunta 11: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 11: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q11 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 12
    const q12Answers = Array.from(document.querySelectorAll('input[name="q12"]:checked')).map(input => input.value);
    const correctQ12Answers = correctAnswers.q12.sort();
    const selectedQ12Answers = q9Answers.sort();

    if (JSON.stringify(selectedQ12Answers) === JSON.stringify(correctQ12Answers)) {
        message += '<p class="correct">Pregunta 12: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 12: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctQ12Answers) + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 13
    const q13Answer = document.querySelector('input[name="q13"]:checked');
    if (q13Answer && q13Answer.value === correctAnswers.q13) {
        message += '<p class="correct">Pregunta 13: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 13: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q13 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 14
    const q14Answer = document.querySelector('input[name="q14"]:checked');
    if (q14Answer && q14Answer.value === correctAnswers.q14) {
        message += '<p class="correct">Pregunta 14: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 14: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q14 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 15
    const q15Answers = Array.from(document.querySelectorAll('input[name="q15"]:checked')).map(input => input.value);
    const correctQ15Answers = correctAnswers.q15.sort();
    const selectedQ15Answers = q9Answers.sort();

    if (JSON.stringify(selectedQ15Answers) === JSON.stringify(correctQ15Answers)) {
        message += '<p class="correct">Pregunta 15: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message">Pregunta 15: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctQ15Answers) + '.</p>';
    }

    document.getElementById('message').innerHTML = message;
});