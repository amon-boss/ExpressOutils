function genererCV() {
  const nom = document.getElementById('nom').value;
  const poste = document.getElementById('poste').value;
  const desc = document.getElementById('description').value;
  const exp = document.getElementById('experiences').value;
  const form = document.getElementById('formations').value;
  const comp = document.getElementById('competences').value;
  const lang = document.getElementById('langues').value;

  const html = `
    <div id="cv">
      <h1>${nom}</h1>
      <h3>${poste}</h3>
      <h2>🗣️ À propos</h2>
      <p>${desc}</p>
      <h2>💼 Expériences</h2>
      <p>${exp.replace(/\n/g, "<br>")}</p>
      <h2>🎓 Formations</h2>
      <p>${form.replace(/\n/g, "<br>")}</p>
      <h2>🛠️ Compétences</h2>
      <p>${comp}</p>
      <h2>🌍 Langues</h2>
      <p>${lang}</p>
    </div>
  `;
  document.getElementById("result").innerHTML = html;
}

function telechargerPDF() {
  const element = document.getElementById("cv");
  if (!element) {
    alert("Génère d'abord le CV avant de télécharger.");
    return;
  }
  html2pdf().from(element).save("MonCV.pdf");
}
