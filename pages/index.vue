<template>
  <div class="container">
    <div class="title">
      <span class="text-3xl">⚡️</span>
      <h1 class="font-bold text-2xl">WATT</h1>
      <h2 class="font-light text-xl">Weather-Assisted Travel Tailor</h2>
      <div class="w-full h-1 rounded-full bg-gray-200 my-4"></div>
    </div>

    <LocationSelector />

    <WeatherForecast />

    <div class="text-sm text-gray-500 mx-auto my-10">
      <p class="font-medium">Did you know?</p>
      <p>Watt is the SI unit of power, equivalent to one joule per second, corresponding to the rate of consumption of energy in an electric circuit where the potential difference is one volt and the current one ampere.</p>
      <p>
        As of June 2019, the combined power production and supply of EGAT was 42,924.50 megawatts.
        <a
          href="http://www.egat.co.th/index.php?option=com_content&view=article&layout=edit&id=80&Itemid=116"
          target="_blank"
          rel="noopener noreferrer"
        >[source]</a>
      </p>
    </div>
  </div>
</template>

<script>
import WeatherForecast from '~/components/WeatherForecast.vue'
import LocationSelector from '~/components/LocationSelector.vue'

export default {
  components: {
    WeatherForecast,
    LocationSelector
  }
}
</script>

<style scoped>
.container {
  @apply max-w-xl p-5  mx-auto text-center;
}

.title {
  @apply text-blue-800 my-5;
}
</style>
