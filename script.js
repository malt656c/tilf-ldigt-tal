function randomNumber() {
  let maxNumber = document.querySelector("input").value;
  let rndmNumber = Math.floor(Math.random() * maxNumber);

  document.querySelector("h1").textContent = rndmNumber;
  console.log(rndmNumber, maxNumber);
}
randomNumber();
