function mostrarAdjuntos() {
    const data = {
        totalArchivos: 3,
        adjuntos: [
          // { id: 157722, nombreArchivo: "report_2023_03_15.pdf" },
          { id: 157724, nombreArchivo: "Bit023-12-04 at 12.31.30.jpeg", tituloArchivo: "Bitácora" },
          { id: 157723, nombreArchivo: "", tituloArchivo: "Muestreo de Proporción de especies" },
          { id: 157724, nombreArchivo: "", tituloArchivo: "Muestreo de Longitud" },
          { id: 157724, nombreArchivo: "", tituloArchivo: "Muestreo Biológico" },
          { id: 157721, nombreArchivo: "v3_940266_18_05_2018_20_32.xml", tituloArchivo: "v3_940266_18_05_2018_20_32.xml" },
            // { id: 157724, nombreArchivo: "Informe 04.pdf", tituloArchivo: "Informe 04" },

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

function openPreviewPopup(content, title) {
  const popupWindow = window.open('', '_blank', 'width=800,height=600,resizable=yes,scrollbars=yes');
  popupWindow.document.write(`
      <html>
          <head>
              <title>${title}</title>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback" />
              <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                  integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
                  crossorigin="anonymous"
                  referrerpolicy="no-referrer"
              />
              <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/css/adminlte.min.css"
                  integrity="sha512-IuO+tczf4J43RzbCMEFggCWW5JuX78IrCJRFFBoQEXNvGI6gkUw4OjuwMidiS4Lm9Q2lILzpJwZuMWuSEeT9UQ=="
                  crossorigin="anonymous"
                  referrerpolicy="no-referrer"
              />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.0/codemirror.min.css">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.0/theme/monokai.min.css">
              <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
              <script
                  src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
                  crossorigin="anonymous"
              ></script>
              <script
                  src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0/js/adminlte.min.js"
                  integrity="sha512-KBeR1NhClUySj9xBB0+KRqYLPkM6VvXiiWaSz/8LCQNdRpUm38SWUrj0ccNDNSkwCD9qPA4KobLliG26yPppJA=="
                  crossorigin="anonymous"
                  referrerpolicy="no-referrer"
              ></script>              
              <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.0/codemirror.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.0/mode/xml/xml.min.js"></script>
          </head>
          <body>
              <div class="wrapper" id="previewContainer">
                  <div class="card" id="previewBody"> </div>
              </div>
              <script>
                  ${content}
              </script>
          </body>
      </html>
  `);
  popupWindow.document.close();
}

function previsualizarAdjunto(nombreArchivo, tituloArchivo) {
  const extension = nombreArchivo.split(".").pop().toLowerCase();
  let content = '';

  if (extension === "pdf") {
      content = `
          const url = '/adjuntos/${nombreArchivo}';
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
      `;
  } else if (extension === "xml") {
      content = `
          fetch('/adjuntos/${nombreArchivo}')
              .then((response) => response.text())
              .then((data) => {
                  const editor = CodeMirror(document.getElementById("previewBody"), {
                      value: data,
                      mode: "xml",
                      lineNumbers: true,
                      readOnly: true,
                      theme: "monokai",
                  });
                  editor.setSize("100%", "100%");
              });
      `;
  } else if (extension === "jpg" || extension === "jpeg" || extension === "png") {
      content = `
          const img = document.createElement("img");
          img.style.maxWidth = "100%";
          img.src = '/adjuntos/${nombreArchivo}';
          document.getElementById("previewBody").appendChild(img);
      `;
  } else {
      content = `
          document.getElementById("previewBody").innerHTML = '
              <div class="alert alert-info">
                  <i class="fas fa-info-circle"></i> No se pudo previsualizar el archivo.
              </div>
          ';
      `;
  }

  openPreviewPopup(content, `Vista Previa: ${tituloArchivo}`);
}