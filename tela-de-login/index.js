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
    var imagem = document.getElementById("img-user");

    if ( email === user[0].email && pass == user[0].password) {
        imagem.innerHTML = `<img src='${user[0].img}' class='img-user' alt='Imagem User'>`
        console.log("Dados corretos!");
    } else {
        console.log("Email não encontrado ou senha incorreta!");
    }
}