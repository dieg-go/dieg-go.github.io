document
  .getElementById("mostrarEstadisticas")
  .addEventListener("click", showStats);
document
  .getElementById("ocultarEstadisticas")
  .addEventListener("click", hideStats);

function showStats() {
  let container = document.getElementById("containerEstadisticas");
  container.style.display = "block";

  // Populate card body
  let cardBody = container.querySelector(".card-body");
  cardBody.innerHTML = `
  <div class="row mb-3">
  <div class="col-md-8">
    <div class="card">
      <div class="card-body">
        <div class="row">
<div class="col-md-4 border-end">
  <h5>Viajes</h5>
            <div class="mb-2">
              <span>N° Viajes mes: 8 de 5</span>
            </div>

            <div class="mb-2 invisible">Placeholder</div>
            <div class="mb-2 invisible">Placeholder</div>

            <canvas id="viajesMuestreadosChart" height="300"></canvas>
          </div>
<div class="col-md-4 border-end">
            <h5>Muestreos</h5>
            <div class="mb-2">
              <span class="text-primary fw-bold">Longitud:</span>
              <span>15 de 10</span>
            </div>
            <div class="mb-2">
              <span class="text-warning fw-bold">Biologico:</span>
              <span>6 de 6</span>
            </div>
            <div class="mb-2">
              <span class="fw-bold" style="color: rgb(75, 192, 192)">Proporcion:</span>
              <span>7 de 8</span>
            </div>
            <canvas id="muestreosChart" height="300"></canvas>
          </div>
          <div class="col-md-4">
            <h5>Individuos</h5>
            <div class="mb-2">
              <span class="text-primary fw-bold">N° Ind Long::</span>
              <span>910 de 500</span>
            </div>
            <div class="mb-2">
              <span class="text-warning fw-bold">N° Ind Bio::</span>
              <span>210 de 250</span>
            </div>
            <div class="mb-2 invisible">Placeholder</div>
            <canvas id="indMuestreadosChart" height="300"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Cumplimiento</h5>
        <p>Pelagicos Zona Norte</p>
        <p>Marzo -2024</p>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>Mtr Longitud</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Mtr Biologico</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Mtr Proporcion</td>
              <td>7</td>
            </tr>
            <tr>
              <td>N Ind Longitud</td>
              <td>910</td>
            </tr>
            <tr>
              <td>N Ind Biologico</td>
              <td>210</td>
            </tr>
            <tr>
              <td>N Otolitos</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
`;

  // Viajes Muestreados Chart
  createChart(
    document.getElementById("viajesMuestreadosChart").getContext("2d"),
    "bar",
    ["1", "2", "3", "4"],
    [
      {
        label: "Viajes Muestreados",
        data: [2, 4, 1, 1],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
    "Viajes Muestreados",
    5
  );

  // Muestreos Chart
  createChart(
    document.getElementById("muestreosChart").getContext("2d"),
    "bar",
    ["1", "2", "3", "4"],
    [
      {
        label: "Longitud",
        data: [4, 7, 2, 2],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Biologico",
        data: [2, 3, 0, 1],
        backgroundColor: "rgba(255, 159, 64, 0.8)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "Proporcion",
        data: [2, 3, 1, 1],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
    "Muestreos",
    8
  );

  // Ind Muestreados Chart
  createChart(
    document.getElementById("indMuestreadosChart").getContext("2d"),
    "bar",
    ["1", "2", "3", "4"],
    [
      {
        label: "Longitud",
        data: [300, 500, 50, 60],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Biologico",
        data: [50, 100, 0, 60],
        backgroundColor: "rgba(255, 159, 64, 0.8)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
    "Ind Muestreados",
    600
  );
}

function hideStats() {
  document.getElementById("containerEstadisticas").style.display = "none";
}

function createChart(ctx, type, labels, datasets, title, yAxisMax) {
  return new Chart(ctx, {
    type: type,
    data: { labels, datasets },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: yAxisMax,
          ticks: { stepSize: 1 },
        },
      },
      plugins: {
        legend: { display: false },
        title: { display: true, text: title },
      },
    },
  });
}
