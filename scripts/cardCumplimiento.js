document.getElementById("btnCumplimiento").addEventListener("click", function () {
  const card = document.getElementById("cardCumplimiento");

  if (card.style.display === "none") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
    return;
  }
  const cardBody = document.querySelector("#cardCumplimiento .card-body");

  cardBody.innerHTML = `

  <h5 class="mb-3">Pelagicos Zona Norte </h5>
  <h6 class="text-muted">Marzo 2024</h6>
  <table class="table table-sm table-hover">
    <tbody>
      <tr><th>Mtr Longitud</th><td class="text-end fw-bold">15</td></tr>
      <tr><th>Mtr Biologico</th><td class="text-end fw-bold">6</td></tr>
      <tr><th>Mtr Proporcion</th><td class="text-end fw-bold">7</td></tr>
      <tr><th>N Ind Longitud</th><td class="text-end fw-bold">910</td></tr>
      <tr><th>N Ind Biologico</th><td class="text-end fw-bold">210</td></tr>
      <tr><th>N Otolitos</th><td class="text-end fw-bold">30</td></tr>
    </tbody>
  </table>

    `;
});
