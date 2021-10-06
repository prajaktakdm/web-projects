const arr =[]

const users = document.getElementById('users')


getData();

function getData(){
    users.innerHTML="";
    document.body.appendChild(users);

    var div1 = document.createElement("div");
    div1.innerHTML ="Users "+ "(" + arr.length + ")";
    div1.style.paddingTop = "10px";
    div1.style.paddingBottom = "10px";
    div1.style.textAlign = "center";
    div1.style.fontSize = "35px";
    div1.style.fontWeight = "bold";
    users.appendChild(div1);

    var div2 = document.createElement("div");
    div2.className = 'content';
    div2.style.columnCount = 2;
    div2.style.backgroundColor = "#b3e6c7";
    users.appendChild(div2);



    var div3 = document.createElement("div");
    arr.forEach(function(element){
        var div3 = document.createElement('div');
        div3.innerHTML = element.name;
        div3.style.textAlign = "center";
        div3.style.fontSize = "20px";
        div2.appendChild(div3);
    });
    
    div3.style.padding = "10px";



    var div4 = document.createElement("div");
    arr.forEach(function(element){
        var div4 = document.createElement('div');
        div4.innerHTML = element.email;
        div4.style.textAlign = "center";
        div4.style.fontSize = "20px";
        div2.appendChild(div4);
    });
    
    div4.style.padding = "10px";
}
const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')

form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    if(!name.value || !email.value){
        return false;
    }
    

    let ob = {name: name.value, email: email.value}
    arr.push(ob);
    getData();
    name.value='';
    email.value='';
    
});


