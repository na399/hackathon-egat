<template>
  <div>
    <div class="currentWeather" v-if="forecast.currently">
      <span class="text-lg font-medium">Current weather</span>
      <br />
      <span
        class="text-blue-700 text-3xl"
      >{{ Math.round(forecast.currently.apparentTemperature) }}°C {{ weatherEmojis[forecast.currently['icon']] }}</span>
      <br />
      <span class="text-blue-700 text-xl">{{ forecast.currently.summary }}</span>
    </div>
    <div class="dailyForecast">
      <div v-for="day in forecast3Days" :key="day.time" class="card">
        <span class="font-medium">{{ dayNames[day.day] }}</span>
        <br />
        <span class="text-3xl">{{ weatherEmojis[day.icon] }}</span>
        <br />
        <span class="text-sm text-gray-700">{{ day.summary }}</span>
        <br />
        <br />
        <span class="text-sm text-gray-500">Outdoor rating</span>
        <br />
        <span class="text-3xl">{{ scoreEmojis[day.score] }}</span>
        <br />
        <span class="bestday" v-if="day.index == highestScoreDay">✨</span>
        <nuxt-link :to="`/listing/bhumibol/${day.score}`" v-if="day.score >= 0">
          <div class="btn btn-blue">👀</div>
        </nuxt-link>
      </div>
    </div>
    <div class="text-gray-500">
      <nuxt-link to="/listing/bhumibol/10">
        <div class="btn btn-blue">👀 View All Attractions</div>
      </nuxt-link>
      <span>Live weather forecast by</span>
      <br />
      <a
        class="font-medium"
        href="https://darksky.net/"
        target="_blank"
        rel="noopener noreferrer"
      >Dark Sky</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const dayNames = {
  0: 'SUN',
  1: 'MON',
  2: 'TUE',
  3: 'WED',
  4: 'THU',
  5: 'FRI',
  6: 'SAT',
  today: 'Today'
}

const weatherEmojis = {
  clear: '🌞',
  rain: '🌧',
  snow: '❄️',
  sleet: '🌨',
  wind: '💨',
  fog: '🌫',
  cloudy: '☁️',
  'partly-cloudy': '🌤'
}

const scoreEmojis = {
  NaN: '',
  0: '😭',
  1: '😭',
  2: '😢',
  3: '😢',
  4: '🙁',
  5: '🙁',
  6: '🙂',
  7: '🙂',
  8: '😄',
  9: '😄',
  10: '😍'
}

export default {
  data() {
    return {
      dayNames: dayNames,
      weatherEmojis: weatherEmojis,
      scoreEmojis: scoreEmojis
    }
  },
  computed: {
    ...mapState('localStorage', ['forecast', 'forecast3Days']),
    highestScoreDay() {
      const scores = this.forecast3Days.map(d => (d.score >= 0 ? d.score : 0))
      return scores.indexOf(Math.max(...scores))
    }
  },
  mounted() {
    this.$store.dispatch('localStorage/getForecast')
  }
}
</script>

<style scoped>
.currentWeather {
  @apply my-10;
}

.dailyForecast {
  @apply flex my-10;
}

.card {
  @apply relative w-1/3 max-w-md mx-1 p-2 rounded shadow bg-gray-100 text-indigo-800;
}

.bestday {
  @apply absolute text-4xl;
  top: -15px;
  right: -5px;
}

.btn {
  @apply w-1/2 my-3 mx-auto font-bold py-2 px-2 rounded-full;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
