// Selectors
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const backBtn = document.querySelector('.backBtn');
const hamBtn = document.querySelector('.ham-menu');
const currTemp = document.querySelector('.current-temp');

const inputText = document.getElementById('input-text');
const dateSpn = document.getElementById('date');
const maxTemp = document.getElementById('max-temp');
const minTemp = document.getElementById('min-temp');
const feelTemp = document.getElementById('feels-like-temp');
const status = document.getElementById('status');
const statusImg = document.getElementById('status-image');
const form = document.getElementById('form');




const weather = async () =>{

    const cityName = inputText.value;
    
    if(cityName == ""){
        alert('type the city name');
    }else{
        try{
            const api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e8b2609e592c501c762199ea9d0328fa`;

            const response = await fetch(api);
            const jsonData = await response.json();
            const data = [jsonData];
        
            currTemp.innerText = data[0].main.temp;
            dateSpn.innerText = new Date ();
        
            maxTemp.innerText = data[0].main.temp_max;
            
            minTemp.innerText = data[0].main.temp_min;
        
            feelTemp.innerText = data[0].main.feels_like;
        
            const statusData = data[0].weather[0].main;
            status.innerText = statusData;
            
            if (statusData === "Clear") {
                statusImg.innerHTML = `<img src="/images/sunny.svg" alt="">`
            }else if(statusData === "Clouds"){
                statusImg.innerHTML = `<img src="/images/storm.svg" alt="">`
            }else if(statusData === "Haze"){
                statusImg.innerHTML = `<img src="/images/haze.svg" alt="">`
            }else if(statusData === "Rain"){
                statusImg.innerHTML = `<img src="/images/umbrella.svg" alt="">`
            }
            
        }catch{
            alert('enter city name properly');
        }
    }

    




}


// Functions

const openMenu = () =>{
    overlay.classList.add('show');
    menu.classList.add('show');
}

const closeMenu = () => {
    overlay.classList.remove('show');
    menu.classList.remove('show');
}


// Event Listners
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    weather();
})
hamBtn.addEventListener('click',openMenu);
backBtn.addEventListener('click',closeMenu);





