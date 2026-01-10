const galleryContent = document.querySelector(".content")


const pictures = [
    {
        url: "gallery-images/kunde4.jpg",
        alt: "Skin fade klipning"
    },
    {
        url: "gallery-images/kunde1.jpg",
        alt: "Klassisk klipning"
    },
    {
        url: "gallery-images/kunde3.jpg",
        alt: "Klassisk klipning"
    },
    {
        url: "gallery-images/kunde2.jpg",
        alt: "Klassisk klipning"
    },
  

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
