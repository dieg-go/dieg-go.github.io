document
  .getElementById("btnEstadisticas")
  .addEventListener("click", function () {
    const accordionBody = document.querySelector(
      "#estadisticasBody .accordion-body"
    );

    accordionBody.innerHTML = `
        <div class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        </div>
    `;

    setTimeout(() => {
      accordionBody.innerHTML = `<div class="row mb-3">
  <div class="col-md-8">
    <div class="card h-100">
      <div class="card-body">
        <div class="row h-100">
          <div class="col-md-4 border-end">
            <div class="d-flex flex-column h-100">
              <div>
                <h5 class="card-title">Viajes</h5>
                <p>N° Viajes mes: <span class="fw-bold">8 de 5</span></p>
              </div>
              <div class="mt-auto">
                <canvas id="viajesMuestreadosChart" height="300"></canvas>
              </div>
            </div>
          </div>
          <div class="col-md-4 border-end">
            <div class="d-flex flex-column h-100">
              <div>
                <h5 class="card-title">Muestreos</h5>
                <p><span class="text-primary fw-bold">Longitud:</span> 15 de 10</p>
                <p><span class="text-warning fw-bold">Biologico:</span> 6 de 6</p>
                <p><span class="fw-bold" style="color: rgb(75, 192, 192)">Proporcion:</span> 7 de 8</p>
              </div>
              <div class="mt-auto">
                <canvas id="muestreosChart" height="300"></canvas>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex flex-column h-100">
              <div>
                <h5 class="card-title">Individuos</h5>
                <p><span class="text-primary fw-bold">N° Ind Long:</span> 910 de 500</p>
                <p><span class="text-warning fw-bold">N° Ind Bio:</span> 210 de 250</p>
              </div>
              <div class="mt-auto">
                <canvas id="indMuestreadosChart" height="300"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">Cumplimiento</h5>
        <div class="mt-auto mb-auto">
          <canvas id="cumplimientoChart" height="300"></canvas>
        </div>
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

      // Cumplimiento Chart
      const ctx = document.getElementById("cumplimientoChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["PZN", "PCS", "BEN", "CB"],
          datasets: [
            {
              label: "Cumplimiento",
              data: [60, 100, 70, 100],
              backgroundColor: ["#4472C4", "#4472C4", "#4472C4", "#4472C4"],
              borderColor: ["#4472C4", "#4472C4", "#4472C4", "#4472C4"],
              borderWidth: 1,
              
            },
          ],
        },
        options: {
          indexAxis: "y",
          plugins: {
            title: {
              display: true,
              text: "Todos los proyectos",
            },
            subtitle: {
              display: true,
              text: "Marzo - 2024",
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 100,
              ticks: {
                callback: function (value) {
                  return value + "%";
                },
              },
            },
          },
          
        },
      });
    }, 2000);
  });

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
