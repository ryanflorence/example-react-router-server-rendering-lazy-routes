import zlib from 'zlib'

export function writeError(msg, res) {
  res.writeHead(500, { 'Content-Type': 'text/html' })
  res.write('ERROR!')
  res.end()
}

export function redirect(location, res) {
  res.writeHead(303, { 'Location': location })
  res.end()
}

export function writeNotFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/html' })
  res.write('Not Found')
  res.end()
}

export function write(string, type, res) {
  zlib.gzip(string, (err, result) => {
    res.writeHead(200, {
      'Content-Length': result.length,
      'Content-Type': type,
      'Content-Encoding': 'gzip'
    })
    res.write(result)
    res.end()
  });
}

export function createPage(html) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>My Universal App</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="/__build__/main.js"></script>
    </body>
  </html>
  `
}

