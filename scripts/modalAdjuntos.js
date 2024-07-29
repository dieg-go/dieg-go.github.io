function mostrarAdjuntos() {
    const data = {
        totalArchivos: 3,
        adjuntos: [
            { id: 157721, nombreArchivo: "v3_940266_18_05_2018_20_32.xml", tituloArchivo: "Bitacora" },
            // { id: 157722, nombreArchivo: "report_2023_03_15.pdf" },
            { id: 157723, nombreArchivo: "", tituloArchivo: "Muestreo de Proporción de especies" },
            { id: 157724, nombreArchivo: "", tituloArchivo: "Muestreo de Longitud" },
            { id: 157724, nombreArchivo: "", tituloArchivo: "Muestreo Biológico" },
            { id: 157724, nombreArchivo: "Informe 04.pdf", tituloArchivo: "Informe 04" },
        ],
    };

    const modalTitle = document.querySelector("#infoModal .modal-title");
    const modalBody = document.querySelector("#infoModal .modal-body");

    modalTitle.innerHTML = "Adjuntos";
    modalBody.innerHTML = `
    <h5>Archivos Adjuntos (${data.totalArchivos})</h5>
    <ul class="list-group" id="adjuntosList"></ul>
    <div id="previewContainer"></div>
    <div class="mt-3">
      <h5>Agregar Adjunto</h5>
      <form action="/upload" method="post" enctype="multipart/form-data">
        <div class="input-group">
          <input type="file" class="form-control" id="fileUpload" name="fileUpload">
          <button class="btn btn-primary" type="submit">Subir</button>
        </div>
      </form>
    </div>
  `;

    const adjuntosList = document.getElementById("adjuntosList");
    data.adjuntos.forEach((adjunto) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";
        if (adjunto.nombreArchivo) {
            listItem.innerHTML = `
          <div>
            <a href="#" onclick="previsualizarAdjunto('${adjunto.nombreArchivo}', '${adjunto.tituloArchivo}'); return false;">${adjunto.tituloArchivo}</a>
          </div>
          <div>
            <button class="btn btn-primary btn-sm" onClick=>
              <i class="fas fa-download"></i>
            </button>
            <button class="btn btn-danger btn-sm">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        `;
        } else {
            listItem.innerHTML = `
            <div>
              <a href="#" onclick="${adjunto.nombreArchivo ? `previsualizarAdjunto('${adjunto.nombreArchivo}', '${adjunto.tituloArchivo}')` : "return false"};return false;" ${
                adjunto.nombreArchivo ? "" : 'style="pointer-events: none; color: gray;"'
            }>${adjunto.tituloArchivo}</a>
            </div>
            <div>
            
    <input type="file" id="fileUpload_${adjunto.id}" style="display: none;">
    <button class="btn btn-primary btn-sm" onclick="document.getElementById('fileUpload_${adjunto.id}').click()">
      <i class="fas fa-upload"></i>
    </button>

            </div>
          `;
        }

        adjuntosList.appendChild(listItem);
    });

    var modal = new bootstrap.Modal(document.getElementById("infoModal"));
    modal.show();
}

function previsualizarAdjunto(nombreArchivo, tituloArchivo) {
    const extension = nombreArchivo.split(".").pop().toLowerCase();
    const previewContainer = document.getElementById("previewContainer");

    previewContainer.innerHTML = `
    <div class="my-3 card card-outline card-primary">
      <div class="card-header">
        <h3 class="card-title">Vista Previa: ${tituloArchivo}</h3>
        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
        <div class="card-body" id="previewBody" style="max-height: 500px; overflow-y: auto;">
      </div>
    </div>
  `;

    if (extension === "pdf") {
        const url = `/adjuntos/${nombreArchivo}`;
        pdfjsLib.getDocument(url).promise.then((pdf) => {
            pdf.getPage(1).then((page) => {
                const scale = 1.5;
                const viewport = page.getViewport({ scale });
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                page.render({
                    canvasContext: context,
                    viewport: viewport,
                });

                document.getElementById("previewBody").appendChild(canvas);
            });
        });

        return;
    }

    if (extension === "xml") {
        fetch(`/adjuntos/${nombreArchivo}`)
            .then((response) => response.text())
            .then((data) => {
                const editor = CodeMirror(document.getElementById("previewBody"), {
                    value: data,
                    mode: "xml",
                    lineNumbers: true,
                    readOnly: true,
                    theme: "monokai",
                });
                editor.setSize(null, 400); // Set height to 400px
            });

        return;
    }

    document.getElementById("previewBody").innerHTML = `
                  <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i> No se pudo previsualizar el archivo.
                  </div>
                `;
}
