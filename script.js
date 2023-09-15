var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/sun.png";
    }
    else{
    icon.src = "img/moon.png";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("displayPDFBtn");
    
    if (btn) {  // check if the element exists
        btn.addEventListener("click", function() {
            const pdfUrl = "NewRESUME.pdf";
            window.open(pdfUrl, '_blank');
        });
    } else {
        console.error("The element with ID 'displayPDFBtn' was not found.");
    }
});
