window.onload = () =>{
  let calculatorsign = [ 
    'C','back','%','/',
    1,2,3,'x',
    4,5,6,'-',
    7,8,9,'+',
    '',0,'','='
 ]

 let store='0'
 let store_num=[]
 let store_sign=[]
 let back = []
 let backclick  = 1
 let intclick  = false

/**시작*/

 async function start(){
  const target =document.querySelector('.main_box')
  calculatorsign.forEach((v,i)=> {
    const a =`<div class="main-box-content">
    <div class="main-box-contents" id=${i}>
      <p>${v}</p>
    </div>
  </div>`
    target.insertAdjacentHTML('beforeend',a)
  });
 }


/**계산*/
 function Calculation(){
  if(store_num.length <= 1){return store_num[0]}
  else{
    for( i =1 ; i<store_num.length ; i++){
      if(store_sign[i-1] === 'x'){
        store_num[i] = store_num[i-1] * store_num[i]
        console.log(store_num)
      }
      else if(store_sign[i-1] ==='%'){
        store_num[i] = store_num[i-1] / store_num[i]
      }
      else if(store_sign[i-1] ==='+'){
        store_num[i] = store_num[i-1] + store_num[i]
      }
      else if(store_sign[i-1] ==='-'){
        store_num[i] = store_num[i-1] - store_num[i]
      }
      else if(store_sign[i-1] ==='/'){
        store_num[i] = (store_num[i]/store_num[i-1])*100
      }
    }
    return store_num[store_num.length-1]
  }
 }


/**계산 출력 */
 function print_result(){
  document.querySelector('.head_box').innerHTML = `${store}`
 }


 /**계산후에 이벤트 추가 */
 start().then(()=>{
  const c = document.querySelectorAll('.main-box-contents')
  c.forEach((data,i)=>{
    data.addEventListener('click',(e)=>{
      if(typeof(calculatorsign[i]) == 'string'){
          if(calculatorsign[i] === '='){
            store_num.push(store)
            document.querySelector('.head_box').innerHTML= Calculation()
            store =store_num[store_num.length-1]
            back.push(store_num[store_num.length-1])
            store_num= []
            store_sign= []
          }
          else if(calculatorsign[i] === 'C'){
            store = '0'
            print_result()
            store_num = []
            store_sign = []
          }
          else if(calculatorsign[i] === 'back'){
            if(back.length>0){
              if(back.length - backclick <= 0){
                alert('기록이 없습니다.')
              }
              else{
                console.log(back)
                console.log(back.length - backclick)
                document.querySelector('.head_box').innerHTML = `${back[back.length-1-backclick]}`
                backclick+=1
              }
            }
          }
          else if(intclick===true){
            console.log(store,store_num,store_sign)
            intclick = false
            store_num.push(store)
            store_sign.push(calculatorsign[i])
            store='0'
          }
      }
      else{
        store += new String(calculatorsign[i])
        store = parseInt(store)
        intclick =true
        print_result()
      }
    },false)
  }) 
 })
}
