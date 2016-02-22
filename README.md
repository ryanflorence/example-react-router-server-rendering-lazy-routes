React Router Example: Server Rendering Lazy Routes
==================================================

React Router has two great features that seem like they might
not work well together: server side rendering and code splitting.

This minimal demo shows how to get the benefits of server rendering and
partial app loading with lazy routes and webpack's code splitting.

## Running

```
npm install
npm start
open http://localhost:5000
```

## How it works

1. Webpack 2.0.7-beta `System.import` defines code splitting points in the app.
2. We polyfill `System.import` for node to just do a normal `require`.
3. The server renders the app with `match` and the stateless
   `<RoutingContext/>`.
4. When the client JavaScript loads, we use `match` to trigger the split
   code to load before rendering. If we didn't do that, then the first
   render would be `null` and not reuse the server rendered markup.
5. We render on the client.
6. We raise our arms in the air in triumph.
