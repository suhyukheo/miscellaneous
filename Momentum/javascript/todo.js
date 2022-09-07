const  Logininput = document.querySelector('input')
const LoginForm =document.querySelector('#log_in')
const LoginUser = document.querySelector('h1')
const todolist =document.querySelector('#todo-list')
const todoinput =document.querySelector('#todo-input')
const todoform = document.querySelector('#todo-form')
const todobutton =document.querySelector('#todobutton')
const HIDDEN_CLASS ='hidden'

let UserName  = localStorage.getItem('username')
let todo  = []



function paintTodo(){
  todolist.innerHTML = ``
  for(let i=0 ; i < todo.length ;i++){
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.innerText = todo[i]
    const button  = document.createElement('button')
    button.innerText = `⨉`
    button.addEventListener('click',()=>{
      todo.splice(i,1)
      paintTodo()
    })    
    li.appendChild(span)
    li.appendChild(button)
    todolist.appendChild(li)
  }
}



todobutton.addEventListener('click',()=>{
  todolist.classList.toggle(HIDDEN_CLASS)
})




//todo리스트에 일정 넣기
todoform.addEventListener('submit',(event)=>{
  event.preventDefault()
  todo.push(todoinput.value)
  todoinput.value = ''
  paintTodo()
})






//유저 네임이 있는지 확인
if(UserName !== null){
  LoginForm.classList.add(HIDDEN_CLASS)
  LoginUser.innerText = `Good Day , ${UserName}`
  LoginUser.classList.remove(HIDDEN_CLASS)
  todoform.classList.remove(HIDDEN_CLASS)
}
else{
  LoginForm.classList.remove(HIDDEN_CLASS)
}

//폼에 이벤트 리스너 추가
function AddFormEvent(){
  LoginForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    event.currentTarget.classList.add(HIDDEN_CLASS)
    UserName = Logininput.value
    localStorage.setItem('username',UserName)
    LoginUser.innerText = `Good Day,${UserName}`
    LoginUser.classList.remove(HIDDEN_CLASS)
    todoform.classList.remove(HIDDEN_CLASS)
  })
}

AddFormEvent()

