const adviceID = document.querySelector("#adviceID");
const adviceText = document.querySelector("#adviceText");
const adviceButton = document.querySelector("#adviceButton");

async function logAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const advice = await response.json();
  adviceID.innerHTML = advice.slip.id;
  adviceText.innerHTML = `"${advice.slip.advice}"`;
  adviceButton.addEventListener("click", function () {
    location.reload();
  });
}

logAdvice();
