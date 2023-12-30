import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import LogoDetails from "./components/LogoDetails.vue";
import SearchLogo from "./components/icons/SearchLogo.vue";
import TimeAndDate from "./components/TimeAndDate.vue";
import WeatherDetails from "./components/WeatherDetails.vue";
import HumidityLogo from "./components/icons/Humidity.vue";
import Pressure from "./components/icons/Pressure.vue";
import UV from "./components/icons/UV.vue";
import WindSpeed from "./components/icons/WindSpeed.vue";
import SkewLoader from "vue-spinner/src/SkewLoader.vue";

createApp(App)
  .component("LogoDetails", LogoDetails)
  .component("SearchLogo", SearchLogo)
  .component("TimeAndDate", TimeAndDate)
  .component("WeatherDetails", WeatherDetails)
  .component("HumidityLogo", HumidityLogo)
  .component("Pressure", Pressure)
  .component("UV", UV)
  .component("WindSpeed", WindSpeed)
  .component("SkewLoader", SkewLoader)
  .mount("#app");
