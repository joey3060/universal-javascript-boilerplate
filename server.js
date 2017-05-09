import express from 'express'
import { renderToString } from 'react-dom/server';
import React from 'react'
import App from './component'

let app = express()

const PORT = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  const html = renderToString(React.createElement(App))
  console.log('html is', html);
  console.log('html type is', typeof html);
  res.send(html)
})

app.listen(PORT,() => {
  console.log('http://localhost:' + PORT);
})
