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
        'image': '/images/turningOn.jpeg'
    },
    'cloud nothings': {
        'releaseYear': 2011,
        'trackAmount': 8,
        'longestSong': 'Understand at All',
        'shortestSong': 'Heartbeat' ,
        'songwriters' : 'Dylan Baldi',
        'image': '/images/cloudNothings.jpeg'
    },
    'attack on memory': {
        'releaseYear': 2012,
        'trackAmount': 8,
        'longestSong':'Wasted Days',
        'shortestSong': 'Cut You' ,
        'songwriters' : 'Dylan Baldi',
        'image': '/images/attackOnMemory.jpeg'
    },
    'here and nowhere else': {
        'releaseYear': 2014,
        'trackAmount': 8,
        'longestSong': 'Pattern Walks',
        'shortestSong': 'Psychic Trauma',
        'songwriters' : 'Dylan Baldi',
        'image': '/images/hereAndNowhereElse.jpeg'
    },
    'life without sound': {
        'releaseYear': 2016,
        'trackAmount': 9,
        'longestSong': 'Realize My Fate',
        'shortestSong': 'Internal World' ,
        'songwriters' : 'Dylan Baldi',
        'image': '/images/lifeWithoutSound.jpeg'
    },
    'last building burning': {
        'releaseYear': 2017,
        'trackAmount': 8,
        'longestSong': 'Dissolution',
        'shortestSong': 'On an Edge',
        'songwriters' : 'Dylan Baldi',
        'image': '/images/lastBuildingBurning.jpeg'
    },
    'the shadow i remember': {
        'releaseYear': 2021,
        'trackAmount': 9,
        'longestSong': 'Oslo',
        'shortestSong': 'It\'s Love',
        'songwriters' : 'Dylan Baldi',
        'image': __dirname + '/images/theShadowIRemember.jpeg'
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