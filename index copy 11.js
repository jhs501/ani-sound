const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World535')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    console.log(name)

    res.json({'sound' : '야옹'})
  })

app.get('/cat', (req, res) => {
  res.send('고양이')
})


app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})