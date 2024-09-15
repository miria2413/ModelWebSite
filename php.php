<?php

// Coleta os dados do formulário
$nome = $_POST['nome'];
$quantily = $_POST['quantily'];


// Cria o corpo da mensagem
$message = "Nome: " . $nome . "\n";
$message .= "Companhante: " . $quantily . "\n";

// Redireciona para a página de agradecimento
header("Location: obrigado.html");
exit;
?>