const sortarray = [3,4,7,6,3,2,1]
const grapcontainer =document.querySelector('.main-content')
const  grapbox = document.querySelector('.grap-box')
const grap_width = parseInt(100/sortarray.length)
const grap_height = parseInt(100/Math.max(...sortarray))
sortarray.forEach((v,i)=>{
  const grap = document.createElement('div')
  grap.classList = 'content-box'
  grap.style.width = grap_width
  grap.style.height =grap_height
  console.log(grapcontainer)
});