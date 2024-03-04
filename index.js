const express = require('express')

app = express()

const PORT = 3333

app.get('/', (req, res) => {
return res.status(200).json({message: 'Eu amo a Cecilia De Lana'})
})

app.listen(PORT, ()=>{
    console.log('SERVER LIGADO')
})