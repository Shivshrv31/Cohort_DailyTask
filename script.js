
var grow = 0;
var btn = document.querySelector('button');
var h = document.querySelector('h2');
var inner = document.querySelector('.inner')
var card = document.querySelector('.card')


btn.addEventListener('click',()=>{
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.5';
    
    var num = 30 + Math.floor(Math.random()*50);
    console.log('your file will be downloaded in ',num/10 ,'seconds');

    var int = setInterval(()=>{

        grow++;
        h.innerHTML = grow+'%';
        inner.style.width = grow+'%';
        
    },num)

    setTimeout(()=>{
        clearInterval(int);
        btn.innerHTML='Downloaded';
     
    },num*100)
})
