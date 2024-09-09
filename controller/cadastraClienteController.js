
import { clienteService } from '../service/clienteService.js';



const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit',  (evento) => {
    evento.preventDefault();

    const nome = evento.target.querySelector('[data-nome]').value;
    const email = evento.target.querySelector('[data-email]').value;


    clienteService.criaCliente(nome, email)
        .then(() => {
            window.location.href = '../telas/cadastro_concluido.html';
        })
});


const tabela = document.querySelector('[data-tabela]')

clienteService.listaClientes()
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email))
        })})