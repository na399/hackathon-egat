<template>
  <div>
    <div class="dailyForecast">
      <div v-for="day in forecast3Days" :key="day.time" class="card">
        <span class="font-medium">{{ dayNames[day.day] }}</span>
        <br />
        <span class="text-3xl">{{ weatherEmojis[day.icon] }}</span>
      </div>
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

export default {
  data() {
    return {
      dayNames: dayNames,
      weatherEmojis: weatherEmojis
    }
  },
  computed: {
    ...mapState('localStorage', ['forecast', 'forecast3Days'])
  },
  mounted() {
    this.$store.dispatch('localStorage/getForecast')
  }
}
</script>

<style scoped>
.dailyForecast {
  @apply flex my-10;
}

.card {
  @apply w-1/3 max-w-md mx-1 p-2 rounded overflow-hidden shadow bg-gray-100 text-indigo-800;
}
</style>
