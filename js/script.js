function changeSize(){
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
    }
}

function toggleImage(imageId) {
    let image = document.getElementById(imageId);
    let isGrayscale = JSON.parse(localStorage.getItem(imageId)) || false;

    if (!isGrayscale) {
        image.style.filter = "grayscale(100%)";
        localStorage.setItem(imageId, true);
        
    } else {
        image.style.filter = "none";
        localStorage.setItem(imageId, false);
    }
}

window.onload = function () {
    let images = document.querySelectorAll('img');
    images.forEach(function(image) {
        let isGrayscale = JSON.parse(localStorage.getItem(image.id)) || false;
        if (isGrayscale) {
            image.style.filter = "grayscale(100%)";
        }
    });
}