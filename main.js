function renderState(state) {
  var html = '<p>' + state.something + '</p>'
  document.getElementById('root').innerHTML = html
}

function createStore() {
  var state = {
    something: "Olá mundo"
  }
  renderState(state)

  return {
    getState: function () {
      return state
    },
    setState: function (newState) {
      state = newState
      renderState(state)
    }
  }
}

var store = createStore()
window.setTimeout(function () {
  store.setState({ something: "Adeus mundo" })
}, 1000)
