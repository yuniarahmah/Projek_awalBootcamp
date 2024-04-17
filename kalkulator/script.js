let operator = "+"
function hitunghasil () {
  let val1 = Number(document.getElementById("input1").value);
  let val2 = Number(document.getElementById("input2").value);
  let result = document.getElementById("result");
  switch(operator) {
    case "+" :
      result.textContent = val1 + val2;
      break;
    case "-" :
      result.textContent = val1 - val2;
      break;
    case "x" :
      result.textContent = val1 * val2;
      break;
    case "/" :
      result.textContent = val1 / val2;
      break;
  } 
}

function setOperator(btn) {
operator = btn .textContent 
}                                                                                                                                                                                                                    