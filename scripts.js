const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomeValue = nome.value;
  const emailValue = email.value;


  if (nomeValue == "") {
    setErrorFor(nome, "O nome de usuário é obrigatório.");
  } else if (nomeValue.length < 15) {
    setErrorFor(nome, "O nome precisa ter no mínimo 15 caracteres");
  } else {
    setSuccessFor(nome);
  }
  

  if (emailValue == "") {
    setErrorFor(email, "O email é obrigatório.");
  } if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else if (emailValue.length < 10){
    setErrorFor(emailValue, "O email precisa ter no mínimo 10 caracteres.");
  } else {
    setSuccessFor(email)
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    alert("Enviado com Êxito, Aguarde o Contato da Empresa!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}