let oi = "olá mundo";
console.log("js carregado");
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
        document.getElementById("login").style.display = "none";
        console.log("Botãobotao_login(); de login ocultado.");
        window.alert("Bem-vindo, " + nome_user + "!");
        document.getElementById('paragrafo.login').textContent = "Ola " + nome_user + "!"
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
        document.getElementById('paragrafo.login').textContent = "";
        console.log("Sessão terminada e nome de utilizador removido.");
    } else {
        // O utilizador clicou em Cancelar
        console.log("Terminar sessão cancelado pelo utilizador.");
    }
}