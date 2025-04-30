document.getElementById('form-curriculo').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const objetivo = document.getElementById('objetivo').value;
    const formacao = document.getElementById('formacao').value;
    const experiencias = document.getElementById('experiencias').value;
    const cursos = document.getElementById('cursos').value;
    const habilidades = document.getElementById('habilidades').value;
  
    const modelo = `
      <h2>${nome}</h2>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <h3>Objetivo Profissional</h3>
      <p>${objetivo}</p>
      <h3>Formação Acadêmica</h3>
      <p>${formacao}</p>
      <h3>Experiências Profissionais</h3>
      <p>${experiencias}</p>
      <h3>Cursos e Certificações</h3>
      <p>${cursos}</p>
      <h3>Habilidades e Competências</h3>
      <p>${habilidades}</p>
    `;
  
    document.getElementById('modelo-curriculo').innerHTML = modelo;
    document.getElementById('curriculo-gerado').style.display = 'block';
  });
  
  function gerarPDF() {
    const elemento = document.getElementById('modelo-curriculo');
    html2pdf().from(elemento).save('curriculo.pdf');
  }
  