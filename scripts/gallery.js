const galleryContent = document.querySelector(".content")


const pictures = [
    {
        url: "gallery-images/kunde6.jpg",
        alt: "Skin fade klipning hos det gyldne snit / dgsbarber"
    },
    {
        url: "gallery-images/kunde5.jpg",
        alt: "Klassisk klipning hos det gyldne snit / dgsbarber"
    },
    {
        url: "gallery-images/kunde4.jpg",
        alt: "Skin fade klipning hos det gyldne snit / dgsbarber"
    },
    {
        url: "gallery-images/kunde1.jpg",
        alt: "Klassisk klipning hos det gyldne snit / dgsbarber"
    },
    {
        url: "gallery-images/kunde3.jpg",
        alt: "Klassisk klipning hos det gyldne snit / dgsbarber"
    },
    {
        url: "gallery-images/kunde2.jpg",
        alt: "Klassisk klipning hos det gyldne snit / dgsbarber"
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
