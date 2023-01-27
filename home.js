const open = document.getElementById('open')
const close = document.getElementById('close') 
const project1 = document.getElementById('project1')
// const project2 = document.getElementById('project2')
const project3 = document.getElementById('project3')
const project4 = document.getElementById('project4')

open.addEventListener('click',()=>{
  console.log('here')
   project1.className = 'project1'
  //  project2.className = 'project2'
   project3.className = 'project3'
   project4.className = 'project4'
})

close.addEventListener('click',()=>{
  console.log('clicked')
  project1.className = 'closeProject1'
  // project2.className = "closeProject2"
  project3.className = 'closeProject3'
  project4.className = "closeProject4"
})