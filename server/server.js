require('dotenv').config()
const express = require('express');

const app = express();

app.get('/restaurants')

const PORT  = process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log(`Server listening on port ${PORT}`)
})