function openNav() {

    document.getElementById("bars-icon").classList.toggle("hidden");
    
    // DOM styling
    document.getElementById("Navbar").style.width = "250px";
    document.getElementById("Nav-logo").style.marginLeft = "250px";
    document.getElementById("About_Section").style.marginLeft = "250px";
    document.getElementById("footer").style.marginLeft = "250px";

    const openToggle = document.getElementById("open-toggle");

    if(openToggle.style.display == "none") {
        openToggle.style.display == "block";
    } 
    else {
        openToggle.style.display == "none"; 
    }
    
}

function closeNav() {
    document.getElementById("Navbar").style.width = "0";
    document.getElementById("Nav-logo").style.marginLeft = "0";
}


