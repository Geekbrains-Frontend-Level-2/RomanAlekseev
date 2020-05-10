const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const publicPath = './public'
    console.log(req.url)

    const body = req.url === `/css/style.css`
      ? fs.readFileSync(`${publicPath}/css/style.css`, 'utf8')
      : fs.readFileSync(`${publicPath}/index.html`,'utf8')
      res.end(body)

    const js = req.url === `/script.js`
      ? fs.readFileSync(`${publicPath}/script.html`,'utf8')
      : fs.readFileSync(`${publicPath}/index.html`,'utf8')
      res.end(js)

})

const port = process.env.PORT || 3000
server.listen(port)
console.log('Server started on port: ', port)

const text = fs.readFileSync('script.js', 'utf8')
console.log(text)
const now = new Date().toLocaleString()
console.log(now)