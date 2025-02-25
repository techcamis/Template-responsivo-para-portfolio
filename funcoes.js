// JS PARA BOTÃO DE BAIXAR CV

document.getElementById("baixar_cv").addEventListener("click", function () {

  const link = document.createElement("a");

  link.href = "Currículo_Nome.pdf"; // Coloque o caminho do seu currículo aqui
  link.download = "Curriculo_Nome.pdf"; // Aqui você pode personalizar o nome do arquivo do seu currículo quando ele for baixado
  link.click();
});

// JS PARA BOTÃO DE ENVIAR EMAIL
document.getElementById("enviar_email").addEventListener("click", function () {
  
  const destinatario = "seuemail@gmail.com"; // Seu e-mail aqui
  const assunto = encodeURIComponent("Assunto do E-mail"); // Codifica assunto do e-mail
  const corpo = encodeURIComponent("Olá, este é o corpo do e-mail."); // Codifica o corpo do e-mail

  const link = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;

  window.location.href = link;
});