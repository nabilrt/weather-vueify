<script setup>
import { ref, onMounted } from "vue";

const inputRef = ref(null);
const loading = ref(false);
const locationData = ref({});
const weatherData = ref({});
const error = ref("");
const city = ref("");

const fetchWeatherData = async () => {
  error.value = "";
  loading.value = true;
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city.value}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_WEATHER_API_HOST,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.status === 200) {
      locationData.value = data.location;
      weatherData.value = data.current;
      loading.value = false;
    } else {
      error.value = data.error.message;
      loading.value = false;
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  inputRef.value.focus();
});
</script>

<template>
  <div className="flex flex-col p-4 w-2/3 m-auto space-y-6">
    <LogoDetails />
    <div className="flex w-full space-x-1">
      <input
        ref="inputRef"
        type="text"
        v-model="city"
        placeholder="Type any city name..."
        class="px-6 py-4 font-semibold text-sm border border-[#41b883] bg-[#444444] rounded-full w-full white-[#fc8eac] active:border-[#41b883] text-white"
      />
      <button
        className="px-4 py-2 rounded-full font-semibold text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#444444] hover:drop-shadow-lg drop-shadow-[#5affb5]"
        @click="fetchWeatherData"
        :disabled="city === ''"
      >
        <SearchLogo />
      </button>
    </div>
    <div v-if="loading" class="items-center justify-center flex">
      <skew-loader :loading="loading" color="#5affb5" size="30px"></skew-loader>
    </div>
    <div v-else>
      <div
        v-if="error"
        class="items-center justify-center flex text-2xl text-white font-bold uppercase"
      >
        {{ error }}
      </div>
      <div v-else>
        <div
          v-if="
            Object.keys(weatherData).length !== 0 &&
            Object.keys(locationData).length !== 0
          "
        >
          <div class="flex w-full space-x-2">
            <TimeAndDate :locationData="locationData" />
            <WeatherDetails :weatherData="weatherData" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="m-auto flex items-center space-x-6 text-white font-bold text-xl hover:drop-shadow-lg drop-shadow-[#5affb5]"
    >
      <span>Made With </span>
      <img src="/vue.svg" height="100px" width="100px" />
    </div>
  </div>
</template>
