const http = new XMLHttpRequest();

const criaNovaLista = (nome, email) => {
    const promise = new Promise((resolve, reject) => {

        const linhaNovoCliente = document.createElement('tr');
        linhaNovoCliente.innerHTML = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>  
        <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li>
                <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
            </li>
        </ul>
        </td>
    `;
    return linhaNovoCliente;
}

http.open("GET", "http://localhost:3000/profile");
http.send();




    http.onload = () => {
        if (http.status === 200) {
            const data = JSON.parse(http.response);
            data.forEach(elemento => {
                tabela.appendChild(criaNovaLista(elemento.nome, elemento.email));
            });
        } else {
            console.error("Erro ao carregar os dados:", http.statusText);
        }
    };
    return promise;

})


const tabela = document.querySelector('[data-tabela]');

http.onerror = () => {
    console.error("Erro ao fazer a requisição.");
};

