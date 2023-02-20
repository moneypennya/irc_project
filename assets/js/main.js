function imgToGif(element){
    element.setAttribute('src','assets/images/moneypenny.gif')
}

function gifToImg(element){
    element.setAttribute('src','assets/images/mlogo.jpg')
}

function sidemenu(){
    console.log("clicked");
}

function goHome(){
    document.getElementById("mainframe").src = "frames/home.html";
    console.log("ran");
}

function goContact(){
    document.getElementById("mainframe").src = "frames/contact.html";
}

function goRental(){
    document.getElementById("mainframe").src = "frames/rental.html";
}

function goAbout(){
    document.getElementById("mainframe").src = "frames/about.html";
}
