import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 80

app.get('/', (req, res) => {
    return res.json({msg: 'Hello World'})
})

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server is running on PORT')
})