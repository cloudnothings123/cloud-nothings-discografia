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
        'image': 'https://f4.bcbits.com/img/a3087574891_10.jpg'
    },
    'cloud nothings': {
        'releaseYear': 2011,
        'trackAmount': 8,
        'longestSong': 'Understand at All',
        'shortestSong': 'Heartbeat' ,
        'songwriters' : 'Dylan Baldi',
        'image': 'https://m.media-amazon.com/images/I/51xv-Ah9KHL.jpg'
    },
    'attack on memory': {
        'releaseYear': 2012,
        'trackAmount': 8,
        'longestSong':'Wasted Days',
        'shortestSong': 'Cut You' ,
        'songwriters' : 'Dylan Baldi',
        'image': 'https://townsquare.media/site/838/files/2022/01/attachment-cloud-nothings-attack-on-memory.jpeg'
    },
    'here and nowhere else': {
        'releaseYear': 2014,
        'trackAmount': 8,
        'longestSong': 'Pattern Walks',
        'shortestSong': 'Psychic Trauma',
        'songwriters' : 'Dylan Baldi',
        'image': 'https://images.squarespace-cdn.com/content/v1/5732969486db439cb3ff3d12/1602526546621-418O9ZC74U5K677DVVD3/0677517009224.jpg'
    },
    'life without sound': {
        'releaseYear': 2016,
        'trackAmount': 9,
        'longestSong': 'Realize My Fate',
        'shortestSong': 'Internal World' ,
        'songwriters' : 'Dylan Baldi',
        'image': 'https://api.floodmagazine.com/wp-content/uploads/2017/02/Cloud_Nothings-2017-Life_Without_Sound.jpg'
    },
    'last building burning': {
        'releaseYear': 2018,
        'trackAmount': 8,
        'longestSong': 'Dissolution',
        'shortestSong': 'On an Edge',
        'songwriters' : 'Dylan Baldi',
        'image': 'https://diy-magazine.s3.amazonaws.com/d/diy/Artists/C/Cloud_Nothings/_900x900_crop_center-center_41_line/cloud-nothings-lp.jpg'
    },
    'the shadow i remember': {
        'releaseYear': 2021,
        'trackAmount': 9,
        'longestSong': 'Oslo',
        'shortestSong': 'It\'s Love',
        'songwriters' : 'Dylan Baldi',
        'image': 'https://media.pitchfork.com/photos/6037e1da97b2d90479ab228e/1:1/w_320/Cloud-Nothings.jpg'
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

app.get('/main.css', (req,res) => {
    res.sendFile(__dirname + '/main.css')
})

app.listen(process.env.PORT || PORT, (req,res) => {
    console.log('I\'m listening...')
})