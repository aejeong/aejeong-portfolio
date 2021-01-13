var hamburger = document.querySelector('.hamburger');
var side = document.querySelector('side')
var container = document.querySelector('.container');
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

document.addEventListener('scroll',function(e){
  console.log(window.pageYOffset)
  
})