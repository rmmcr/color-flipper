const colors = [
  {
    name: "Red",
    hex: "#ff0000",
  },
  {
    name: "Green",
    hex: "#008000",
  },
  {
    name: "Yellow",
    hex: "#ffff00",
  },
  {
    name: "Blue",
    hex: "#0000ff",
  },
  {
    name: "Pink",
    hex: "#ffc0cb",
  },
  {
    name: "Gray",
    hex: "#808080",
  },
  {
    name: "Brown",
    hex: "#a52a2a",
  },
  {
    name: "Orange",
    hex: "#ffa500",
  },
  {
    name: "Purple",
    hex: "#800080",
  },
];
const button = document.getElementById("change-btn");
const main = document.getElementById("main");
const color = document.getElementById("color-name");
let randomColor;
let tempColor;
let type = "name";
let simple = document.getElementById("simple").checked;
let hex = document.getElementById("hex").checked;

randomColor = colors[Math.round(Math.random() * 8)];
main.style.backgroundColor = randomColor.name;
tempColor = randomColor;
color.innerText = tempColor.name;

document.getElementById("simple").addEventListener("click", () => {
  type = "name";
  color.innerText = tempColor.name;
});

document.getElementById("hex").addEventListener("click", () => {
  type = "hex";
  color.innerText = tempColor.hex;
});

button.addEventListener("click", () => {
  randomColor = colors[Math.round(Math.random() * 8)];

  while (true) {
    if (randomColor == tempColor) {
      randomColor = colors[Math.round(Math.random() * 8)];
    } else {
      main.style.backgroundColor = randomColor.name;
      tempColor = randomColor;

      if (type == "name") color.innerText = tempColor.name;
      else {
        color.innerText = tempColor.hex;
      }
      break;
    }
  }
});
