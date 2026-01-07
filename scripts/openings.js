const days = document.querySelector(".days");













const createDays = [
    {
        day: "Mandag",
        time: "Lukket",
        time: "09.00 - 17.30",
    },
    {
        day: "Tirsdag",
        time: "Lukket",
        time: "09.00 - 17.30",
    },
    {
        day: "Onsdag",
        time: "Lukket",
        time: "09.00 - 17.30",
    },
    {
        day: "Torsdag",
        time: "Lukket",
        time: "09.00 - 17.30",
    },
    {
        day: "Fredag",
        time: "Lukket",
        time: "09.00 - 17.30",
    },
    {
        day: "Lørdag",
        time: "Lukket",
        time: "09.00 - 15.00",
    },
    {
        day: "Søndag",
        time: "Lukket",
    }
]




createDays.forEach(day => {


    if(day.time === "Lukket"){
            days.innerHTML += `
             <div class="hours">
                <div class="hoursLeft">
                    <div style="background-color: rgba(255, 23, 23, 0.9)" class="circle"></div>
                    <div class="day">${day.day}</div>
                </div>
                <div class="hoursRight">
                    <p>${day.time}</p>
                </div>
            </div>
`
    } else {
            days.innerHTML += `
             <div class="hours">
                <div class="hoursLeft">
                    <div class="circle"></div>
                    <div class="day">${day.day}</div>
                </div>
                <div class="hoursRight">
                    <p>${day.time}</p>
                </div>
            </div>
`
    }
  
});