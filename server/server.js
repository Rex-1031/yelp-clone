require('dotenv').config()
const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(express.json())

//Get all restaurants
app.get('/api/v1/restaurants', (req, res)=>{
    console.log('route handler ran')
    res.status(200).json({
        'status': 'success',
        data: {
            'restaurant': [
                'cleveland vegan',
                'melt'
            ]
        }
        
    })
})

//get a single restaurant
app.get('/api/v1/restaurants/:id', (req, res) =>{
    console.log(req.params)
    res.status(200).json({
        status: "success",
        data: {
            restaurant: 'boss chicken'
        }
    })
})

//Create a restaurant
app.post('/api/v1/restaurants', (req, res)=>{
    console.log(req.body)
    res.status(201).json({
        status: "success",
        data: {
            restaurant: 'boss chicken'
        }
    })
})

//Update restaurants
app.put("/api/v1/restaurants/:id", (req, res)=>{
    console.log(req.params.id)
    console.log(req.body)
    res.status(200).json({
        status: "success",
        data: {
            restaurant: 'boss chicken'
        }
    })
})

//Delete restaurant
app.delete("/api/v1/restaurants/:id", (req, res) =>{
    res.status(204).json({
        status: 'restaurant deleted'
    })
})


const PORT  = process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log(`Server listening on port ${PORT}`)
})