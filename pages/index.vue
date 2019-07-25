<template>
  <div class="container">
    <LocationSelector />
    <WeatherForecast />
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
  @apply text-2xl text-blue-800 font-semibold;
}
</style>
