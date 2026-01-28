import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 80

app.get('/', (req, res) => {
    return res.json({msg: 'Lets eat the whole CICD'})
})

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server is running on PORT')
})