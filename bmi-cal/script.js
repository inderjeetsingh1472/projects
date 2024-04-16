const form=document.querySelector('form')
form.addEventListener('submit',function(e){
e.preventDefault();
const height=document.querySelector('#height').value
const weight=document.querySelector('#weight').value
const result=document.querySelector('#results')
if(height===''||height<0||isNaN(height)){
    result.innerHTML=`plz enter a valid height ${height}`;
}
else if(weight===''||weight<0 || isNaN(weight)) {
    result.innerHTML=`plz enter a valid height ${weight}`;
}
else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
  }
})