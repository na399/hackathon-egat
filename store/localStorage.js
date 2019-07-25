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

      const dayNames = ['Today', 'Tomorrow', 'Day after Tomorrow']
      for (let i = 0; i < forecast3Days.length; i++) {
        forecast3Days[i]['day'] = dayNames[i]
      }

      commit('updateForecast', forecast)
      commit('updateForecast3Days', forecast3Days)
    } catch (err) {
      console.log(err)
    }
  }
}
