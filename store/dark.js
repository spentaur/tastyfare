// TODO i dont think this is the right way to do this, store dark mode

export const state = () => ({
  enabled: false,
})

export const mutations = {
  toggle(state) {
    state.enabled = !state.enabled
  },
}
