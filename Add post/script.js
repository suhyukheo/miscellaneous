

window.onload = () =>{

  let user =document.querySelector('#story')
  let title = document.querySelector('.title')
  let output =document.querySelector('.output-box')

   let user_input_data = []

    function append_content (){
    output.innerHTML = ''
    for(let i=0 ; i<user_input_data.length ; i++){
     output.insertAdjacentHTML('beforeend',
     `<div class="output-content">
       <h2>제목 :${user_input_data[i].title}</h2>
       <p>${user_input_data[i].content}</p>
       <button id ='btn${i}'><i class="fa-solid fa-trash"></i></button> 
     </div>`)
    }
    for(let i = 0 ; i<user_input_data.length ; i++){
      document.querySelector(`#btn${i}`).addEventListener('click',()=>{
        user_input_data.splice(i,1)
        append_content()
      })
    }
  
  }
  
  document.querySelector('.icon_box').addEventListener('click',() =>{
    title.value = ''
    user.value = ''
  })




  document.querySelector('.btn').addEventListener('click',()=>{
    if(user_input_data.length>0){
      user_input_data = [...user_input_data , { title : title.value ,content : user.value }]
    }
    else{ user_input_data = [{title:title.value ,content : user.value}]}
    append_content()
  })





  document.querySelector('.title').addEventListener('focus',(e)=>{
     document.querySelector('.icon_box').style.color ='yellow'
  })
  document.querySelector('.title').addEventListener('focusout',(e)=>{
    document.querySelector('.icon_box').style.color ='white'
 })
















}