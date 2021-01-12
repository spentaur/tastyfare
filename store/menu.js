export const state = () => ({
  open: false,
  direction: 'left',
  name: 'main',
})

export const mutations = {
  open(state, [direction, name] = [state.direction, state.name]) {
    state.open = true
    state.name = name
    state.direction = direction
  },
  close(state) {
    state.open = false
  },
}
