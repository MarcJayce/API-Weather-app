import css from "./index.css";
import { apiHandler } from "./apiHandler.js";

const api = new apiHandler();
const SEARCH_BAR = document.querySelector("#Search");

SEARCH_BAR.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        try {
            const WEATHER_DATA = await api.fetchLocation(SEARCH_BAR.value);
            console.log(WEATHER_DATA);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
  });