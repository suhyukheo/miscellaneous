const Clock = document.querySelector('h2')

//padStart(파라미터=최소 글자수 ex 2 로 잡으면 2가 될때까지 뒤에 넣은 파라미터를 채워준다.)
function TimeOn(){
  const Time = new Date()
  const Hour =String(Time.getHours()).padStart(2,'0')
  const Minute =String(Time.getMinutes()).padStart(2,'0')
  const Sec = String(Time.getSeconds()).padStart(2,'0')
  Clock.innerHTML = `${Hour} : ${Minute}`
}
setInterval( () => {TimeOn()} ,1000)