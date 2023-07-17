const express = require('express')
var cors = require('cors')
const app = express()
const port = 4002

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World555')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if(name == "dog") {
        res.json({'sound': '멍멍'})
    } else if(name == "cat") {
        res.json({'sound': '야옹','img':'https://www.thesprucepets.com/thmb/AyzHgPQM_X8OKhXEd8XTVIa-UT0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg'})
    } else if(name == "pig") {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': '알수없음'})
    }
})


app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})