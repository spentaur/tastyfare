export const state = () => ({
  items: [],
  expire: 12, // 1 = 1 hour, 12 = 12 hours,
})

export const mutations = {
  add(state, item) {
    state.items.push(item)
  },
  remove(state, { item }) {
    state.items.splice(state.items.indexOf(item), 1)
  },
  empty(state) {
    state.items = []
  },
}
