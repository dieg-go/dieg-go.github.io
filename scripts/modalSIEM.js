// scripts\modalSIEM.js
function mostrarSIEM(){ 
    const modalTitle = document.querySelector("#infoModal .modal-title");
    const modalBody = document.querySelector("#infoModal .modal-body");
    modalTitle.innerHTML = "SIEM-e";

    fetch("templates/siem.html")
        .then((response) => response.text())
        .then((data) => {
            modalBody.innerHTML = data;
        });

    // Show the modal    
    var modal = new bootstrap.Modal(document.getElementById("infoModal"));
    modal.show();
  }
