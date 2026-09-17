const login = document.getElementById("txtLogin");
const senha = document.getElementById("txtSenha");
const divResposta = document.getElementById("resposta");
const botao = document.getElementById("btnAcessar"); // ID corrigido (btnAcessar)

const LoginBanco = "magolh@gmail.com";
const senhaBanco = "123";

function mostrar() {
    const loginV = login.value;
    const SenhaV = senha.value;

    if (loginV === LoginBanco && SenhaV === senhaBanco) {
        divResposta.textContent = "Login efetuado com sucesso";
        setTimeout(() => {
            window.location.href = "../paginas/home.html";
        }, 2000);
    } else {
        divResposta.innerHTML = `<p>Login ou senha incorretos </p>`;
    }
}

// O ouvinte de clique deve ser declarado no escopo global
botao.addEventListener('click', mostrar);