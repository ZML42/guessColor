function generateRandom(number) {
  return Math.floor(Math.random() * Math.floor(number));
}
console.log(generateRandom(256));

function guessColor() {
  const rgbColor = `rgb(${generateRandom(256)}, ${generateRandom(
    256
  )}, ${generateRandom(256)})`;
  document.querySelector(".rgb-name").innerHTML = rgbColor;
  return rgbColor;
}

function assignSquare() {
  const randomSquare = generateRandom(6);
  document.querySelector(
    `.color${randomSquare}`
  ).style.backgroundColor = guessColor();
}
assignSquare();
function assignRandom() {
  Array(6)
    .fill(0)
    .forEach((square, index) => {
      const color = document.querySelector(`.color${index}`).style
        .backgroundColor;

      if (color === "") {
        document.querySelector(
          `.color${index}`
        ).style.backgroundColor = `rgb(${generateRandom(256)},${generateRandom(
          256
        )},${generateRandom(256)})`;
      }
    });
}

function yesOrNo(e) {
  console.log(e.style.backgroundColor);
  console.log(document.querySelector(".rgb-name").innerText);
  if (
    document.querySelector(".rgb-name").innerText === e.style.backgroundColor
  ) {
    alert("Yes");
  } else {
    alert("no");
  }
}

assignRandom();
