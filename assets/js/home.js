window.onload = start;
var windowWidth;

function start(){
    windowWidth = window.innerWidth;
    timeoutId=null;
    debounce(facebookCheck, 250);
}


function facebookCheck() {
    windowWidth = window.innerWidth;
    const faceframe = document.getElementById("faceframe");
    if(faceframe){
        if(windowWidth<660){
            if(faceframe.width!=250){
                faceframe.src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100068752436036&tabs=timeline&width=250&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
                document.getElementById("faceframe").width=250;
            }
        }else{
            if(faceframe.width!=500){
                faceframe.src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100068752436036&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
                faceframe.width=500;
            }
        }
    }
}
  
function debounce(func, wait) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, wait);
}
  
window.addEventListener('resize', () => {
    debounce(facebookCheck, 500);
});