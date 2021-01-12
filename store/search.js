export const state = () => ({
  query: '',
  show: false,
  items: [],
  expire: 12, // 1 = 1 hour, 12 = 12 hours,
})

export const mutations = {
  addItems(state, items) {
    state.items = items
  },
  showSearch(state) {
    state.show = true
  },
  hideSearch(state) {
    state.show = false
  },
  removeItems(state) {
    state.items = []
  },
  updateQuery(state, query) {
    state.query = query
  },
}
