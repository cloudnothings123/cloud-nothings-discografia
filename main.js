document.getElementById('entryButton').addEventListener('click', runApi)

async function runApi(){

    let albumName = document.querySelector('input').value.toLowerCase()

    try{
        const res = await fetch(`https://cloud-nothings-discografia.herokuapp.com/api/${albumName}`)
        const data = await res.json()
        console.log(data)

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