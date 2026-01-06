const galleryContent = document.querySelector(".content")


const pictures = [
/*     {
        url: "gallery-images/fade.jpg",
        alt: "skin fade"
    }, */
  

]




pictures.forEach(picture => {
    galleryContent.innerHTML += `
    <img src="${picture.url}" alt="${picture.alt}">
    
    `

});

window.onload = () => {
    const gallery = document.querySelector(".gallery")

    if(pictures.length <= 0){
        gallery.style.display = "none";
    }
};
