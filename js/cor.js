const botao = document.getElementById("btnOla")
const resposta = document.getElementById("resp")

function ola ()
{
    resposta.textContent = "olá vm ta farmando aluminio?"
}

function somar( ) {
    const n1 = 10; 
    const n2 = 5;
    const r = n1 + n2;
    resposta.innerHTML = r.toString();
}

function alterar_cor()
{
    resposta.classList.toggle("Ativo") // Ele apenas troca entre duas cores
} // o clssList nos da itens dessa classe interna e o . acessa

botao.addEventListener("click", alterar_cor);

