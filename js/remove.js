var tabela = document.querySelector("#tabela-pacientes");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    
    setTimeOut(function(){
    	event.target.parentNode.remove();
    },500);


});