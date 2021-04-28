let press = false;
const gridcontainer=document.querySelector('.grid');
window.addEventListener('mousedown',togglePress);
window.addEventListener('mouseup',togglePress);
gridcontainer.addEventListener('mouseleave',function(){press=false} )
setSize()


function setSize(){
    press =false;
    gridcontainer.innerHTML='';
    
    size= prompt('what size?')

    if (size>100){
        size = 100;
        alert('max size 100')
    }

    if(!size){
        size=64;
    }

    let styleSize = "repeat("+size +",minmax(0,1fr))"

    gridcontainer.style['grid-template-rows'] = styleSize;
    gridcontainer.style['grid-template-columns'] = styleSize;

    for(i=0;i<(size*size);i++){
        var div = document.createElement("div");
        div.classList.add('default');
        div.addEventListener('mouseover',toggleClass)
        gridcontainer.appendChild(div);

    }
}


function toggleClass(e){
    if(press){
        e.srcElement.classList.add('colored')
    }
}

function togglePress(){
    if(press){
        press =false
    
    }else press = true

}