let result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function calculateResult() {
  let expression = result.value;
  let answer = eval(expression);
  result.value = answer;
}

function clearResult() {
  result.value = '';
}

function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}
