 newdogg = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json.message)
      DogImagediv = document.getElementById('DogImage')
      DogImagediv.innerHTML = `<img src='${json.message}' height=300px width=300px />`
    })
}
newdog = document.getElementById('newdog')
newdog.onclick = () => newdogg()