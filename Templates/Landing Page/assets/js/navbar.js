
var isOpen = false;

function openNav() {
    
    const width = screen.width;
    if(width <= 1024){
        document.getElementById("mySidebar").style.width = "50%";
        document.getElementById("main").style.marginLeft = "50%";
    }else{
        document.getElementById("mySidebar").style.width = "20%";
        document.getElementById("main").style.marginLeft = "20%";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
