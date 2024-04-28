const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
let interval;

const start_changing=()=>{
if(!interval){
interval=setInterval(change_color,1000);}

function change_color(){
    document.body.style.backgroundColor=randomColor()
    }
};
const stop=()=>{
clearInterval(interval)
interval=null;
};
document.body.querySelector('#start').addEventListener('click',start_changing);
document.body.querySelector('#stop').addEventListener('click',stop);

