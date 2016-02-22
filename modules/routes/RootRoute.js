// polyfill webpack System.import on NodeJS
if (typeof System === 'undefined') {
  var System = {};
  if (typeof System.import !== 'function') {
    System.import = (d) => {
      let module = require(d);
      return Promise.resolve(module);
    }
  }
}

import App from '../components/App'
import Index from '../components/Index'
import {Promise} from 'es6-promise';

export default {
  path: '/',
  component: App,
  getChildRoutes(location, cb) {
    Promise.all([
      System.import('./AboutRoute') //webpack 2.0 https://gist.github.com/sokra/27b24881210b56bbaff7
    ]).then(function(modules) {
      let module = modules.shift();
      cb(null, [
        module.default
      ])
    }).catch(err => {
      console.error("getChildRoutes: " + err + " " + err.stack);
    });
  },
  indexRoute: {
    component: Index
  }
}
