const http = new XMLHttpRequest();

const criaNovaLista = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = `
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
    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela]');

http.open("GET", "http://localhost:3000/profile");
http.send();

http.onload = () => {
    if (http.status === 200) {
        const data = JSON.parse(http.responseText); // Parse da resposta JSON
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLista(elemento.nome, elemento.email));
        });
    } else {
        console.error("Erro ao carregar os dados:", http.statusText);
    }
};

http.onerror = () => {
    console.error("Erro ao fazer a requisição.");
};
