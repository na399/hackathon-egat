export const state = () => ({
  forecast: [],
  forecast3Days: []
})

export const mutations = {
  updateForecast: (state, payload) => {
    state.forecast = payload
  },
  updateForecast3Days: (state, payload) => {
    state.forecast3Days = payload
  }
}

export const actions = {
  async getForecast({ commit }) {
    try {
      let forecast = await fetch(
        `https://dark-sky-proxy.na399.now.sh/api/v1/weather/17.242,98.9726-minutely`
      ).then(res => res.json())

      let forecast3Days = forecast.daily.data.slice(0, 3)

      let dates = []

      for (let i = 0; i < forecast3Days.length; i++) {
        const date = convertTime(forecast3Days[i]['time'])
        const day = date.getDay()
        dates.push(date.getDate())

        forecast3Days[i]['index'] = i

        if (i == 0) {
          forecast3Days[i]['day'] = 'today'
        } else {
          forecast3Days[i]['day'] = day
        }
      }

      let forecast72H = forecast.hourly.data.slice(0, 72)

      let hourRains = {}

      dates.forEach(d => {
        hourRains[d] = []
      })

      for (let i = 0; i < forecast72H.length; i++) {
        const hourData = convertTime(forecast72H[i]['time'])
        const hour = hourData.getHours()
        const date = hourData.getDate()

        if (dates.includes(date) && 8 <= hour && hour <= 18) {
          hourRains[date].push(forecast72H[i]['precipProbability'])
        }
      }

      for (let [key, val] of Object.entries(hourRains)) {
        const count = val.length
        const rainyHours = val.filter(h => h > 0.3).length
        const score = Math.round((1 - rainyHours / count) * 10)

        const i = dates.indexOf(+key)
        forecast3Days[i]['score'] = score
      }

      commit('updateForecast', forecast)
      commit('updateForecast3Days', forecast3Days)
    } catch (err) {
      console.log(err)
    }
  }
}

function convertTime(timeInSecond) {
  const timezone = 7
  return new Date((timeInSecond + timezone * 60 * 60) * 1000)
}
