var hamburger = document.querySelector('.hamburger');
var side = document.querySelector('side')
var container = document.querySelector('.container');
var scrollContent = document.querySelector('.scroll-content');
var header = document.querySelector('header');
var mainImage = document.querySelector('.main img');
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
document.addEventListener('mousemove',function(e){
  cursor.style.transform = 'translate('+ (e.clientX - 5) +'px,'+ (e.clientY -5) +'px)';
})
