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

      for (let i = 0; i < forecast3Days.length; i++) {
        if (i == 0) {
          forecast3Days[i]['day'] = 'today'
        } else {
          const date = new Date((forecast3Days[i]['time'] + (7 * 60 * 60)) * 1000)
          const day = date.getDay(date)
          forecast3Days[i]['day'] = day
        }
      }

      commit('updateForecast', forecast)
      commit('updateForecast3Days', forecast3Days)
    } catch (err) {
      console.log(err)
    }
  }
}
