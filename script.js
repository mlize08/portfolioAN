let texto = document.querySelector("#texto");
texto.textContent = "Monalize";

let nome = prompt("Qual o seu nome?");
if (texto.textContent == null){
    texto.textContent ="Seja bem-vindo(a)!" 
}
else{
    texto.textContent = nome;
}





