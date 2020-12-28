export const state = () => ({
  open: false,
  direction: 'left',
  name: 'main',
})

export const mutations = {
  toggle(state, [direction, name] = [state.direction, state.name]) {
    state.open = !state.open
    state.name = name
    state.direction = direction
  },
}
