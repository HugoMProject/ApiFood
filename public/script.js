const btnInfo = document.getElementById('btn');

btnInfo.addEventListener('click', ()=>{
    let divInfo = document.querySelector('.btnInfo');
    if(divInfo.classList.contains('show')){
        divInfo.classList.remove('show');
    }else{
        divInfo.classList.add('show');
    }
});
console.log('hola mundo');