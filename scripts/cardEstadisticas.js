document.getElementById("btnEstadisticas").addEventListener("click", function () {
    const card = document.getElementById("cardEstadisticas");

    if (card.style.display === "none") {
        card.style.display = "block";
    } else {
        card.style.display = "none";
        return;
    }
    const cardBody = document.querySelector("#cardEstadisticas .card-body");

    fetch("templates/estadisticas.html")
        .then((response) => response.text())
        .then((html) => {
            cardBody.innerHTML = html;
            
            //Viajes Chart
            createChart(
                document.getElementById("viajesMuestreadosChart").getContext("2d"),
                "bar",
                ["Semana 1", "Semana 2", "Semana3", "Semana4"],
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
                ["Semana 1", "Semana 2", "Semana3", "Semana4"],
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
                ["Semana 1", "Semana 2", "Semana3", "Semana4"],
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

            // estadps Chart
            createChart(
                document.getElementById("estadosChart").getContext("2d"),
                "bar",
                ["Sin Siem", "Cruza Con SIEM", "IFOPTRX", "IFOPING", "Bloqueado", "Migrando", "Error de cruce"],
                [
                    {
                        label: "Viajes",
                        data: [1, 2, 1, 2, 2, 1, 1],
                        backgroundColor: [
                            // '#6c757d', '#28a745', '#17a2b8', '#17a2b8', '#ffc107', '#17a2b8', '#dc3545'
                            '#C9CBCF', '#4caf50', '#00bcd4', '#4BC0C0', '#ffeb3b', '#FF9F40', '#f44336'
                          ]
                    }
                        

                ],
                "Estados",
                5

            )

        $('input[name="estadisticasRangoFechas"]').daterangepicker()

        });


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
                // title: { display: true, text: title },
            },
        },
    });
}
