
var Allbtn = document.querySelectorAll('button')

Allbtn.forEach(function(elem){
  elem.addEventListener('click',()=>{
   if(elem.innerHTML == 'Click Here'){
    elem.innerHTML = 'remove friend'
  }else{
     elem.innerHTML = 'Click Here'
   }
  })
})
