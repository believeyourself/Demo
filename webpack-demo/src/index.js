import "./style.css";
import printMe from "./print.js";

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = "Hello world22";
  element.classList.add("hello");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => {
    printMe();
    console.log(_.join(["1", "2", "3!"], " "));
    console.log(process.env.NODE_ENV);
  };
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
