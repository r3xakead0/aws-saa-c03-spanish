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

    const validateAnswer = (name, correctAnswer, isMultipleChoice) => {
        const selectedAnswers = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(input => input.value);
        if (isMultipleChoice) {
            return JSON.stringify(selectedAnswers.sort()) === JSON.stringify(correctAnswer.sort());
        }
        const selectedAnswer = document.querySelector(`input[name="${name}"]:checked`);
        return selectedAnswer && selectedAnswer.value === correctAnswer;
    };

    let message = '';

    // Validación de respuestas
    if (validateAnswer('q1', correctAnswers.q1, false)) {
        message += '<p class="message correct">Pregunta 1: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 1: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q1 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 2
    if (validateAnswer('q2', correctAnswers.q2, false)) {
        message += '<p class="message correct">Pregunta 2: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 2: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q2 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 3
    if (validateAnswer('q3', correctAnswers.q3, false)) {
        message += '<p class="message correct">Pregunta 3: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 3: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q3 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 4
    if (validateAnswer('q4', correctAnswers.q4, false)) {
        message += '<p class="message correct">Pregunta 4: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 4: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q4 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 5
    if (validateAnswer('q5', correctAnswers.q5, false)) {
        message += '<p class="message correct">Pregunta 5: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 5: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q5 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 6
    if (validateAnswer('q6', correctAnswers.q6, true)) {
        message += '<p class="message correct">Pregunta 6: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 6: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctAnswers.q6) + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 7
    if (validateAnswer('q7', correctAnswers.q7, false)) {
        message += '<p class="message correct">Pregunta 7: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 7: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q7 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 8
    if (validateAnswer('q8', correctAnswers.q8, false)) {
        message += '<p class="message correct">Pregunta 8: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 8: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q8 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 9
    if (validateAnswer('q9', correctAnswers.q9, true)) {
        message += '<p class="message correct">Pregunta 9: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 9: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctAnswers.q9) + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 10
    if (validateAnswer('q10', correctAnswers.q10, false)) {
        message += '<p class="message correct">Pregunta 10: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 10: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q10 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 11
    if (validateAnswer('q11', correctAnswers.q11, false)) {
        message += '<p class="message correct">Pregunta 11: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 11: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q11 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 12
    if (validateAnswer('q12', correctAnswers.q12, true)) {
        message += '<p class="message correct">Pregunta 12: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 12: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctAnswers.q12) + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 13
    if (validateAnswer('q13', correctAnswers.q13, false)) {
        message += '<p class="message correct">Pregunta 13: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 13: Respuesta incorrecta. La respuesta correcta es ' + correctAnswers.q13 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 14
    if (validateAnswer('q14', correctAnswers.q14, false)) {
        message += '<p class="message correct">Pregunta 14: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 14: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q14 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 15
    if (validateAnswer('q15', correctAnswers.q15, true)) {
        message += '<p class="message correct">Pregunta 15: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 15: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctAnswers.q15) + '.</p>';
    }

    document.getElementById('message').innerHTML = message;
});