// mudar imagens do banner *****************************************************
var img=document.getElementById("bgBanner");
var cont=0;
function banner(){
    cont++;
    img.src="imagens/imgBanner"+cont+".jpg";
    if (cont >=3){
        cont=0;  
    }
}
setInterval(banner, 3000);

var ul=document.getElementById("lm");
document.getElementById("btnMenu").addEventListener("click", function(){
    
    ul.classList.toggle("linksM");
});

// mostar areas de cobertura com um "click" da seçao COBERTURA ********************************
function mostrar(NumElemento){
    switch(NumElemento){
        case 1: document.getElementById("locais1").classList.toggle("mostrar");break;
        case 2: document.getElementById("locais2").classList.toggle("mostrar");break;
        case 3: document.getElementById("locais3").classList.toggle("mostrar");break;
    }
}


// animação dos elementos da seção cobertura **********************
const target=document.querySelectorAll('[data-anime]');
const animationClass="animation";

function animaScroll(){
    const windowTop=window.pageYOffset + ((window.innerHeight * 4)/4);
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
        
    });
}
animaScroll();
if(target.length){
    window.addEventListener("scroll",animaScroll);
    console.log(target.length)
}

var di=document.getElementById("cards-planos1");
var btn=document.getElementById("maisplanos");
btn.addEventListener("click", function(){
    di.classList.toggle("mostrarCardPlanos");  
    btn.style.display="none";
});