const express = require('express')
const app = express()
const PORT = 8000

const albums = {
    'turning on': {
        'releaseYear': 2009,
        'trackAmount': 8,
        'longestSong': 'Turning On',
        'shortestSong': 'Old Street',
        'songwriters' : 'Dylan Baldi',
        'image': 'https://i.discogs.com/467eA8Pbz5U7T8CGj1Y3vuPLQM9HRrlVfv1bznqtGZ4/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyOTcx/ODItMTI5NjA5MzY4/MC5qcGVn.jpeg'
    },
    'cloud nothings': {
        'releaseYear': 2011,
        'trackAmount': 8,
        'longestSong': 'Understand at All',
        'shortestSong': 'Heartbeat' ,
        'songwriters' : 'Dylan Baldi',
        'image': 'https://i.discogs.com/7Quc8mFNY_5cyKJTrd6QlJYCNhIN68Qg6AMvOY3TZLs/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzODY1/OTMtMTYxMzgyMTQy/NS03ODg0LmpwZWc.jpeg'
    },
    'attack on memory': {
        'releaseYear': 2012,
        'trackAmount': 8,
        'longestSong':'Wasted Days',
        'shortestSong': 'Cut You' ,
        'songwriters' : 'Dylan Baldi',
        'image': 'https://i.discogs.com/5-GFqu1E3l8YfC4yA9p_il1NqUgThvd76ScZlTlpx4c/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2OTU2/MzAtMTQ0NDcyMzU2/NC05NTM4LmpwZWc.jpeg'
    },
    'here and nowhere else': {
        'releaseYear': 2014,
        'trackAmount': 8,
        'longestSong': 'Pattern Walks',
        'shortestSong': 'Psychic Trauma',
        'songwriters' : 'Dylan Baldi',
        'image': 'https://i.discogs.com/OHAR8I98H7xmQAjAywLoTQ05cxUfPiO4FxnfG7tbtrE/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU1Mzg1/MjMtMTQ5MzQ4OTEw/OC03Njg1LmpwZWc.jpeg'
    },
    'life without sound': {
        'releaseYear': 2016,
        'trackAmount': 9,
        'longestSong': 'Realize My Fate',
        'shortestSong': 'Internal World' ,
        'songwriters' : 'Dylan Baldi',
        'image': 'https://i.discogs.com/AK-WqFibOj62BcaUdzwmwsW6viDuPn-CK1h8mtNU8dc/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTk3MTM4/NzMtMTQ4NTE5NzA4/Mi0xNjkxLmpwZWc.jpeg'
    },
    'last building burning': {
        'releaseYear': 2018,
        'trackAmount': 8,
        'longestSong': 'Dissolution',
        'shortestSong': 'On an Edge',
        'songwriters' : 'Dylan Baldi',
        'image': 'https://i.discogs.com/hINGnLD0Ep7X1ijls-4rFBd11-edqIegIEnqbqEe0R4/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNzA0/MDQyLTE1NDAzODc5/NjItMTAxOC5qcGVn.jpeg'
    },
    'the shadow i remember': {
        'releaseYear': 2021,
        'trackAmount': 9,
        'longestSong': 'Oslo',
        'shortestSong': 'It\'s Love',
        'songwriters' : 'Dylan Baldi',
        'image': 'https://i.discogs.com/gcvDVm5DEVF-AYfJqcnrHqxc-qSz34vTS33_xGnC5jI/rs:fill/g:sm/q:40/h:100/w:100/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NTI3/Mjc2LTE2MTM5NDY2/MjItOTMzMS5qcGVn.jpeg'
    },
    'unknown': {
        'releaseYear': 'missingno',
        'trackAmount': 'missingno',
        'longestSong': 'unknown',
        'shortestSong': 'unknown',
        'songwriters' : 'unknown',
        'image': ''
    }
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:albumName', (req,res) => {
    let albumsName = req.params.albumName.toLowerCase()
    if (albums[albumsName]){
        return res.json(albums[albumsName])
    } else {
        return res.json(albums['unknown'])
    }
})

app.get('/main.js', (req,res) => {
    res.sendFile(__dirname + '/main.js')
})

app.listen(process.env.PORT || PORT, (req,res) => {
    console.log('I\'m listening...')
})