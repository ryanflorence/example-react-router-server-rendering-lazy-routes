import About from '../components/About'

export default {
  path: 'about',
  component: About,
  onEnter: function enter(nextState, replaceState, callback) {
      setTimeout(callback, 1000);
  },
}
