let texto = document.querySelector("#texto");


let nome = prompt("Qual o seu nome?");
if (texto.textContent == null){
    texto.textContent ="Seja bem-vindo(a)!"; 
}
else{
    texto.textContent = nome;
}





