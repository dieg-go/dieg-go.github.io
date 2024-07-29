// ../scripts/tablaViajes.js
const datosViaje = [
    {
        codigoBarco: "940266",
        nombreBarco: "CONSTITUCION",
        fechaHoraRecalada: "18-05-2018 18:00",
        runOC: "16321187-4",
        nombreOC: "ISRAEL YONATAN OYARZO GONZALEZ",
        lugarMuestreo: "TIERRA",
        recepcion: "07-05-2019 16:46",
        estado: "Error de cruce",
    },
    {
        codigoBarco: "943370",
        nombreBarco: "COYI II",
        fechaHoraRecalada: "08-11-2023 08:22",
        runOC: "6520143-7",
        nombreOC: "JUAN ANTONIO RIOS BORDONES",
        lugarMuestreo: "EMBARCADO",
        recepcion: "09-11-2023 15:33",
        estado: "Bloqueado",
    },
    {
        codigoBarco: "940263",
        nombreBarco: "PELICANO",
        fechaHoraRecalada: "09-11-2023 07:45",
        runOC: "13211037-9",
        nombreOC: "PATRICIO MUÑOZ ORTIS",
        lugarMuestreo: "EMBARCADO",
        recepcion: "09-11-2023 16:40",
        estado: "IFOPING",
    },
    {
        codigoBarco: "943370",
        nombreBarco: "COYI II",
        fechaHoraRecalada: "09-11-2023 01:20",
        runOC: "10756822-0",
        nombreOC: "LUIS ANDRES GARCIA MADARIAGA",
        lugarMuestreo: "EMBARCADO",
        recepcion: "09-11-2023 16:50",
        estado: "Cruza Con SIEM",
    },
    {
        codigoBarco: "943370",
        nombreBarco: "COYI II",
        fechaHoraRecalada: "08-11-2023 08:22",
        runOC: "10708420-7",
        nombreOC: "JOSE HERNANDEZ",
        lugarMuestreo: "EMBARCADO",
        recepcion: "11-11-2023 22:32",
        estado: "IFOPTRX",
    },
    {
        codigoBarco: "943370",
        nombreBarco: "COYI II",
        fechaHoraRecalada: "09-11-2023 01:20",
        runOC: "10708420-7",
        nombreOC: "JOSE HERNANDEZ",
        lugarMuestreo: "EMBARCADO",
        recepcion: "12-11-2023 10:43",
        estado: "Cruza Con SIEM",
    },
    {
        codigoBarco: "945245",
        nombreBarco: "ABDON I",
        fechaHoraRecalada: "11-11-2023 18:15",
        runOC: "17996105-9",
        nombreOC: "MARIA JOSE JENERAL GONZALEZ",
        lugarMuestreo: "TIERRA",
        recepcion: "13-11-2023 13:09",
        estado: "IFOPING",
    },
    {
        codigoBarco: "945134",
        nombreBarco: "MAR TERCERO",
        fechaHoraRecalada: "09-11-2023 23:42",
        runOC: "12835870-6",
        nombreOC: "RODOLFO ZAMORANO ARGANDOÑA",
        lugarMuestreo: "TIERRA",
        recepcion: "13-11-2023 13:59",
        estado: "Bloqueado",
    },
    {
        codigoBarco: "940263",
        nombreBarco: "PELICANO",
        fechaHoraRecalada: "09-11-2023 07:45",
        runOC: "19348239-2",
        nombreOC: "CAMILO IGNACIO ARANCIBIA ARDILES",
        lugarMuestreo: "EMBARCADO",
        recepcion: "16-11-2023 12:06",
        estado: "Migrando",
    },
    {
        codigoBarco: "945055",
        nombreBarco: "CAROLINA I",
        fechaHoraRecalada: "09-11-2023 17:30",
        runOC: "16594002-4",
        nombreOC: "ANTONIO ROBERTO YOVICH MANZO",
        lugarMuestreo: "TIERRA",
        recepcion: "30-11-2023 11:04    ",
        estado: "Sin Siem",
    },
];

$(document).ready(function () {
    fetch("templates/viajes.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("cardBodyGrilla").innerHTML = data;
            inicializarTabla();
            $('input[name="tablaViajesRangoFechasRecalada"]').daterangepicker();
            $('input[name="tablaViajesRangoFechaRecepcion"]').daterangepicker();
        });
});

function inicializarTabla() {
    $("#tablaViajes").DataTable({
        data: datosViaje,
        columns: [
            {
                data: null,
                render: function (data, type, row, meta) {
                    return meta.row + 1;
                },
            },
            { data: "codigoBarco" },
            { data: "nombreBarco" },
            {
                data: "fechaHoraRecalada",
                render: function (data) {
                    return `<button type="button" class="btn btn-sm btn-primary w-75 btnMostrarBitacora">${data}</button>`;
                },
            },
            { data: "lugarMuestreo" },
            { data: "recepcion" },
            {
                data: "estado",
                render: function (data) {
                    let estadoInfo = getEstadoInfo(data);
                    return `<button type="button" class="btn btn-sm btn-${estadoInfo.class} btnMostrarErrorCruce" style="padding: 0; border: none; background: none;">
                            <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">${data}</span>
                            <img src="assets/estados/${estadoInfo.icon}" style="width: 40px; height: 40px;" alt="${data}" />
                    </button>`;
                },
            },
            { data: null, defaultContent: '<button type="button" class="btn btn-outline-primary btnMostrarAdjuntos"><i class="fas fa-paperclip"></i></button>' },
            // { data: null, defaultContent: '<button type="button" class="btn btn-outline-primary btnMostrarSIEM"><i class="fas fa-columns"></i></button>' },
            { data: null, defaultContent: '<button type="button" class="btn btn-outline-primary btnMostrarAdminViaje"><i class="fa-regular fa-file-lines"></i></button>' },
            { data: null, defaultContent: '<button type="button" class="btn btn-outline-primary btnMostrarDatosHist"><i class="fa-solid fa-vials"></i></button>' },
            { data: null, defaultContent: '<button type="button" class="btn btn-outline-primary btnMostrarCargaXML"><i class="fa-solid fa-upload"></i></button>' },
        ],
        columnDefs: [
            { targets: 0, width: "50px", className: "align-middle text-center" },
            { targets: 1, className: "align-middle text-left" },

            { targets: 3, width: "190px", className: "align-middle text-center" },
            { targets: 6, className: "align-middle text-center" },

            { targets: 7, width: "60px", className: "align-middle text-center" },
            { targets: 8, width: "60px", className: "align-middle text-center" },
            { targets: 9, width: "60px", className: "align-middle text-center" },
            { targets: 10, width: "60px", className: "align-middle text-center" },
            { targets: "_all", className: "align-middle" },
            // { targets: 11, width: "60px", className: "text-center" },
        ],
        language: {
            url: "https://cdn.datatables.net/plug-ins/2.1.0/i18n/es-CL.json",
        },
        responsive: true,
    });

    $("#tablaViajes").on("click", ".btnMostrarBitacora", mostrarBitacora);
    $("#tablaViajes").on("click", ".btnMostrarErrorCruce", mostrarErrorCruce);
    $("#tablaViajes").on("click", ".btnMostrarAdjuntos", mostrarAdjuntos);
    $("#tablaViajes").on("click", ".btnMostrarSIEM", mostrarSIEM);
    $("#tablaViajes").on("click", ".btnMostrarAdminViaje", mostrarAdminViaje);
    $("#tablaViajes").on("click", ".btnMostrarDatosHist", mostrarDatosHist);
    $("#tablaViajes").on("click", ".btnMostrarCargaXML", mostrarCargaXML);
}
function getEstadoInfo(estado) {
    switch (estado) {
        case "Sin Siem":
            return { class: "secondary", icon: "sin siem.png" };
        case "Cruza Con SIEM":
            return { class: "success", icon: "cruce de datos ok.png" };
        case "IFOPTRX":
            return { class: "info", icon: "ifoptrx.png" };
        case "IFOPING":
            return { class: "info", icon: "ifoping.png" };
        case "Bloqueado":
            return { class: "warning", icon: "bloqueado.png" };
        case "Migrando":
            return { class: "info", icon: "migrando.png" };
        case "Error de cruce":
            return { class: "danger", icon: "error de cruce.png" };

        default:
            return { class: "secondary", icon: "fas fa-question-circle" };
    }
}
