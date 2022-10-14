export const state = () => ({
  data: [],
  baseUrl: 'https://helpers.arjos.com.br/',
  loading: false,
  menu_sidebar: {
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
    ],
  }
})

export const mutations = {
  SET_API_INFORMATION(state, payload) {
    state.data = payload;
    // console.log(state.data, payload);
  },
  SET_LOADING(state, payload) {
    state.data = payload;
    // console.log(state.data, payload);
  },
  SET_MENU(state, payload) {
    // state.menu_sidebar.drawer = payload;
    // console.log(state.data, payload);
  },
}

export const getters = {}

export const actions = {
  getApiInformation(context, payload){
    this.$axios.get("/").then(response => {
      context.commit('SET_API_INFORMATION', response.data)
      console.log('SET_API_INFORMATION', response.data)
    })
  }
}
