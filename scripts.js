function logar() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == "" || senha == "") {
        alert("Há algum campo não preenchido");
    }
    else if (usuario == "admin" && senha == "admin") {
        alert("Você está logado!");
        location.href = "home.html";
    }
    else {
        alert("Credenciais incorretas");
    }
}

function voltar() {
    alert("Você escolheu sair");
}

function esqueceuSenha() {
    alert("Que pena!");
}