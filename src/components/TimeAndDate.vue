<script setup>
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const formattedDate = {
    weekday: date.toLocaleString("en-US", { weekday: "long" }),
    dayMonth: `${date.getDate()} ${date.toLocaleString("en-US", {
      month: "short",
    })}`,
    time: date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    }),
  };

  return formattedDate;
}
defineProps({
  locationData: {
    name: String,
    localtime: String,
  },
});
</script>

<template>
  <div
    className="w-1/3 bg-[#444444] rounded-xl text-white shadow-sm shadow-[#41b883]  flex justify-center items-center border-1 border-gray-800"
  >
    <div className="flex flex-col  items-center  space-y-3">
      <div
        class="font-bold"
        :class="{
          'text-2xl': locationData.name.length <= 10,
          'text-xl':
            locationData.name.length > 10 && locationData.name.length <= 15,
          'text-lg':
            locationData.name.length > 15 && locationData.name.length <= 20,
          'text-base': locationData.name.length > 20,
        }"
      >
        {{ locationData.name }}
      </div>
      <div className="flex flex-col space-y-1 text-center mt-7">
        <div className="font-semibold text-6xl">
          {{ formatTimestamp(locationData.localtime).time }}
        </div>
        <div className="font-semibold text-lg">
          {{ formatTimestamp(locationData.localtime).weekday }},{{ " " }}
          {{ formatTimestamp(locationData.localtime).dayMonth }}
        </div>
      </div>
    </div>
  </div>
</template>
