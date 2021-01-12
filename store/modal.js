export const state = () => ({
  open: false,
  data: {},
})

export const mutations = {
  open(state, data) {
    state.open = true
    state.data = data
  },
  removeData(state) {
    state.data = {}
  },
  close(state) {
    state.open = false
  },
}
