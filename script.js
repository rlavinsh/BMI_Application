document.body.style.backgroundColor = "#254a4f";

function getbmi() {
  let inputField = document.querySelector(".weight");
  let w = Number.parseInt(inputField.value);

  let heightField = document.querySelector(".height");
  let h = Number.parseFloat(heightField.value) / 100;

  let result = (w / (h * h).toFixed(2)).toFixed(2);
  console.log(result);

  document.querySelector(".result").innerHTML = `Your BMI is ${result}😎`;
}
let bmi = document.getElementById("cal").addEventListener("click", getbmi);
