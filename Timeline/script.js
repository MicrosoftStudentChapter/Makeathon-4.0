const button = document.querySelector("button");
const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const outer = document.querySelector(".outer");

function timelineChange() {
  console.log(button.class);
  switch (button.class) {
    case "button-1":
      setAttribute("button-1", "button.click");
      box1.style.display = "flex";
      box2.style.display = "none";
      box3.style.display = "none";
      break;
    case "button-2":
      button2.classList.add("click");
      box1.style.display = "none";
      box2.style.display = "flex";
      box3.style.display = "none";
      break;
    case "button-3":
      button3.addClass("click");
      box1.style.display = "none";
      box2.style.display = "none";
      box3.style.display = "flex";
      break;
    case "none":
      box1.style.display = "flex";
      box2.style.display = "none";
      box3.style.display = "none";
      break;
  }
}
