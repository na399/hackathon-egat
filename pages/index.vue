<template>
  <div class="container">
    <h1 class="title">Bhumibol Dam</h1>
    <WeatherForecast/>
  </div>
</template>

<script>
import WeatherForecast from '~/components/WeatherForecast.vue'

export default {
  components: {
    WeatherForecast
  },
}
</script>

<style scoped>
.container {
  @apply max-w-xl p-5  mx-auto text-center;
}

.title {
  @apply text-2xl text-blue-800 font-semibold
}
</style>
