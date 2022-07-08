const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelector('[data-delete-all]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
  }

  chooseOperation(operation) {
  }

  compute() {
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
  }
}



const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


appendNumber(number) {
  if (number === '.' && this.currentOperand.includes('.')) return
  this.currentOperand = this.currentOperand.toString() + number.toString()
}

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button,innerText)
    calculator.updateDisplay()
  })
})

