function Evento(){
  alert('Adicionado !')
}


function Evento() {
  const nome = document.getElementById("User").value;
  const acompanhantes = document.getElementById("quantity").value;

  // Validação dos dados
  if (nome === "") {
    alert("Por favor, insira seu nome.");
    return;
  }

  // Adicionar o nome e os acompanhantes a uma lista ou enviar para um servidor
  // ...

  alert(`Confirmação de presença de ${nome} com ${acompanhantes} acompanhantes.`);
}

$(document).ready(function() {
  $('.user img').fancybox();
});




var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
