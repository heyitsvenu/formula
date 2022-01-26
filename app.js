const submit = document.querySelector('#submit');
const result = document.querySelector('.result');
const degreeInput = document.querySelector('#degree');
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');

function handleSubmit(e) {
  e.preventDefault();
  const degreeInputValue = degreeInput.value;
  const minutesInputValue = minutesInput.value;
  const secondsInputValue = secondsInput.value;

  let formulaResult;

  formulaResult =
    360 -
    (Number(degreeInputValue) +
      +(Number(minutesInputValue) / 60).toFixed(2) +
      +(Number(secondsInputValue) / 3600).toFixed(4));

  const resultDegree = Math.floor(formulaResult);
  const remainderDegree = formulaResult - Math.floor(formulaResult);
  const resultMinutes = remainderDegree.toFixed(4) * 60;
  const remainderMinutes = resultMinutes - Math.floor(resultMinutes);
  const resultSeconds = remainderMinutes.toFixed(3) * 60;

  const finalResult = `Result : ${resultDegree}&deg; + ${Math.floor(
    resultMinutes
  )}' + ${resultSeconds}"`;

  console.log(finalResult);

  result.innerHTML = finalResult;

  degreeInput.value = '';
  minutesInput.value = '';
  secondsInput.value = '';
}

submit.addEventListener('click', handleSubmit);
