var hamburger = document.querySelector('.hamburger');
var side = document.querySelector('aside')
var container = document.querySelector('.container');
var scrollContent = document.querySelector('.scroll-content');
var header = document.querySelector('header');
var mainImage = document.querySelector('.main .main-container');
var subImages = document.querySelectorAll('.cards-left .card img')
var subImagesR = document.querySelectorAll('.cards-right .card img')
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

console.dir(subImages)
document.addEventListener('scroll',function(){

  requestAnimationFrame(test)
})

function test(){
  var mainImageValue = (header.offsetHeight - pageYOffset) / 5 * -0.1
  var subImageValue = (mainImage.offsetHeight + header.offsetHeight - pageYOffset) / 15 * -0.1
  var subImageValueTwo = (subImages[0].offsetHeight + mainImage.offsetHeight + header.offsetHeight - pageYOffset) / 5 * -0.1
  var subImageValueThird = (subImages[0].offsetHeight + subImages[1].offsetHeight + subImages[2].offsetHeight+ mainImage.offsetHeight + header.offsetHeight - pageYOffset) / 15 * -0.1
  var subImageValueForth = (subImages[0].offsetHeight + subImages[1].offsetHeight + subImages[2].offsetHeight + subImages[3].offsetHeight+ mainImage.offsetHeight + header.offsetHeight - pageYOffset) / 10 * -0.1

  mainImage.style.transform = 'translate3d(0,'+mainImageValue+'%,0)'
  subImages[0].style.transform = 'translate3d(0,'+subImageValue+'%,0)'
  subImages[1].style.transform = 'translate3d(0,'+subImageValueTwo+'%,0)'
  subImages[3].style.transform = 'translate3d(0,'+subImageValueForth+'%,0)'
  subImagesR[0].style.transform = 'translate3d(0,'+subImageValueTwo+'%,0)'
  subImagesR[1].style.transform = 'translate3d(0,'+subImageValueTwo+'%,0)'
  subImagesR[2].style.transform = 'translate3d(0,'+subImageValueThird+'%,0)'
  subImagesR[3].style.transform = 'translate3d(0,'+subImageValueForth+'%,0)'
}