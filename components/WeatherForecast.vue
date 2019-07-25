<template>
  <div>
    <div class="dailyForecast">
      <div v-for="day in forecast3Days" :key="day.time" class="w-32">
        <span class="font-medium">{{ day.day }}</span>
        <br />
        {{ day.icon }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
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
  @apply flex m-10;
}

.dailyForecast * {
  @apply flex-grow;
}
</style>
