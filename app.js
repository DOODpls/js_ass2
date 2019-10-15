const hamb = document.querySelector('#jshamb')
const show = document.querySelector('#switch')
const list = document.querySelector('header ul')
const closebtn = document.createElement('img')
closebtn.src=('./assets/close.svg')
const wrapp = document.querySelector('.wrapper')
const headd = document.querySelector('header')



hamb.addEventListener('click', function() {
  console.log('launch')
  show.className = 'switch opener'
  list.className = 'lister'
  document.getElementById('switch').appendChild(closebtn)
  closebtn.style.height = '30px'
  closebtn.style.width = '30px'
  closebtn.style.backgroundSize = '30px'
  document.getElementById('switch').appendChild(list)
})

closebtn.addEventListener('click', function(){
  show.className='switch'
})


window.addEventListener('resize', function(){
  var mq = window.matchMedia( "(max-width: 600px)" );
if (mq.matches) {
  document.getElementById('switch').appendChild(list)
}
else {
  wrapp.id = 'wrapper'
  document.getElementById('wrapper').appendChild(list)
}
})
