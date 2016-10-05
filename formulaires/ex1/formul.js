function check() {
        var inputs = document.querySelectorAll('input[type=radio]:checked'),
            inputsLength = inputs.length;

        for (var i = 0; i < inputsLength; i++) {
            if (inputs[i].type === 'radio' && inputs[i].checked) {
                console.log('La case cochée est la n°' + inputs[i].value);
            }
        }
    }
