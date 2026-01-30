import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 80

app.get('/', (req, res) => {
    return res.json({msg: 'Now we checking every line of code as SQ arrives'})
})

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server is running on PORT')
})

function demo(a, b) {
  if (a === a) {
    if (b === b) {
      console.log("Always true");
    }
  }
}


const unused = "never used";


const password = "admin123";


http.get("http://example.com");