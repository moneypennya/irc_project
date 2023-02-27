window.onload = start;
var selected;
function start(){
    selected = document.getElementById("home");
    selected.setAttribute('style','background: rgba(33,37,41); color: white !important;');
    iframe = document.getElementById("mainframe");
    iframe.addEventListener("load",resize);
    resize();
}
    
    // Adjusting the iframe height onload event
function resize(){
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}

function imgToGif(element){
    element.setAttribute('src','assets/images/moneypenny.gif')
}

function gifToImg(element){
    element.setAttribute('src','assets/images/mlogo.jpg')
}

function sidemenu(){
    console.log("clicked");
}

function goHome(element){
    document.getElementById("mainframe").src = "frames/home.html"; 
    element.setAttribute('style','background: rgba(33,37,41); color: white !important;');
    if(selected!=element){
        selected.setAttribute('style','');
        selected=element;
    }
}

function goContact(element){
    document.getElementById("mainframe").src = "frames/contact.html";
    element.setAttribute('style','background: rgba(33,37,41); color: white !important;');
    if(selected!=element){
        selected.setAttribute('style','');
        selected=element;
    }
}

function goRental(element){
    document.getElementById("mainframe").src = "frames/rental.html";
    element.setAttribute('style','background: rgba(33,37,41); color: white !important;');
    if(selected!=element){
        selected.setAttribute('style','');
        selected=element;
    }
}

function goAbout(element){
    document.getElementById("mainframe").src = "frames/about.html";
    element.setAttribute('style','background: rgba(33,37,41); color: white !important;');
    if(selected!=element){
        selected.setAttribute('style','');
        selected=element;
    }
}
