
document.getElementById('cvForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nom = document.getElementById('nom').value;
  const poste = document.getElementById('poste').value;
  const description = document.getElementById('description').value;
  const experiences = document.getElementById('experiences').value;
  const formation = document.getElementById('formation').value;
  const competences = document.getElementById('competences').value;
  const langues = document.getElementById('langues').value;

  const cvContent = document.createElement('div');
  cvContent.innerHTML = `
    <h1>\${nom}</h1>
    <h2>\${poste}</h2>
    <p><strong>À propos :</strong> \${description}</p>
    <h3>Expériences :</h3><ul>\${experiences.split('\n').map(e => '<li>' + e + '</li>').join('')}</ul>
    <h3>Formation :</h3><ul>\${formation.split('\n').map(e => '<li>' + e + '</li>').join('')}</ul>
    <h3>Compétences :</h3><p>\${competences}</p>
    <h3>Langues :</h3><p>\${langues}</p>
  `;

  const iframe = document.getElementById('cvFrame');
  iframe.style.display = 'block';
  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write('<html><head><title>CV</title></head><body>' + cvContent.innerHTML + '</body></html>');
  doc.close();

  document.getElementById('downloadBtn').style.display = 'inline-block';

  document.getElementById('downloadBtn').onclick = function () {
    html2pdf().from(cvContent).set({ margin: 1, filename: nom + "_CV.pdf" }).save();
  };
});
