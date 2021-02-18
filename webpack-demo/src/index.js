import "./style.css";
import printMe, { test } from "./print.js";

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = "Hello world22";
  element.classList.add("hello");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => {
    printMe();
    // test();
  };
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
