export function displayInfo(data){
       const weatherData = document.querySelector('.weather-container');
    //    city name and title
       const city = document.createElement('div');
            city.classList.add('city-title');
        const cityname = document.createElement('h1')
            cityname.textContent = data.resolvedAddress;
            city.appendChild(cityname);
    //    city description
        const title = document.createElement('h3');
            title.textContent = "Information";
        const info = document.createElement('p');
            info.textContent = data.description;
            city.append(title,info);
    //    city temperature
       const temp = document.createElement('div')
            temp.classList.add('city-temp');
        const temparature = document.createElement('h3')
            temparature.textContent = "Temparature";
        const tempBlock = document.createElement('p');
            tempBlock.textContent = data.currentConditions.temp;
            temp.append(temparature, tempBlock);
        weatherData.appendChild(city);
        weatherData.appendChild(temp);
}