function mostrarCargaXML () {
    const modalTitle = document.querySelector("#infoModal .modal-title");
    const modalBody = document.querySelector("#infoModal .modal-body");
    modalTitle.innerHTML = "Cargar XML en MP";
    modalBody.innerHTML = `
    <div class="container">
      <div class="mb-3">
        <label for="formFile" class="form-label">Cargar XML</label>
        <input class="form-control" type="file" id="formFile">
      </div>
    </div>
    `;
    var modal = new bootstrap.Modal(document.getElementById("infoModal"));
    modal.show();
  }