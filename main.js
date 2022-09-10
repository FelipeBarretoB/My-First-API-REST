
const catURL="https://api.thecatapi.com/v1/images/search";

fetch(catURL)
    .then(res => res.json())
    .then(data =>{
        const img= document.getElementById("photo")
        img.src=data[0].url
    })

