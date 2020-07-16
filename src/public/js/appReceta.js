import {Interface} from './interfaceRecetas';
const verMas = document.querySelectorAll('.verMas');
const ventana = ()=>{
    for (const elemento of verMas){
        elemento.addEventListener('click',(e)=>{
            const receta = new Interface();
            receta.cargarElementos(e);
        });
    }
};

const init = ()=>{
    ventana();
};

init();

