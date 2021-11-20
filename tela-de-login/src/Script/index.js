var user = [
    {
        id: 1,
        nome: "Rossan Pereira",
        email: "rossan@gmail.com",
        img: "https://otakukart.com/wp-content/uploads/2021/02/aogiri-kaneki-kagune.jpg",
        password: "123456",
    }
]

function Enviar() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var imagem = document.getElementById("login_img-user");

    if (email === user[0].email && pass == user[0].password) {
        imagem.innerHTML = `<img src='${user[0].img}' class='login_img-user' alt='Imagem User'>`
        console.log("Dados corretos!");
    } else {
        console.log("Email não encontrado ou senha incorreta!");
    }
}

/* Funções da tela criar um usuário */
var newEmail = document.getElementById("create_email").value
var newPass = document.getElementById("create_pass").value

/* Verificando se o usuário existe */
function VerificarNome() {
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
function VerificarEmail() {
    var newEmail = document.getElementById("create_email").value
    var resultEmail = document.getElementById("result-email")

    for (i = 0; i < user.length; i++) {
        if (newEmail == user[i].email) {
            resultEmail.innerHTML = "E-mail existente. Escolha outro."
            return true;
        } else if (newEmail.indexOf('@') == -1 || newEmail.indexOf('.') == -1 ) {
            resultEmail.innerHTML = "Por favor, informe um E-MAIL válido!"
        } else {
            resultEmail.innerHTML = ""
            return false;
        }
    }
}

function VerificarPassword() {
    var newPass = document.getElementById("create_pass").value
    var resultPass = document.getElementById("result-pass")

    if ( newPass.length < 6 ) {
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