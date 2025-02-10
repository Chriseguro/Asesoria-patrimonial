document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('ctaButton');
    const formModal = document.getElementById('formModal');
    const closeButton = document.querySelector('.close-button');
  
    ctaButton.addEventListener('click', () => {
      formModal.style.display = 'flex';
    });
  
    closeButton.addEventListener('click', () => {
      formModal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === formModal) {
        formModal.style.display = 'none';
      }
    });
  });
  document.getElementById("enviarWhatsApp").addEventListener("click", function () {
    // Captura los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
  
    // URL de WhatsApp con datos prellenados
    const whatsappURL = `https://wa.me/524794284913?text=Hola,%20quiero%20una%20asesoría%20patrimonial.%20Mi%20nombre%20es:%20${encodeURIComponent(nombre)}%20mi%20correo%20es:%20${encodeURIComponent(email)}%20y%20mi%20teléfono%20es:%20${encodeURIComponent(telefono)}`;
  
    // Redirigir a WhatsApp
    window.open(whatsappURL, "_blank");
  });
  document.querySelector(".whatsapp-button").addEventListener("click", function () {
    const whatsappURL = `https://wa.me/524794284913?text=Hola,%20quiero%20ahorrar.%20Me%20interesa%20una%20asesoría%20patrimonial.`;
    window.open(whatsappURL, "_blank");
  });
  