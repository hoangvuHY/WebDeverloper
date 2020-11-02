const calculator = {
  displayValue: '0',//the input of the user, it's how we keep track of what should be displayed on the screen
  firstOperand: null,// store the first operand(toan hang dau tien). it's set to null
  waitingForSecondOperand: false,//a way to check if both the first operand and operator have been inputted.  If it's true, the next number that the user enters will constitute(Nhap tiep) the second operand.

  operator: null,//key will the operator for express(Bieu thuc). it's initial value set to null
}
function updateDisplay() {
  // select the element with class of `calculator-screen`
  const display = document.querySelector('.calculator-screen');
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}

updateDisplay();
// calculator.displayValue = 33333;
// updateDisplay();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  //Access the clicked element
  // is equivalent to
  // const target = event.target;
  const { target } = event;
  const { value } = target;
  if (!target.matches('button')) {
    console.log('wrong');
    return;
  }

  switch (value) {

    case '-':
      // calculator.operator = '-'
      if (calculator.displayValue == '0') {
        calculator.displayValue = '-';
      } else {
        handleOperator(value);
      }
      break;
    case '+':
    case '*':
    case '/':
    case '=':
      if (calculator.displayValue == '-') {
        calculator.displayValue = '0';
      } else {
        handleOperator(value);
      }
      break;
    case '.':
      inputDecimal(value);
      break;
    case 'all-clear':
      resetCalculate();
      break;

    default:
      if (Number.isInteger(parseFloat(value))) {
        inputDigit(value);
      }
    // break;
  }
  /* 
    if (target.classList.contains('operator')) {
      console.log('operator: ', target.value);
      handleOperator(target.value)
      updateDisplay();
      return;
    }
    if (target.classList.contains('decimal')) {
      console.log('decimal: ', target.value);
      inputDecimal(target.value);
      updateDisplay();
      return;
    }
    if (target.classList.contains('all-clear')) {
      console.log('all-clear: ', target.value);
      resetCalculate();
      updateDisplay();
      return;
    }
    console.log('digital: ', target.value);
    inputDigit(target.value); */
  updateDisplay();

})

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand, operator } = calculator;
  if (operator == '-') {
    calculator.displayValue = operator + digit;
    return;
  }
  if (waitingForSecondOperand) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  }
  else {
    calculator.displayValue = displayValue == '0' ? digit : displayValue + digit;
  }

  /**
   * if(=='0')
   * calculator.displayValue = 0 
   * else
   * calculator.displayValue = gia tri do + them gia tri duoc nhap vao
   */

}
function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand) {
    calculator.displayValue = '0.';
    calculator.waitingForSecondOperand = false;
    return;
  }

  if (!calculator.displayValue.includes(dot)) {
    // neu k chua dau cham thi moi cong vao
    calculator.displayValue += dot;
  }
}

//When a user hits(Nhan vao) an operator after entering the first operand
function handleOperator(nextOperator) {
  // Destructure(Pha huy. Thay doi cau truc) the properties on the calculator object
  const { firstOperand, displayValue, operator } = calculator;

  //Neu muon thay doi cac toan tu
  /**
   * When two or more operators are entered consecutively
   */

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    console.log(calculator.operator);
    return;
  }
  // Toan tu duoc nhap vao va chuyen ve so thuc. Toan tu la la toan tu hien tai
  const inputValue = parseFloat(displayValue);
  //so dau tien da xong
  if (firstOperand == null && !isNaN(inputValue)) {// bam vao cac operator
    calculator.firstOperand = inputValue;
  } else if (operator) { // Khi ma bam vao nut bang se chay dong nay
    const result = calculate(firstOperand, inputValue, operator);
    // calculator.displayValue = String(result);
    calculator.displayValue = parseFloat(result.toFixed(7));
    calculator.firstOperand = result;
  }
  //toan tu nhap
  calculator.operator = nextOperator;
  calculator.waitingForSecondOperand = true;
}
//When the user hits an operator after entering the second operand
function calculate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } if (operator === "*") {
    return firstOperand * secondOperand;
  } if (operator === "/") {
    return firstOperand / secondOperand;
  }
  return secondOperand;
}


function resetCalculate() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.operator = null;
  calculator.waitingForSecondOperand = false;
}