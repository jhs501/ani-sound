const express = require('express')
const app = express()
const port = 3008

app.get('/', (req, res) => {
  res.send('Hello World536')
})

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q.q)
    console.log(q.name)

    res.json({'userid' :q.name})
  })

app.get('/dog', (req, res) => {
    res.send('<h1>강아지<h1>')
  })

app.get('/dog22', (req, res) => {
    res.send({'sound' :'멍멍'})
  })

app.get('/cat', (req, res) => {
  res.send('고양이')
})


app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})