const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'the east',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'steepTimeSeconds': 'unknown',
        'caffinated': 'unknown',
        'flavor': 'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
}) 

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if (tea[teaName] ){
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }
    
})

app.listen(8000, ()=> {
    console.log(`The server is running on port ${PORT}!`)
})