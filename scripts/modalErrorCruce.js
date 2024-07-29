function mostrarErrorCruce() {
  const modalTitle = document.querySelector("#infoModal .modal-title");
  const modalBody = document.querySelector("#infoModal .modal-body");

  const comparisonData = {
    title: "Comparación SID_MP y SIEM",
    headers: ["", "SID_MP", "SIEM"],
    rows: [
      { label: "Observ. Cientifico(s):", sidmp: "16321187-4 ISRAEL YONATAN OYARZO GONZALEZ", siem: " - " },
      { label: "Cód. Barco:", sidmp: "940266", siem: "940266" },
      { label: "Nombre barco:", sidmp: "CONSTITUCION", siem: "CONSTITUCION" },
      { label: "Fecha-Hora Zarpe:", sidmp: "18-05-2018 02:00:00", siem: "18-05-2018 02:00:00" },
      { label: "Fecha-Hora Recalada:", sidmp: "18-05-2018 18:00:00", siem: "18-05-2018 18:00:00" },
      { label: "Lances totales:", sidmp: "1", siem: "1" },
      { label: "Lances muestreados:", sidmp: "1", siem: "1" },
    ],
  };

  const sidmpData = {
    title: "SID_MP",
    headers: ["Actividad", "Especie", "Muest. Realiz.", "Tot. Ejempl.", "Nº. Estructuras."],
    rows: [
      { actividad: "Proporcion", especie: "-", muestRealiz: "1", totEjempl: "-", numEstructuras: "-" },
      { actividad: "Longitud", especie: "33", muestRealiz: "1", totEjempl: "0", numEstructuras: "-" },
      { actividad: "Longitud", especie: "114", muestRealiz: "1", totEjempl: "0", numEstructuras: "-" },
      { actividad: "Biologico", especie: "33", muestRealiz: "1", totEjempl: "80", numEstructuras: "-" },
      { actividad: "Gonadas", especie: "33", muestRealiz: "1", totEjempl: "16", numEstructuras: "-" },
      { actividad: "Estomagos", especie: "33", muestRealiz: "1", totEjempl: "4", numEstructuras: "-" },
    ],
  };

  const siemData = {
    title: "SIEM",
    headers: ["Actividad", "Especie", "Muest. Realiz.", "Tot. Ejempl.", "Nº. Estructuras."],
    rows: [
      { actividad: "Proporcion", especie: "-", muestRealiz: "1", totEjempl: "-", numEstructuras: "-" },
      { actividad: "Longitud", especie: "33", muestRealiz: "1", totEjempl: "108", numEstructuras: "-" },
      { actividad: "Longitud", especie: "114", muestRealiz: "1", totEjempl: "99", numEstructuras: "-" },
      { actividad: "Biologico", especie: "33", muestRealiz: "1", totEjempl: "80", numEstructuras: "-" },
      { actividad: "Gonadas", especie: "33", muestRealiz: "1", totEjempl: "16", numEstructuras: "-" },
      { actividad: "Estomagos", especie: "33", muestRealiz: "1", totEjempl: "4", numEstructuras: "-" },
    ],
  };

  // Generate HTML from data objects
  modalTitle.innerHTML = comparisonData.title;
  modalBody.innerHTML = generateComparisonTable(comparisonData) + '<div class="row">' + generateDataTable(sidmpData, siemData) + generateDataTable(siemData, sidmpData) + "</div>";
  // Show the modal
  var modal = new bootstrap.Modal(document.getElementById("infoModal"));
  modal.show();
}

function generateComparisonTable(data) {
  let html = '<table class="table"><tr>';
  data.headers.forEach((header) => (html += `<th>${header}</th>`));
  html += "</tr>";
  data.rows.forEach((row) => {
    html += `<tr>
          <td>${row.label}</td>
          <td class="${row.sidmp !== row.siem ? 'table-warning' : ''}">${row.sidmp}</td>
          <td class="${row.sidmp !== row.siem ? 'table-warning' : ''}">${row.siem}</td>
      </tr>`;
  });
  return html + "</table>";
}

function generateDataTable(data, compareData) {
  let html = `<table class="table table-sm"><h5>${data.title}</h5><tr>`;
  data.headers.forEach((header) => (html += `<th>${header}</th>`));
  html += "</tr>";
  data.rows.forEach((row, i) => {
    html += "<tr>";
    Object.entries(row).forEach(([key, value]) => {
      const compareValue = compareData ? compareData.rows[i][key] : value;
      const className = value !== compareValue ? "table-warning" : "";
      html += `<td class="${className}">`;
      if (data.title === "SIEM" && className === "table-warning") {
        html += `<input type="text" class="form-control form-control-sm" value="${value}">`;
      } else {
        html += value;
      }
      html += "</td>";
    });
    html += "</tr>";
  });
  return html + "</table>";
}

