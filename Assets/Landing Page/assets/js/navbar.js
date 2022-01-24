var isOpen = false;

const btn = document.getElementById("openbtn123");

function openNav() {
  const width = screen.width;
  btn.classList.add("hide-item");
  if (width <= 1024) {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%";
  } else {
    document.getElementById("mySidebar").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  btn.classList.remove("hide-item");
}
