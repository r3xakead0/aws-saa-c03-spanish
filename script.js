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
        q15: ['A', 'C'], 
        q16: ['A', 'E'], 
        q17: 'C', 
        q18: 'A', 
        q19: 'A', 
        q20: 'C', 
        q21: 'B', 
        q22: 'D', 
        q23: 'C', 
        q24: 'D', 
        q25: 'C', 
        q26: 'C', 
        q27: ['B', 'E'], 
        q28: 'B', 
        q29: 'D', 
        q30: 'B', 
        q31: ['B', 'D'], 
        q32: 'A', 
        q33: 'C', 
        q34: 'B', 
        q35: 'D', 
        q36: 'D', 
        q37: 'D', 
        q38: 'D', 
        q39: 'A', 
        q40: ['C', 'D'],  
        q41: 'C'
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

    // Validación de la respuesta para la Pregunta 16
    if (validateAnswer('q16', correctAnswers.q16, true)) {
        message += '<p class="message correct">Pregunta 16: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 16: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctAnswers.q16) + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 17
    if (validateAnswer('q17', correctAnswers.q17, false)) {
        message += '<p class="message correct">Pregunta 17: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 17: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q17 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 18
    if (validateAnswer('q18', correctAnswers.q18, false)) {
        message += '<p class="message correct">Pregunta 18: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 18: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q18 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 19
    if (validateAnswer('q19', correctAnswers.q19, false)) {
        message += '<p class="message correct">Pregunta 19: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 19: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q19 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 20
    if (validateAnswer('q20', correctAnswers.q20, false)) {
        message += '<p class="message correct">Pregunta 20: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 20: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q20 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 21
    if (validateAnswer('q21', correctAnswers.q21, false)) {
        message += '<p class="message correct">Pregunta 21: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 21: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q21 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 22
    if (validateAnswer('q22', correctAnswers.q22, false)) {
        message += '<p class="message correct">Pregunta 22: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 22: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q22 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 23
    if (validateAnswer('q23', correctAnswers.q23, false)) {
        message += '<p class="message correct">Pregunta 23: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 23: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q23 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 24
    if (validateAnswer('q24', correctAnswers.q24, false)) {
        message += '<p class="message correct">Pregunta 24: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 24: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q24 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 25
    if (validateAnswer('q25', correctAnswers.q25, false)) {
        message += '<p class="message correct">Pregunta 25: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 25: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q25 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 26
    if (validateAnswer('q26', correctAnswers.q26, false)) {
        message += '<p class="message correct">Pregunta 26: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 26: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q26 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 27
    if (validateAnswer('q27', correctAnswers.q27, true)) {
        message += '<p class="message correct">Pregunta 27: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 27: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctAnswers.q27) + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 28
    if (validateAnswer('q28', correctAnswers.q28, false)) {
        message += '<p class="message correct">Pregunta 28: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 28: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q28 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 29
    if (validateAnswer('q29', correctAnswers.q29, false)) {
        message += '<p class="message correct">Pregunta 29: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 29: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q29 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 30
    if (validateAnswer('q30', correctAnswers.q30, false)) {
        message += '<p class="message correct">Pregunta 30: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 30: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q30 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 31
    if (validateAnswer('q31', correctAnswers.q31, true)) {
        message += '<p class="message correct">Pregunta 31: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 31: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctAnswers.q31) + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 32
    if (validateAnswer('q32', correctAnswers.q32, false)) {
        message += '<p class="message correct">Pregunta 32: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 32: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q32 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 33
    if (validateAnswer('q33', correctAnswers.q33, false)) {
        message += '<p class="message correct">Pregunta 33: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 33: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q33 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 34
    if (validateAnswer('q34', correctAnswers.q34, false)) {
        message += '<p class="message correct">Pregunta 34: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 34: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q34 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 35
    if (validateAnswer('q35', correctAnswers.q35, false)) {
        message += '<p class="message correct">Pregunta 35: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 35: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q35 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 36
    if (validateAnswer('q36', correctAnswers.q36, false)) {
        message += '<p class="message correct">Pregunta 36: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 36: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q36 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 37
    if (validateAnswer('q37', correctAnswers.q37, false)) {
        message += '<p class="message correct">Pregunta 37: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 37: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q37 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 38
    if (validateAnswer('q38', correctAnswers.q38, false)) {
        message += '<p class="message correct">Pregunta 38: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 38: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q38 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 39
    if (validateAnswer('q39', correctAnswers.q39, false)) {
        message += '<p class="message correct">Pregunta 39: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 39: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q39 + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 40
    if (validateAnswer('q40', correctAnswers.q40, true)) {
        message += '<p class="message correct">Pregunta 40: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 40: Respuesta incorrecta. Los atributos correctos son  ' + JSON.stringify(correctAnswers.q40) + '.</p>';
    }

    // Validación de la respuesta para la Pregunta 41
    if (validateAnswer('q41', correctAnswers.q41, false)) {
        message += '<p class="message correct">Pregunta 41: ¡Respuesta correcta!</p>';
    } else {
        message += '<p class="message incorrect">Pregunta 41: Respuesta incorrecta. La respuesta correcta es  ' + correctAnswers.q41 + '.</p>';
    }

    document.getElementById('message').innerHTML = message;
});