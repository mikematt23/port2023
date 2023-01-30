const open = document.getElementById('open')
const close = document.getElementById('close') 
const project1 = document.getElementById('project1')
const project3 = document.getElementById('project3')
const project4 = document.getElementById('project4')
const projectHolder = document.getElementById('projectHolder')

open.addEventListener('click',()=>{
  console.log('here')
   project1.className = 'project1'
   project3.className = 'project3'
   project4.className = 'project4'
   projectHolder.style.display = 'block'
})

function closeProjectHolder(){
  projectHolder.style.display = "none"
}

close.addEventListener('click',()=>{
  console.log('clicked')
  project1.className = 'closeProject1'
  project3.className = 'closeProject3'
  project4.className = "closeProject4"
})

