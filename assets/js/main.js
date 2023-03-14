window.onload = start;
var selected;
var timeoutId;
var windowWidth;
function start(){
    selected = document.getElementById("home");
    if(selected){
        selected.setAttribute('style','background: rgba(33,37,41); color: white !important;');
    }
    windowWidth = window.innerWidth;
    timeoutId=null;
    iframe = document.getElementById("mainframe");
    
    iframe.addEventListener("load",resize);
    resize();
}

function resizeCheck() {
    resize();
}
  
function debounce(func, wait) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, wait);
}
  
window.addEventListener('resize', () => {
    debounce(resizeCheck, 500);
});


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
    if(element){
        document.getElementById("mainframe").src = "frames/home.html"; 
        element.setAttribute('style','background: rgba(33,37,41); color: white !important;');
        if(selected!=element){
            selected.setAttribute('style','');
            selected=element;
        }
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
