document
  .getElementById("mostrarEstadisticas")
  .addEventListener("click", function () {
    const modalBody = document.querySelector("#infoModal .modal-body");
    const modalTitle = document.querySelector("#infoModal .modal-title");

    modalTitle.innerHTML = "Estadisticas generales";

    // Populate modal with data
    modalBody.innerHTML = `<div class="container">
    <div class="row mb-3">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">N° Viajes mes: 8 de 5</h5>
            <div class="row">
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">                  
                    <canvas id="viajesMuestreadosChart" height="200"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <canvas id="muestreosChart" height="200"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <canvas id="indMuestreadosChart" height="200"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="col-md-4">
      <div class="card">
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
  </div>`;

    // After setting modalBody.innerHTML, add this code:

    // Create the Viajes Muestreados chart
    // Function to create charts
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

    // Show the modal
    var modal = new bootstrap.Modal(document.getElementById("infoModal"));
    modal.show();
  });
