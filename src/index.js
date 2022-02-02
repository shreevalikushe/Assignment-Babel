import "./index.css";

window.addEventListener("load", () => {
  let logoDiv = document.getElementById("logo");
  let img = document.createElement("img");
  img.className = "img";
  img.src =
    "https://logos.flamingtext.com/Word-Logos/good-design-amped-logo.webp";
  logoDiv.append(img);
  let btn = document.getElementById("add");
  btn.addEventListener("click", showData);
});

let showData = () => {
  let container = document.getElementById("container");
  let innerDiv = document.createElement("div");
  innerDiv.className = "innerDiv";
  let input = document.getElementById("input").value;
  innerDiv.append(input);
  container.append(innerDiv);
};
