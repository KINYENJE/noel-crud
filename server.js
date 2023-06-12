const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 8000

app.use(cors())


const rappers = {
    '21 savage' : {
    name: '21 Savage',
    age: 28,
    occupation: 'rapper',
    netWorth: 12000000
    },
    'chance the rapper' : {
    name: 'Chance The Rapper',
    age: 27,
    occupation: 'rapper',
    netWorth: 5000000
    },
    'kodak black' : {
    name: 'Kodak Black',
    age: 23,
    occupation: 'rapper',
    netWorth: 1500000    
    },
    'kinyenje' : {
        name: 'Kinyenje',
        age: 23,
        occupation: 'software developer',
        netWorth: 1500000000000 
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    if (rappers[rapperName]) /* we use the square brackets instead of dot because of the spaces in the rapper names */ 
    {
        res.json(rappers[rapperName])
    }else
        res.json(rappers.kinyenje) /** kinyenje is one word hence can be refered by use of dot notation  */
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`) 
})