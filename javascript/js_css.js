let oi = "olá mundo";
console.log("js carregado");
if (localStorage.getItem('username') === null || localStorage.getItem('username') === "") {
    console.log("Não há utilizador logado.");
    document.getElementById("login").style.display = "block";
} else {
    console.log("Utilizador logado: " + localStorage.getItem('username'));
    document.getElementById("login").style.display = "none";
    document.getElementById('paragrafo_login').style.display = "block";
    document.getElementById('paragrafo_login').textContent = "Ola "+ localStorage.getItem('username') + "!";
}
function alterar_texto_h1() {
    console.log("alterar_texto_h1 chamado");
    const resposta = window.confirm('prestes a alterar o texto do h1. Continuar?');
    if (resposta) {
        // O utilizador clicou em OK
        let digito = window.prompt("Escreva o texto");
        
        document.getElementById('h1').textContent = digito;
        console.log("Texto alterado para: " + digito);
    } else {
        // O utilizador clicou em Cancelar
        console.log("Alteração cancelada pelo utilizador.");
    }
}
function login() {
    const resposta = window.confirm('prestes a fazer login. Continuar?');
    if (resposta) {
        // O utilizador clicou em OK
        let nome_user = window.prompt("Escreva o seu nome de utilizador");
        if (nome_user === null || nome_user.trim() === "") {
            console.log("Login cancelado ou nome de utilizador inválido.");
            return;
        }
        localStorage.setItem('username', nome_user);
        document.getElementById("login").style.display = "none";
        console.log("Botãobotao_login(); de login ocultado.");
        window.alert("Bem-vindo, " + nome_user + "!");
        document.getElementById('paragrafo_login').textContent = "Ola " + nome_user + "!"
        console.log("Login efetuado com o nome: " + nome_user);
    } else {
        // O utilizador clicou em Cancelar
        console.log("Login cancelado pelo utilizador.");
    }
}

function terminar_sesao() {
    const resposta = window.confirm('prestes a terminar a sessão. Continuar?');
    if (resposta) {
        // O utilizador clicou em OK
        document.getElementById("login").style.display = "block";
        console.log("Botão de login visível novamente.");
        document.getElementById('paragrafo_login').textContent = "";
        localStorage.removeItem('username');
        console.log("Sessão terminada e nome de utilizador removido.");
    } else {
        // O utilizador clicou em Cancelar
        console.log("Terminar sessão cancelado pelo utilizador.");
    }
}