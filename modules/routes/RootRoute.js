// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../components/App'
import Index from '../components/Index'

export default {
  path: '/',
  component: App,
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [ require('./AboutRoute').default ])
    })
  },
  indexRoute: {
    component: Index
  }
}

