// Creates an object to keep track of the calculator’s current state
const Calculator = {
  Display_Value: '0',         // What is shown on the calculator screen
  First_Operand: null,        // First number entered (before an operator)
  Wait_Second_Operand: false, // Indicates if the next digit is the second number
  operator: null              // Operator selected (+, -, *, /, =)
};

// Handles digit button presses (0–9)
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = Calculator;

  // If waiting for the second number, replace the display with the new digit
  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit;
    Calculator.Wait_Second_Operand = false;
  } else {
    // Otherwise, append the digit unless the current value is "0"
    Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
  }
}

// Handles decimal point button press
function Input_Decimal(dot) {
  // Prevent entering a decimal if waiting for the second operand
  if (Calculator.Wait_Second_Operand === true) return;

  // Only add a decimal if one is not already in the display
  if (!Calculator.Display_Value.includes(dot)) {
    Calculator.Display_Value += dot;
  }
}

// Handles when an operator button is pressed (+, -, *, /, =)
function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator;
  const Value_of_Input = parseFloat(Display_Value); // Convert string to number

  // If an operator is already set and waiting for the second operand, update it
  if (operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = Next_Operator;
    return;
  }

  // If no first operand yet, set it
  if (First_Operand == null && !isNaN(Value_of_Input)) {
    Calculator.First_Operand = Value_of_Input;
  } 
  // If an operator already exists, perform the calculation
  else if (operator) {
    const Value_Now = Calculator.First_Operand || 0;
    let result = Perform_Calculation[operator](Value_Now, Value_of_Input);

    // Fix decimal precision and remove trailing zeroes
    result = Number(result).toFixed(9);
    result = (result * 1).toString();

    // Update the screen and store result for next operations
    Calculator.Display_Value = result;
    Calculator.First_Operand = parseFloat(result);
  }

  // Prepare for the next input
  Calculator.Wait_Second_Operand = true;
  Calculator.operator = Next_Operator;
}

// Object that defines how each operator behaves
const Perform_Calculation = {
  '/': (first, second) => first / second,
  '*': (first, second) => first * second,
  '+': (first, second) => first + second,
  '-': (first, second) => first - second,
  '=': (first, second) => second // '=' just returns the current input
};

// Resets the calculator to its default state
function Calculator_Reset() {
  Calculator.Display_Value = '0';
  Calculator.First_Operand = null;
  Calculator.Wait_Second_Operand = false;
  Calculator.operator = null;
}

// Updates the calculator screen with the current display value
function Update_Display() {
  const display = document.querySelector('.calculator-screen');
  display.value = Calculator.Display_Value;
}

Update_Display(); // Initialize the screen when the page loads

// Listen for all button clicks on the calculator
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const target = event.target;

  // Ignore clicks that are not buttons
  if (!target.matches('button')) return;

  // If an operator button was clicked
  if (target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
  }

  // If the decimal button was clicked
  if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
  }

  // If the All Clear (AC) button was clicked
  if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
  }

  // If a number button was clicked
  Input_Digit(target.value);
  Update_Display();
});
