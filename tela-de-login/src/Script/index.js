var user = [
    {
        id: 1,
        nome: "RossanPereira",
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
    var newUser = newNome.replace(/ /g,''); /* retirando os espaços do nome */

    for (i = 0; i < user.length; i++) {
        if (newUser == user[i].nome) {
            alert("Usuário existente. Escolha outro.")
            return true;
        } else {
            return false;
        }
    }
}

/* Verificando se o e-mail existe */
function VerificarEmail() {
    var newEmail = document.getElementById("create_email").value

    for (i = 0; i < user.length; i++) {
        if (newEmail == user[i].email) {
            alert("E-mail existente. Escolha outro.")
            return true;
        } else {
            return false;
        }
    }
}

/* Criando o usuário */
function Criar() {

    var newNome = document.getElementById("create_nome").value
    var newUser = newNome.replace(/ /g,'');
    var newEmail = document.getElementById("create_email").value
    var newEmail = document.getElementById("create_email").value
    var nextId = 0

    /* Descobrindo o novo id */
    for (i = 0; i <= user.length; i++) {
        nextId = i + 1
    }

    /* Verificando se o dados existem para adiciona-los */
    if () {

    } else if ( VerificarNome() || VerificarEmail() == true) {
        console.log("Dados incorretos.")
    } else {
        console.log("Usuário criado.")
    }

    console.log(nextId)
}