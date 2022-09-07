const background = document.querySelector('.container')
const backgroundrandom = Math.floor(Math.random()*3) 
background.style.backgroundImage = `url('./img/${backgroundrandom}.jpg')`
