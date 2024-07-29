// scripts\modalSIEM.js
function mostrarSIEM(){ 
    const modalTitle = document.querySelector("#infoModal .modal-title");
    const modalBody = document.querySelector("#infoModal .modal-body");
    modalTitle.innerHTML = "SIEM-e";
    modalBody.innerHTML = `
        <form>
  <div class="mb-3">
    <label for="lancesTotales" class="form-label">N° lances totales</label>
    <input type="number" class="form-control" id="lancesTotales">
  </div>
  <div class="mb-3">
    <label for="lancesCaptura" class="form-label">N° lances con captura</label>
    <input type="number" class="form-control" id="lancesCaptura">
  </div>
  <div class="mb-3">
    <label for="lancesMuestreados" class="form-label">N° lances muestreados</label>
    <input type="number" class="form-control" id="lancesMuestreados">
  </div>
  <div class="mb-3">
    <label for="muestreosRealizados" class="form-label">N° Muestreos realizados</label>
    <input type="number" class="form-control" id="muestreosRealizados">
  </div>
  <div class="mb-3">
    <label for="ejemplaresMuestreo" class="form-label">N° ejemplares por muestreo</label>
    <input type="number" class="form-control" id="ejemplaresMuestreo">
  </div>
  <div class="mb-3">
    <label for="estructuras" class="form-label">N° de estructuras</label>
    <input type="number" class="form-control" id="estructuras">
  </div>
</form>

    `;

    // Show the modal    
    var modal = new bootstrap.Modal(document.getElementById("infoModal"));
    modal.show();
  }
