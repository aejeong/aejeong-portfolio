var year = document.querySelector('.footer-year');

var hamburger = document.querySelector('.hamburger');
var side = document.querySelector('aside')
var container = document.querySelector('.container');

var cursor = document.querySelector('.dot');
var title = document.querySelector('h1')
hamburger.addEventListener('click',function(){
  hamburger.classList.toggle('active');
  if(hamburger.classList.contains('active')){
   side.classList.add('active')
   container.classList.add('active');
   document.body.style.overflow = 'hidden';
  }else{
   side.classList.remove('active')
   container.classList.remove('active');
   document.body.style.overflow = 'auto';
  }
})

 hamburger.addEventListener('mouseover',function(e){
   cursor.style.width = '50px';
   cursor.style.height = '50px';
 })
 hamburger.addEventListener('mouseleave',function(){
   cursor.style.width = '10px';
   cursor.style.height = '10px';
 })

document.addEventListener('mousemove',function(e){
  cursor.style.transform = 'translate('+ (e.clientX - 5) +'px,'+ (e.clientY -5) +'px)';
})

year.innerHTML = new Date().getFullYear();
