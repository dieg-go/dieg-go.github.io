// ../scripts/modalBitacora.js

const lances = [
    {
        id: 1,
        fechaLance: "18-05-2018 10:00",
        especieObjetivo: "Anchoveta",
        fechaExtraccion: "18-05-2018 10:00",
        latitud: "39.2300",
        longitud: "73.1800",
        bitacora: {
            Captura: "captura",
            Descarte: "",
            Fauna: "",
            Presencia: "",
            Cap_Lm: "",
            Cnr: "",
            Ioe: "",
            Ciamt: "",
        },
        muestreo: {
            Longitud: "longitud",
            Proporcion: "Proporcion",
            Biologico: "Biologico",
            Mamiferos: "",
            Tortugas: "",
            Aves: "",
            Censo_Aves: "",
            Ataque_Lep_Aves: "",
        },
    },
    {
        id: 2,
        fechaLance: "18-05-2018 10:00",
        especieObjetivo: "Anchoveta",
        fechaExtraccion: "18-05-2018 10:00",
        latitud: "10.0000",
        longitud: "-70.0000",
        bitacora: {
            Captura: "",
            Descarte: "",
            Fauna: "",
            Presencia: "",
            Cap_Lm: "",
            Cnr: "",
            Ioe: "",
            Ciamt: "",
        },
        muestreo: {
            Longitud: "longitud",
            Proporcion: "Proporcion",
            Biologico: "Biologico",
            Mamiferos: "",
            Tortugas: "",
            Aves: "",
            Censo_Aves: "",
            Ataque_Lep_Aves: "",
        },
    },
    {
        id: 3,
        fechaLance: "18-05-2018 10:00",
        especieObjetivo: "Anchoveta",
        fechaExtraccion: "18-05-2018 10:00",
        latitud: "10.0000",
        longitud: "-70.0000",
        bitacora: {
            Captura: "",
            Descarte: "",
            Fauna: "Fauna",
            Presencia: "Presencia",
            Cap_Lm: "",
            Cnr: "",
            Ioe: "",
            Ciamt: "",
        },
        muestreo: {
            Longitud: "",
            Proporcion: "",
            Biologico: "",
            Mamiferos: "",
            Tortugas: "",
            Aves: "",
            Censo_Aves: "",
            Ataque_Lep_Aves: "",
        },
    },
    {
        id: 4,
        fechaLance: "18-05-2018 10:00",
        especieObjetivo: "Anchoveta",
        fechaExtraccion: "18-05-2018 10:00",
        latitud: "10.0000",
        longitud: "-70.0000",
        bitacora: {
            Captura: "",
            Descarte: "",
            Fauna: "",
            Presencia: "",
            Cap_Lm: "",
            Cnr: "",
            Ioe: "",
            Ciamt: "",
        },
        muestreo: {
            Longitud: "",
            Proporcion: "",
            Biologico: "",
            Mamiferos: "",
            Tortugas: "",
            Aves: "",
            Censo_Aves: "",
            Ataque_Lep_Aves: "",
        },
    },
];

function mostrarBitacora() {
    const modalTitle = document.querySelector("#infoModal .modal-title");
    const modalBody = document.querySelector("#infoModal .modal-body");

    modalTitle.innerHTML = "Extracción";

    fetch("templates/bitacora.html")
        .then((response) => response.text())
        .then((html) => {
            modalBody.innerHTML = html;
            inicializarTablaLances();
        });

    var modal = new bootstrap.Modal(document.getElementById("infoModal"));
    modal.show();
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
      
}

function inicializarTablaLances() {
    var table = $("#tablaLances").DataTable({
        data: lances,
        columns: [
            { data: "id" },
            { data: "fechaLance" },
            { data: "especieObjetivo" },
            // { data: "fechaExtraccion" },
            // { data: "longitud" },
            // { data: "latitud" },
            // {
            //     data: null,
            //     render: function (data, type, row) {
            //         return (
            //             '<button type="button" class="btn btn-sm btn-outline-primary" onClick="mostrarMapa(' +
            //             row.longitud +
            //             "," +
            //             row.latitud +
            //             "," +
            //             row.id +')"><i class="fas fa-map-marker-alt"></i></button>'
            //         );
            //     },
            // },
            {
                data: "bitacora",
                render: function (data, type, row) {
                    return createDropdown(row.id, "Bitacora", data);
                },
            },
            {
                data: "muestreo",
                render: function (data, type, row) {
                    return createDropdown(row.id, "Muestreo", data);
                },
            },
        ],
        columnDefs: [
            { targets: 0, className: "align-middle text-left" },
            { targets: 1, className: "align-middle text-left" },
            { targets: 2, className: "align-middle text-left" },
            { targets: 3, className: "align-middle text-left" },
            { targets: 4, className: "align-middle text-left" },
            // { targets: 5, className: "align-middle text-center" },
            { targets: "_all", className: "align-middle" },
        ],
        language: {
            url: "https://cdn.datatables.net/plug-ins/2.1.0/i18n/es-CL.json",
        },
        responsive: true,
        fixedHeader: true,
        scrollY: 300,
        scrollX: true,
        scroller: true        
    });

    $('#tablaLance_weapper').on('scroll', function () {
        table.fixedHeader.adjust();
    });

    crearCardBitacoraCaptura1();
    crearCardMuestreoLongitud1();
    cardMuestreoProporcion1();
    cardMuestreoBiologico1();
}

function mostrarMapa(lat, lng, id) {
    var win = window.open("../templates/mapa.html?lat=" + lat + "&lng=" + lng + "&id=" + id, "Lances", "resizable=false,width=600,height=420");
}

function createDropdown(id, type, data) {
    const hasValues = Object.values(data).some((value) => value !== "");
    // const buttonClass = hasValues ? "btn-primary" : "btn-secondary";

    const items = Object.entries(data).map(([key, value]) => {
        const itemClass = value ? "btn-primary" : "btn-outline-secondary disabled";
        return `
                <button type="button" class="btn btn-sm w-100 mx-1 my-1 ${itemClass}"
                    id="${type}-${key}-${id}"
                    onclick="window.open('/templates/extraccion/${type}${key}${id}.html',  '_blank')">${key}
                </button>`;
    });

    const half = Math.ceil(items.length / 2);
    const firstHalf = items.slice(0, half).join("");
    const secondHalf = items.slice(half).join("");

    return `
        <div class="d-flex justify-content-between">
            ${firstHalf}
        </div>

        <div class="d-flex justify-content-between">
            ${secondHalf}
        </div>`;

    // return `
    // <div class="dropdown">
    //     <button class="btn ${buttonClass} btn-sm dropdown-toggle" type="button" id="dropdown${type}${id}" data-toggle="dropdown" aria-expanded="false" ${!hasValues ? "disabled" : ""}>
    //         <i class="fa-solid fa-ellipsis"></i>
    //     </button>
    //     <ul class="dropdown-menu" aria-labelledby="dropdown${type}${id}">
    //         ${items}
    //     </ul>
    // </div>
    // `;
}

function showCard(type, key, id) {
    const cardId = `card${type}${key}${id}`;
    const card = document.getElementById(cardId);

    if (card) {
        card.style.display = "block";
        const title = card.querySelector(".card-title");
        title.textContent = `${type}: ${key}`;
    } else {
        console.warn(`Card with id ${cardId} not found`);
    }
}

function crearCardBitacoraCaptura1() {
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });

    fetch("adjuntos/v3_940266_18_05_2018_20_32.xml")
        .then((response) => response.text())
        .then((xmlText) => {
            const fishNames = {
                33: "SARDINA COMUN",
                114: "ANCHOVETA",
            };
            let parsedData = parser.parse(xmlText);
            const capturas = parsedData.VIAJE.EXTRACCION.CAPTURA.ESPECIE.flatMap((e) => e || []);
            $("#cardBitacoraCaptura1 table").DataTable({
                data: capturas.map((c) => [fishNames[c["@_COD_ESPECIE"]] || c["@_COD_ESPECIE"], c["@_COD_ESPECIE"], c.PESO["@_VALOR"]]),
                columns: [{ title: "Especie" }, { title: "Codigo Especie" }, { title: "Peso" }],
            });

            // $("#cardBitacoraCaptura1").show();
        })
        .catch((error) => console.error("Error:", error));
}

function crearCardMuestreoLongitud1() {
    const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_",
    });

    fetch("adjuntos/v3_940266_18_05_2018_20_32.xml")
        .then((response) => response.text())
        .then((xmlText) => {
            let parsedData = parser.parse(xmlText);

            const fishNames = {
                33: "SARDINA COMUN",
                114: "ANCHOVETA",
            };

            const longitudes = parsedData.VIAJE.EXTRACCION.LONGITUD.flatMap((l) => l.ESPECIE || []);
            const tableData = longitudes.flatMap((especie) =>
                especie.ESPECIMEN.map((especimen) => [
                    fishNames[especie["@_COD_ESPECIE"]] || especie["@_COD_ESPECIE"],
                    especimen.LONGITUD["@_VALOR"],
                    especimen.SEXO["@_VALOR"],
                    especimen.E_1["@_VALOR"],
                    especimen.E_2["@_VALOR"],
                    especimen.E_3["@_VALOR"],
                    especimen.E_4["@_VALOR"],
                    especimen.E_5["@_VALOR"],
                    especimen.N_INDIVIDUOS["@_VALOR"],
                ])
            );

            $("#cardMuestreoLongitud1 table").DataTable({
                data: tableData,
                columns: [
                    { title: "Especie" },
                    { title: "Longitud" },
                    { title: "Sexo" },
                    { title: "E_1" },
                    { title: "E_2" },
                    { title: "E_3" },
                    { title: "E_4" },
                    { title: "E_5" },
                    { title: "N_INDIVIDUOS" },
                ],
                responsive: true,
                fixedHeader: true
            });

            // $("#cardMuestreoLongitud1").show();
        })
        .catch((error) => console.error("Error:", error));
}

function cardMuestreoProporcion1() {
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });

    fetch("adjuntos/v3_940266_18_05_2018_20_32.xml")
        .then((response) => response.text())
        .then((xmlText) => {
            let parsedData = parser.parse(xmlText);
            const proporciones = parsedData.VIAJE.EXTRACCION.PROPORCION.CAJA.REGISTRO.map((r) => ({
                ...r,
                NRO_CAJA: parsedData.VIAJE.EXTRACCION.PROPORCION.CAJA["@_NRO_CAJA"],
                ORIGEN_MUESTRA: parsedData.VIAJE.EXTRACCION.PROPORCION.CAJA["@_ORIGEN_MUESTRA"],
                LUGAR_MUESTREO_PE: parsedData.VIAJE.EXTRACCION.PROPORCION.CAJA["@_LUGAR_MUESTREO_PE"],
                PESO_TOTAL_MUESTRA_PE: parsedData.VIAJE.EXTRACCION.PROPORCION.CAJA["@_PESO_TOTAL_MUESTRA_PE"],
            }));

            $("#cardMuestreoProporcion1 table").DataTable({
                data: proporciones.map((p) => [
                    getNombrePescado(p.COD_ESPECIE["@_VALOR"]),
                    p.COD_ESPECIE["@_VALOR"],
                    p.ESTADO_ESPECIMEN["@_VALOR"],
                    p.FRECUENCIA["@_VALOR"],
                    p.PESO["@_VALOR"],
                    p.EJEM_POR_LITRO["@_VALOR"],
                    p.PESO_POR_LITRO["@_VALOR"],
                    p.NRO_CAJA,
                    p.ORIGEN_MUESTRA,
                    p.LUGAR_MUESTREO_PE,
                    p.PESO_TOTAL_MUESTRA_PE,
                ]),
                columns: [
                    { title: "Especie" },
                    { title: "Codigo Especie" },
                    { title: "ESTADO_ESPECIMEN" },
                    { title: "FRECUENCIA" },
                    { title: "PESO" },
                    { title: "EJEM_POR_LITRO" },
                    { title: "PESO_POR_LITRO" },
                    { title: "NRO_CAJA" },
                    { title: "ORIGEN_MUESTRA" },
                    { title: "LUGAR_MUESTREO_PE" },
                    { title: "PESO_TOTAL_MUESTRA_PE" },
                ],
                responsive: true,
                fixedHeader: true
            });

            // $("#cardBitacoraProporcion1").show();
        })
        .catch((error) => console.error("Error:", error));
}

function cardMuestreoBiologico1() {
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
    fetch("adjuntos/v3_940266_18_05_2018_20_32.xml")
        .then((response) => response.text())
        .then((xmlText) => {
            let parsedData = parser.parse(xmlText);

            const biologico = []
                .concat(parsedData.VIAJE.EXTRACCION.BIOLOGICO.ESPECIE)
                .flatMap((especie) =>
                    []
                        .concat(especie.ESPECIMEN)
                        .map((esp) => [
                            getNombrePescado(especie["@_COD_ESPECIE"]),
                            esp.N_ESPECIMEN["@_VALOR"],
                            esp.LONGITUD_ESPECIMEN["@_VALOR"],
                            esp.PESO_ESPECIMEN["@_VALOR"],
                            esp.SEXO_ESPECIMEN["@_VALOR"],
                            esp.MADUREZ["@_VALOR"],
                            esp.PESO_EVISCERADO["@_VALOR"],
                            esp.PESO_GONADAS["@_VALOR"],
                            esp.PESO_ESTOMAGO["@_VALOR"],
                            esp.MUESTRA_GONADA["@_VALOR"],
                            esp.MUESTRA_ESTOMAGO["@_VALOR"],
                            esp.NUMERO_OTOLITOS["@_VALOR"],
                            esp.NUMERO_OTOLITOS["@_VALOR"],
                            esp.ESTADO_ESTOMAGO["@_VALOR"],
                            esp.REPLECION["@_VALOR"],
                            especie["@_COD_ESPECIE"],
                            especie["@_ORIGEN_MUESTRA"],
                            especie["@_LUGAR_MUESTREO_BIO"],
                            especie["@_TIPO_MUESTRA_BIO"],
                            especie["@_TIPO_LONGITUD_BIO"],
                        ])
                );

            // console.log(biologico[0]);

            $("#cardMuestreoBiologico1 table").DataTable({
                data: biologico,
                columns: [
                    { title: "Especie" },
                    { title: "N_ESPECIMEN" },
                    { title: "LONGITUD_ESPECIMEN" },
                    { title: "PESO_ESPECIMEN" },
                    { title: "SEXO_ESPECIMEN" },
                    { title: "MADUREZ" },
                    { title: "PESO_EVISCERADO" },
                    { title: "PESO_GONADAS" },
                    { title: "PESO_ESTOMAGO" },
                    { title: "MUESTRA_GONADA" },
                    { title: "MUESTRA_ESTOMAGO" },
                    { title: "MUESTRA_OTOLITOS" },
                    { title: "NUMERO_OTOLITOS" },
                    { title: "ESTADO_ESTOMAGO" },
                    { title: "REPLECION" },
                    { title: "CODIGO_ESPECIE" },
                    { title: "ORIGEN_MUESTRA" },
                    { title: "LUGAR_MUESTREO_BIO" },
                    { title: "TIPO_MUESTRA_BIO" },
                    { title: "TIPO_LONGITUD_BIO" },
                ],
                responsive: true,
                fixedHeader: true
            });

            $("#cardBitacoraBiologico").show();
        })
        .catch((error) => console.error("Error:", error));
}

function getNombrePescado(code) {
    const fishNames = {
        33: "SARDINA COMUN",
        114: "ANCHOVETA",
    };
    return fishNames[code] || code;
}
