const button = document.querySelector("button");
const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const timeline1 = document.querySelector(".timeline-1");
const timeline2 = document.querySelector(".timeline-2");
const timeline3 = document.querySelector(".timeline-3");
const outer = document.querySelector(".outer");

function timelineChange(e) {
  console.log(e);
  switch (e) {
    case "button-1": {
      button1.classList.add("click");
      button2.classList.remove("click");
      button3.classList.remove("click");
      timeline1.style.display = "block";
      timeline2.style.display = "none";
      timeline3.style.display = "none";
      break;
    }
    case "button-2": {
      button2.classList.add("click");
      button1.classList.remove("click");
      button3.classList.remove("click");
      timeline1.style.display = "none";
      timeline2.style.display = "block";
      timeline3.style.display = "none";
      break;
    }
    case "button-3": {
      button3.classList.add("click");
      button2.classList.remove("click");
      button1.classList.remove("click");
      timeline1.style.display = "none";
      timeline2.style.display = "none";
      timeline3.style.display = "block";
      break;
    }
    case "none": {
      button1.classList.add("click");
      button2.classList.remove("click");
      button3.classList.remove("click");
      timeline1.style.display = "block";
      timeline2.style.display = "none";
      timeline3.style.display = "none";
      break;
    }
  }
}
