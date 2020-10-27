function getHistory() {
    return document.getElementById('history-value').innerText;
}
// alert(getHistory()
function printHistory(num) {
    document.getElementById('history-value').innerText = num;
}

function getOutput() {
    return document.getElementById('output-value').innerText;

}
// alert(printHistory('9999'))
function printOutput(num) {
    if (num == '') {
        document.getElementById('output-value').innerText = num;

    } else {
        document.getElementById('output-value').innerText = getFormatNumber(num);

    }

}
// printOutput(4444)
function getFormatNumber(num) {

    if (num == '-') {
        return '';
    }
    var n = Number(num);
    var value = n.toLocaleString('en'); // Chuyen ve so cua nuoc anh va tu lam tron
    return value;

}
// printOutput(7777777)
function reverseNumber(num) {
    return Number(num.replace(/,/g, ''));
}

// alert(reverseNumber(getOutput()));
var operator = document.getElementsByClassName('operator');
for (let index = 0; index < operator.length; index++) {
    operator[index].addEventListener('click', function() {
        if (this.id == 'clear') {
            printHistory('');
            printOutput('');
        } else if (this.id == 'backspace') {
            var output = reverseNumber(getOutput()).toString();
            if (output) {
                //neu co so
                output = output.substr(0, output.length - 1);
                printOutput(output)
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == '' && history != '') {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);

                }
            }
            if (history != '' || output != "") {
                output = output == '' ? output : reverseNumber(output);
                history = history + output;
                if (this.id == '=') {
                    var result = eval(history);
                    printOutput(result);
                    printHistory('');
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput('')
                }
            }
        }
    })
}
var number = document.getElementsByClassName('number');
for (let index = 0; index < number.length; index++) {
    number[index].addEventListener('click', function() {
        var output = reverseNumber(getOutput());
        if (output != NaN) {
            output += this.id;
            printOutput(output);
        }
    })
}