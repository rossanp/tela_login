var user = [
    {
        id: 1,
        nome: "Rossan Pereira",
        email: "rossan@gmail.com",
        img: "https://otakukart.com/wp-content/uploads/2021/02/aogiri-kaneki-kagune.jpg"
    }
]

function Enviar() {
    var email = document.getElementById("email").value;

    if ( email == user.email) {
        console.log("Email correto!")
    } else {
        console.log("Email não encontrado!");
    }
}