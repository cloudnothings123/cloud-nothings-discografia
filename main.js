document.getElementById('entryButton').addEventListener('click', runApi)

async function runApi(){

    let albumName = document.querySelector('input').value

    try{
        const response = await fetch(`https://cloud-nothings-discografia.herokuapp.com/api/${albumName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('information').display = ''

        document.getElementById('releaseYear').innerText = data.releaseYear
        document.getElementById('trackAmount').innerText = data.trackAmount
        document.getElementById('longestSong').innerText = data.longestSong
        document.getElementById('shortestSong').innerText = data.shortestSong

        document.getElementById('albumCover').src = data.image
        document.getElementById('coverCaption').innerText = albumName
    }
    catch(error){
        console.log(error)
    }
}