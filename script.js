function OpenNav() {
    let element =document.getElementById("mobile-nav");
    if(element.style.display === "none")
    {
        document.getElementById("mobile-nav").style.display = "flex";
    }
    else
    {
       element.style.display = "none";
    }
}