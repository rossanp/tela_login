/* Criando um array para teste */
var user = [
    {
        id: 1,
        nome: "Rossan Pereira",
        email: "rossan@gmail.com",
        img: "https://otakukart.com/wp-content/uploads/2021/02/aogiri-kaneki-kagune.jpg",
        password: "123456",
    }
]

/* Funções da tela login */
/* Verificando se o usuário existe */
function VerificarEmailLogin() {
    var newEmail = document.getElementById("login_email").value
    var resultEmail = document.getElementById("login_result-nome")
    var resultImg = document.getElementById("login_img-user")

    for (i = 0; i <= user.length; i++) {
        if (newEmail === user[i].email) {
            resultImg.innerHTML = `<img src='${user[i].img}' class='login_img-user' alt='Imagem User'>`
            return false;
        } else {
            resultEmail.innerHTML = "Usuário não existente."
            resultImg.innerHTML = ""
            return true;
        }
    }
}

function VerificarSenhaLogin() {
    var newPass = document.getElementById("login_pass").value
    var newEmail = document.getElementById("login_email").value

    for (i = 0; i < user.length; i++) {
        if (newEmail == user[i].email) {
            if (user[i].password == newPass) {
                return false
            } else {
                return true
            }
        }
    }
}

function Enviar() {

    if (VerificarEmailLogin() == false && VerificarSenhaLogin() == false) {
        alert("Dados corretos! Você está logado.");
    } else {
        alert("Dados incorretos! Por favor, revise os dados e tente novamente.");
    }
}

/* Funções da tela criar um usuário */
var newEmail = document.getElementById("create_email").value
var newPass = document.getElementById("create_pass").value

/* Verificando se o usuário existe */
function VerificarNomeCreate() {
    var newNome = document.getElementById("create_nome").value
    var resultNome = document.getElementById("result-nome")
    /* var newUser = newNome.replace(/ /g,''); retirando os espaços do nome */

    for (i = 0; i < user.length; i++) {
        if (newNome == user[i].nome) {
            resultNome.innerHTML = "Usuário existente. Escolha outro."
            return true;
        } else {
            resultNome.innerHTML = ""
            return false;
        }
    }
}

/* Verificando se o e-mail existe */
function VerificarEmailCreate() {
    var newEmail = document.getElementById("create_email").value
    var resultEmail = document.getElementById("result-email")

    for (i = 0; i < user.length; i++) {
        if (newEmail == user[i].email) {
            resultEmail.innerHTML = "E-mail existente. Escolha outro."
            return true;
        } else if (newEmail.indexOf('@') == -1 || newEmail.indexOf('.') == -1) {
            resultEmail.innerHTML = "Por favor, informe um E-MAIL válido!"
        } else {
            resultEmail.innerHTML = ""
            return false;
        }
    }
}

function VerificarPasswordCreate() {
    var newPass = document.getElementById("create_pass").value
    var resultPass = document.getElementById("result-pass")

    if (newPass.length < 6) {
        resultPass.innerHTML = "A senha deve conter mínimo 6 caracteres."
        return true
    } else {
        resultPass.innerHTML = ""
        return false;
    }
}

/* Criando o usuário */
function Criar() {

    var newNome = document.getElementById("create_nome").value
    var newEmail = document.getElementById("create_email").value
    var newPass = document.getElementById("create_pass").value
    var nextId = 0
    var newUsuario = []

    /* Descobrindo o novo id */
    for (i = 0; i <= user.length; i++) {
        nextId = i + 1
    }

    /* Verificando se o dados existem para adiciona-los */
    if (newNome === "" || newEmail === "" || newPass === "") {
        alert("Favor, preencher os dados.")
    } else if (VerificarNome() === true || VerificarEmail() === true || VerificarPassword() === true) {
        console.log("Dados incorretos.")
    } else {
        newUsuario = {
            id: nextId,
            nome: newNome,
            email: newEmail,
            img: "",
            password: newPass,
        }
        user.push(newUsuario)
        console.log("Usuário criado.")
    }

    console.log(user)
}

/* Mudança de tela Login e Criar */
function CriarUsuario() {
    var telaCreate = document.getElementById("container-create")
    var telaLogin = document.getElementById("container-login")

    if ( telaCreate.style.display == "none") {
        telaCreate.style.display = "block";
        telaLogin.style.display = "none";
    } else {
        telaCreate.style.display = "none";
        telaLogin.style.display = "block";
    }
}