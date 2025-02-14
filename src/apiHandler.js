import {displayInfo} from "./displayInfo.js";

export class apiHandler{
    constructor(){
        this.weatherApi = "QXUZTUJWY6B4HAVT4YS6WWPD3";
    }

    async fetchLocation(location){
        const apiReady = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${this.weatherApi}`;

        try {
            const response = await fetch(apiReady, { mode: 'cors' });
            if (!response.ok) {
                throw new Error('Network response was not ok ');
              }
            const data = await response.json();
            displayInfo(data);
            return data;

        } catch (error) {
            console.error('Error fetching location data:', error);
            throw error;
        }   
    } 

    
}

