const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) =>{
event.preventDefault();

if (nameInput.value === ""){
    alert ("Por favor, preencha o seu nome");
    return;
}

if(emailInput.value === "" || !isEmailValid(emailInput.value)){
    alert ("Por favor, preencha o seu email");
    return;
}

if (!validatePassword(passwordInput.value,8)){
    alert ("A senha precisa ter no mínimo 8 dígitos.");
    return;
}

if (jobSelect.value === ""){
    alert ("Por favor, selecione a sua situação.");
    return;
}

if (messageTextarea.value === ""){
    alert ("Por favor, escreva uma mensagem.");
    return;
}
 form.submit();
 
});

function isEmailValid(email){

    const emailRegex = new RegExp(
        /^ [a-zA-Z0-9._-]+ @[a-zA-Z0-9._-]+ \.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)){
        return true;
    }
    
    return false;

}

function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true;
    }
    return false;
}
// Validação simples - Verifica se o nome está vazio


// Verificar se e-mail está preenchido e se é válido


// Verifica se a senha está preenchida

// Verifica se a situação foi selecionada


// Verifica se a amensagem está preenchida


// Se todos os campos estuverem completamente prenchidos, envie form


// Função que valida e-mail


// cria uma regex para validar email

 
    // usuario12@host.com.br
    






// Função de valida a senha

        // Senha valida
       
    
    // Senha Invalida