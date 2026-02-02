const services = document.querySelector(".services")


const createServices = [
    {
        service: "Herreklip",
        description: "Inkluderer styling af hår med voks",
        price: 200
    },
    {
        service: "Herreklip + Skægtrimning",
        description: "Inkluderer styling af hår med voks & barbering af kanter med ragekniv",
        price: 300
    },
    {
        service: "Pensionistklip",
        description: "Inkluderer styling af hår med voks",
        price: 150
    },
    {
        service: "Pensionistklip + Skægtrimning",
        description: "Inkluderer styling af hår med voks & barbering af kanter med ragekniv",
        price: 250
    },
    {
        service: "Fade",
        description: "Inkluderer styling af hår med voks",
        price: 250
    },
    {
        service: "Fade + Skægtrimning",
        description: "Inkluderer styling af hår med voks & barbering af kanter med ragekniv",
        price: 350
    },
    {
        service: "Skægtrimning",
        description: "Inkluderer barbering af kanter med ragekniv",
        price: 150
    },
    {
        service: "Vask af hår",
        description: "Inkluderer styling af hår med voks",
        price: 75
    }
]




createServices.forEach(service => {
    services.innerHTML += `
            <div class="cut">
                <p>${service.service}</p>
                <p>${service.description}</p>
                <p>${service.price},-</p>
            </div>
    `
    
});



