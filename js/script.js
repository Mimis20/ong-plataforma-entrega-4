// Espera a página carregar antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
  
  // Seleciona o formulário e a div de feedback
  const form = document.getElementById("formCadastro");
  const feedback = document.getElementById("feedback");

  // Adiciona um evento quando o formulário é enviado
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado de verdade

    // Limpa mensagens anteriores
    feedback.innerHTML = "";
    
    // Pega os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Cria um array para armazenar mensagens de erro
    let erros = [];

    // Valida cada campo
    if (nome === "") {
      erros.push("Por favor, preencha o Nome.");
    }
    if (email === "") {
      erros.push("Por favor, preencha o E-mail.");
    } else if (!validateEmail(email)) {
      erros.push("Por favor, insira um E-mail válido.");
    }
    if (mensagem === "") {
      erros.push("Por favor, preencha a Mensagem.");
    }

    // Se houver erros, mostra na tela
    if (erros.length > 0) {
      feedback.innerHTML = erros.map(erro => `<p style="color:red;">${erro}</p>`).join("");
    } else {
      // Se não houver erros, mostra mensagem de sucesso
      feedback.innerHTML = `<p style="color:green;">Cadastro enviado com sucesso! Obrigado, ${nome}.</p>`;
      
      // Limpa os campos do formulário
      form.reset();
    }
  });

  // Função para validar e-mail
  function validateEmail(email) {
    // Regex simples para verificar se o e-mail tem formato correto
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

});
