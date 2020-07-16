const select = document.querySelector('#select');
const producto = document.querySelector('#opciones');
const opcionProducto = document.querySelectorAll('#opciones > .opcion');
const contenidoSelect = document.querySelector('#contenido-select');
const hiddenInput = document.querySelector('#input-select');

// const seleccion = ()=>{    
    // select.addEventListener('click',toggleActive);
    select.addEventListener('click',()=>{
        select.classList.toggle('active');
        producto.classList.toggle('active');
    });

// };

// const opciones = ()=>{
    opcionProducto.forEach((opcion)=>{
        opcion.addEventListener('click',(e)=>{
            e.preventDefault();
            contenidoSelect.innerHTML = e.currentTarget.innerHTML;
            select.classList.toggle('active');
            producto.classList.toggle('active');
            hiddenInput.value = e.currentTarget.querySelector('.titulo-select').innerText;
        });
    });
// };

//MIRAR BOOKMARKS



// cliquearFuera();


