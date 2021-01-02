export const state = () => ({
  query: '',
  items: [],
  expire: 12, // 1 = 1 hour, 12 = 12 hours,
})

export const mutations = {
  addItems(state, items) {
    state.items = items
  },
  removeItems(state) {
    state.items = []
  },
  updateQuery(state, query) {
    state.query = query
  },
}
