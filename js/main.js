document.addEventListener("DOMContentLoaded", function(){
    
    eventListener();

});

const botonMenu = document.querySelector("#menu-toggle i"),
      menuResponsive = document.querySelector("#navegacion");

function eventListener(){

    botonMenu.addEventListener("click", mostrarMenu);
}

function mostrarMenu(){
    menuResponsive.classList.toggle("mostrar");
}