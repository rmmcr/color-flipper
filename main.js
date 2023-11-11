const colors = [
  {
    name: "red",
    hex: "#ff0000",
  },
  {
    name: "green",
    hex: "#008000",
  },
  {
    name: "yellow",
    hex: "#ffff00",
  },
  {
    name: "blue",
    hex: "#0000ff",
  },
  {
    name: "pink",
    hex: "#ffc0cb",
  },
  {
    name: "gray",
    hex: "#808080",
  },
  {
    name: "brown",
    hex: "#a52a2a",
  },
  {
    name: "orange",
    hex: "#ffa500",
  },
  {
    name: "purple",
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
