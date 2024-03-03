const express = require('express')

app = express()

app.get('/', (req, res) => {
return res.status(200).json({message: 'SERVER ESCUTANDO'})
})

app.listen(3333)