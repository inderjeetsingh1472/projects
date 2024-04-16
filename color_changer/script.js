const btn=document.querySelectorAll(".button")
const bdy=document.body
btn.forEach((button )=> {
    button.addEventListener('click',(e)=>{
if(e.target.id==='grey'){
    bdy.style.backgroundColor=e.target.id
}
if (e.target.id === 'white') {
    bdy.style.backgroundColor = e.target.id;
  }
  if (e.target.id === 'blue') {
    bdy.style.backgroundColor = e.target.id;
  }
  if (e.target.id === 'yellow') {
    bdy.style.backgroundColor = e.target.id;
  }
    })
});