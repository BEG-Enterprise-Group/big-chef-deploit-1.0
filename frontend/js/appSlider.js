import {Interface} from './interfaceSlider';
const saberMas = document.querySelectorAll('.saberMas');
// const pedidos = document.querySelectorAll('#realizarPedido');
const ventana = ()=>{
    for (const elemento of saberMas) {
        elemento.addEventListener('click',(e)=>{
           const ventana = new Interface();
            ventana.cargarElementos(e);
        });
    }

};

// const scrollPedido = ()=>{
//     for (const pedido of pedidos) {
//         pedido.addEventListener('click',()=>{
//             pedido.setAttribute('href','#pedido');
//         });
//     }
// };


const init = ()=>{
    ventana();
    //scrollPedido();

};

init();


