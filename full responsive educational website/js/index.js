burger=document.querySelector('.burger')
nav=document.querySelector('.nav')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-resp')
    navlist.classList.toggle('v-resp')
    nav.classList.toggle('h-resp')
})
