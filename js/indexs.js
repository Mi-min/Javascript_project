document.addEventListener('DOMContentLoaded',function(){
    var reg=document.querySelector('#reg');console.log(reg);
    reg.onclick=function(){
        var box=document.createElement('div');
        box.className='box';
    }
});