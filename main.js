const form = document.getElementById('form-atividade');
let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome-contato');
    const inputTel = document.getElementById('tel-contato');

    // Verifica se o número já existe na tabela
    if (telefoneExistente(inputTel.value)) {
        alert('Este número já está na agenda.');
        return;
    }

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputTel.value = '';
});

document.getElementById('tel-contato').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Adiciona parênteses e formatação após o DDD
    if (value.length > 2) {
        value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
    }

    // Limita a 5 números antes do hífen
    if (value.length > 10) {
        value = value.substring(0, 10) + '-' + value.substring(7, 11);
    }

    e.target.value = value;
});

document.getElementById('nome-contato').addEventListener('input', function (e) {
    var inputText = e.target.value;
    e.target.value = inputText.toUpperCase();
});

function telefoneExistente(novoTelefone) {
    const tabela = document.querySelector('tbody');
    const linhasTabela = tabela.getElementsByTagName('tr');

    for (let i = 0; i < linhasTabela.length; i++) {
        const colunas = linhasTabela[i].getElementsByTagName('td');
        const telefoneExistente = colunas[1].innerText.trim();

        // Verifica se o novo telefone já existe na tabela
        if (telefoneExistente === novoTelefone) {
            return true;
        }
    }

    return false;
}
