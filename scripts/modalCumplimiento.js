document
  .getElementById("mostrarCumplimiento")
  .addEventListener("click", function () {
    const modalBody = document.querySelector("#infoModal .modal-body");

    // Populate modal with data
    modalBody.innerHTML = `

    <h1> cumplimiento aca </h1>
    `;

    // Show the modal
    var modal = new bootstrap.Modal(document.getElementById("infoModal"));
    modal.show();
  });