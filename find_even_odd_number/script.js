const form =document.getElementById('form')
const number =document.getElementById('number')
const output =document.getElementById('output')

function getData(){
    if(number.value ==''){
        output.innerHTML='Please Enter the number.'
        output.style.color="red";
        output.style.fontSize="10px";

   }
   else if(number.value % 2 == 0){
        output.innerHTML = 'The number is Even'
    }
    else{
        output.innerHTML = 'The number is Odd'
    }
}

form.addEventListener('submit',(event) => {
    event.preventDefault();
    getData();
})