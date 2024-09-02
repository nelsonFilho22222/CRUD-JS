const criaNovaLinha = (nome, email) => {
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

    return linhaNovoCliente; // Retorna a linha criada
};

//
//
// http.open("GET", "http://localhost:3000/profile");
// http.send();

const tabela = document.querySelector('[data-tabela]');



const listaClientes = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();

        http.open('GET', 'http://localhost:3000/profile');
        http.send();

        http.onload = () => {
            if (http.status >= 400) { // Verifica se houve erro
                reject(JSON.parse(http.response));
            } else {
                resolve(JSON.parse(http.response));
            }
        };
    });
    // console.log(promise)
    return promise;
};


listaClientes()
    .then(data => { // Se a requisição for bem-sucedida
        data.forEach(elemento => {
            const novaLinha = criaNovaLinha(elemento.nome, elemento.email);
            tabela.appendChild(novaLinha);
        });
    })
    .catch(error => { // Se a requisição falhar
        console.error("Erro ao obter dados:", error);
    });





http.onerror = () => {
    console.error("Erro ao fazer a requisição.");
};

