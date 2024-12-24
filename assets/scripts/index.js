import  { hex_colors } from './colors.js';
const button = document.getElementById("btn");
const body = document.getElementById("main");
const span = document.getElementById("color-display");



button.addEventListener("click", () => {
  const color = hex_colors[Math.floor(Math.random() * hex_colors.length)];
  body.style.backgroundColor = color;
  span.innerHTML = `<h2>${color}</h2>`;
});
