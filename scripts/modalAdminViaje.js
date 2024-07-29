function mostrarAdminViaje () {
  const modalTitle = document.querySelector("#infoModal .modal-title");
  const modalBody = document.querySelector("#infoModal .modal-body");

  modalTitle.innerHTML = "Detalle";
  modalBody.innerHTML = `
      <div class="container">
        <div class="mb-3">
          <label for="actionSelect" class="form-label">Acciones</label>
          <select class="form-select form-select-lg" name="actionSelect" id="actionSelect">
            <option selected>Consultar</option>
            <option value="copiar">Copiar</option>
            <option value="modificarLlaveViaje">Modificar llave Viaje</option>
            <option value="eliminar">Eliminar</option>
            <option value="cambiarForma">Cambiar n° forma</option>
            <option value="modificarLlaveLance">Modificar llave Lance</option>
            <option value="moverMuestreo">Mover Muestreo</option>
            <option value="eliminarMuestreo">Eliminar Muestreo</option>
            <option value="modificarOrigen">Modificar Origen</option>
            <option value="migrar">Migrar</option>
          </select>
        </div>
        <div id="dynamicContent" class="mt-3"></div>
      </div>
    `;

  const actionSelect = document.getElementById("actionSelect");
  const dynamicContent = document.getElementById("dynamicContent");

  actionSelect.addEventListener("change", function () {
    let content = "";
    switch (actionSelect.value) {
      case "copiar":
        content = `

    <input type="hidden" name="accion" value="copiar">

    <table class="table table-bordered tabla_blanca letra_small">
      <tbody><tr>
        <th></th>
        <th>Viaje actual</th>
        <th>Nuevo viaje</th>
      </tr>
      <tr>
        <td>Código Barco:</td>
        <td><input type="hidden" name="cod_barco_orig" value="940266">940266 </td>
        <td><input type="text" size="5" name="cod_barco_nuevo" value="940266"></td>
      </tr>
      <tr>
        <td>Nombre Barco:</td>
        <td><input type="hidden" name="nom_barco_orig" value="CONSTITUCION                                      ">CONSTITUCION                                      </td>
        <td><input type="hidden" name="nom_barco_nuevo" value="CONSTITUCION                                      ">CONSTITUCION                                      </td>
      </tr>
      <tr>
        <td>Fecha-hora recalada:</td>
        <td><input type="hidden" name="fhr_orig" value="18/05/2018 18:00">18/05/2018 18:00</td>
        <td><input type="text" size="20" name="fhr_nueva" value="18/05/2018 18:00"></td>
      </tr>
      <tr>
        <td>Pesquería:</td>
        <td><input type="hidden" name="cod_pesq_orig" value="21">21</td>
        <td><input type="hidden" name="cod_pesq_nueva" value="21">21</td>
      </tr>
      <tr>
        <td colspan="2" align="center"><input type="hidden" name="bd" value="IFOPTRX">
        <input type="radio" name="type_copy" value="BITACORA">Sólo Bitácora &nbsp;&nbsp;&nbsp;
        <input type="radio" name="type_copy" value="TODO" checked="">Todo el viaje</td>
        <td colspan="2" align="center"><input type="button" value="Copiar" onclick="copiar_viaje()"> </td>
      </tr>
    </tbody></table>

          `;
        break;
      case "modificarLlaveViaje":
        content = `

        <table class="table table-bordered tabla_blanca letra_small">
          <tbody><tr>
            <th></th>
            <th>Viaje actual</th>
            <th>Nuevo viaje</th>
          </tr>
          <tr>
            <td>Código Barco:</td>
            <td><input type="hidden" name="cod_barco_orig" value="940266">940266 </td>
            <td><input type="text" size="5" name="cod_barco_nuevo" value="940266"></td>
          </tr>
          <tr>
            <td>Nombre Barco:</td>
            <td><input type="hidden" name="nom_barco_orig" value="CONSTITUCION                                      ">CONSTITUCION                                      </td>
            <td><input type="hidden" name="nom_barco_nuevo" value="CONSTITUCION                                      ">CONSTITUCION                                      </td>
          </tr>
          <tr>
            <td>Fecha-hora recalada:</td>
            <td><input type="hidden" name="fhr_orig" value="18/05/2018 18:00">18/05/2018 18:00</td>
            <td><input type="text" size="20" name="fhr_nueva" value="18/05/2018 18:00"></td>
          </tr>
          <tr>
            <td>Fecha-hora zarpe:</td>
            <td><input type="hidden" name="fhz_orig" value="18/05/2018 02:00">18/05/2018 02:00</td>
            <td><input type="text" size="20" name="fhz_nueva" value="18/05/2018 02:00"></td>
          </tr>
          <tr>
            <td>Pesquería:</td>
            <td><input type="hidden" name="cod_pesq_orig" value="21">21</td>
            <td><input type="text" size="2" name="cod_pesq_nueva" value="21"></td>
          </tr>
          <tr>
            <input type="hidden" name="bd" value="IFOPTRX">
            <td colspan="3" align="center"><input type="button" value="Modificar" onclick="determina_lo_que_modifica()"></td>
          </tr>
        </tbody></table>

`;
        break;
      case "eliminar":
        content = `
        <table class="table table-bordered tabla_blanca letra_small" align="center">
      <tbody><tr valign="top">
        <th>Tabla</th>
        <th>Registros</th>
      </tr>      <tr valign="top">        <td> VIAJE</td>        <td align="center">1</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp; EXTRACCION</td>        <td align="center">1</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CAPTURA</td>        <td align="center">2</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MUESTREO_BIOLOGICO</td>        <td align="center">80</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MUESTREO_BIOLOGICO_PECES</td>        <td align="center">80</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MUESTREO_FREC_LONG</td>        <td align="center">2</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DETALLE_MUESTRA</td>        <td align="center">39</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DETALLE_MUESTRA_ESTADOS</td>        <td align="center">29</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PROPORCION_DE_ESPECIES</td>        <td align="center">2</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp; VIAJE_ADJUNTOS</td>        <td align="center">1</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp; VIAJE_FORMULARIO</td>        <td align="center">1</td>      </tr>      <tr valign="top">        <td>&nbsp;&nbsp;&nbsp; VIAJE_MUESTREADORES</td>        <td align="center">1</td>      </tr>      <tr valign="top">        <td> VIAJE_MUESTREADORES</td>        <td align="center">1</td>      </tr>
      <tr>
      <form name="confirma" method="get"></form>
        <input type="hidden" name="bd" value="IFOPTRX">
		 <input type="hidden" name="cod_barco_orig" value="940266"> 
        <input type="hidden" name="fhr_orig" value="18/05/2018 18:00"> 
        <td colspan="1" align="center"><b>¿Esta seguro de eliminar este viaje?<b></b></b></td>
        <td align="center"><input type="button" name="resp" value="Si" onclick="carga_pagina()">
            <input type="button" name="resp" value="No" onclick="oculta_frame()">
        </td>
      
      </tr>
    </tbody></table>
        `;
        break;
      case "cambiarForma":
        content = `<form id="formViaje" name="formViaje" action="" target="_self" method="post">
        <input type="hidden" id="accion" name="accion" value="">
        <input type="hidden" name="cod_barco_orig" value="940266">
        <input type="hidden" name="nom_barco_orig" value="CONSTITUCION                                      ">
        <input type="hidden" name="fhr_orig" value="18/05/2018 18:00">
        <input type="hidden" name="cod_pesq_orig" value="21">
        <input type="hidden" name="bd" value="IFOPTRX">
        <input type="hidden" name="lugar_muestreo" value="Array">
        
       
        <table class="table table-bordered tabla_blanca letra_small">
          <tbody><tr>
          <th>Barco</th>
            <th>Fecha-hora recalada</th>
            <th>Pesquería</th>
          </tr>
          <tr align="center">
            <td>940266 - CONSTITUCION                                      </td>
            <td>18/05/2018 18:00</td>
            <td>21</td>
          </tr>
        </tbody></table>
        <br><br><center class="blanco"><b>Seleccione formulario:</b></center><br>
        <div class="col-md-6"><table align="center" class=" table table-bordered tabla_blanca letra_small"><tbody><tr>
              <th align="left">IDIFOPDW_CM</th><td></td><td>2</td><td>2</td><td>2</td></tr><tr>
              <th align="left">IDIFOPDW_LUGAR</th><td>2</td><td>2</td><td>2</td><td>2</td></tr><tr>
              <th align="left">IDIFOPDW_FLOTA</th><td>2</td><td>2</td><td>2</td><td>2</td></tr><tr>
              <th align="left">TIPO_INGRESO</th><td>S</td><td>S</td><td>S</td><td>S</td></tr><tr>
              <th align="left">NRO_FORM</th><td><input type="radio" name="nro_form" value="1" checked="">&nbsp;1</td><td><input type="radio" name="nro_form" value="63">&nbsp;63</td><td><input type="radio" name="nro_form" value="110">&nbsp;110</td><td><input type="radio" name="nro_form" value="631">&nbsp;631</td></tr><tr>
              <th align="left">LUGAR</th><td>TIERRA</td><td>TIERRA</td><td>TIERRA</td><td>TIERRA</td></tr><tr>
              <th align="left">ARTE_DE_PESCA</th><td>CERCO</td><td>CERCO</td><td>CERCO</td><td>CERCO</td></tr><tr>
              <th align="left">FLOTA</th><td>ARTESANAL</td><td>ARTESANAL</td><td>ARTESANAL</td><td>ARTESANAL</td></tr><tr>
              <th align="left">SUB_PROYECTO</th><td>SEGUIMIENTO</td><td>SEGUIMIENTO</td><td>TEST</td><td>SEGUIMIENTO</td></tr><tr>
              <th align="left">PROYECTO</th><td>PCS</td><td>PCS</td><td>PCS</td><td>PCS</td></tr><tr>
              <th align="left">TIPO_PROYECTO</th><td>SEGUIMIENTO</td><td>SEGUIMIENTO</td><td>SEGUIMIENTO</td><td>SEGUIMIENTO</td></tr><tr>
              <th align="left">FUENTE</th><td>EMPRESA</td><td>EXB</td><td>TEST</td><td>TEST</td></tr>
          <tr>
            <td colspan="3" align="center">
              <br><input type="button" value="Guardar" onclick="guardar()"><br>
            </td>
          </tr>
        </tbody></table>
        </div>
      </form>`;
        break;
      case "modificarLlaveLance":
        content = `<form name="formViaje" method="get">    

        <table class="table table-bordered tabla_blanca letra_small">
          <tbody><tr>
            <th></th>
            <th>Lance actual</th>             
            <th>Lance nuevo</th> 
          </tr>
          <tr>
            <td>Código Barco:</td>
            <td><input type="hidden" id="cod_barco_orig" name="cod_barco_orig" value="940266">940266 </td>              
            <td></td>              
          </tr>            
          <tr>
            <td>Fecha-hora recalada:</td>
            <td><input type="hidden" name="fhr_orig" id="fhr_orig" value="18/05/2018 18:00">18/05/2018 18:00</td>             
            <td></td>              
          </tr>
          <tr>
            <td>Número lance:</td>
            <td><input type="text" size="3" maxlength="3" name="numLance_orig" id="numLance_orig" value=""></td>
            <td><input type="text" size="3" maxlength="3" name="numLance_nueva" id="numLance_nueva" value=""></td>
          </tr>
          <tr>
            <td>Fecha-hora lance:</td>
            <td><input type="text" size="16" maxlength="16" name="fhl_orig" id="fhl_orig" onkeypress="DataHora(event, this)" value=""></td>
            <td><input type="text" size="16" maxlength="16" name="fhl_nueva" id="fhl_nueva" onkeypress="DataHora(event, this)" value=""></td>
          </tr>
          <tr>
            <input type="hidden" name="bd" id="bd" value="IFOPTRX">
            <td colspan="3" align="center"><input type="button" value="Modificar" onclick="determina_lo_que_modifica()"></td>
          </tr>
        </tbody></table>
        
  </form>`;
        break;
      case "moverMuestreo":
            content = `<form name="formViaje" method="get">

          <table class="table table-bordered tabla_blanca letra_small">
            <tbody><tr>
              <th></th>
              <th>Viaje actual</th>                           
            </tr>
            <tr>
              <td>Cï¿½digo Barco:</td>
              <td><input type="hidden" name="cod_barco_orig" id="cod_barco_orig" value="940266">940266 </td>                            
            </tr>            
            <tr>
              <td>Fecha-hora recalada:</td>
              <td><input type="hidden" name="fhr_orig" id="fhr_orig" value="18/05/2018 18:00">18/05/2018 18:00</td>                           
            </tr>          
            <tr>
              <td>Tipo Muestreo:</td>
              <td><select name="tipo_muestreo" id="tipo_muestreo"><option value="25">AAMC</option><option value="21">AMAT</option><option value="26">AMTCI</option><option value="6">BIOLOGICO</option><option value="19">BIO_MAMIFEROS</option><option value="24">CAM</option><option value="15">CAP_LM</option><option value="27">CAPTURA_PECES</option><option value="18">CIAMT</option><option value="16">CNR</option><option value="22">DETALLE_CAPTURA</option><option value="23">IAMTM</option><option value="17">IOE</option><option value="7">LONGITUD</option><option value="9">PRESENCIA</option><option value="8">PROPORCION</option><option value="20">RAI</option></select></td>      
            </tr>
            <tr>
              <input type="hidden" name="bd" id="bd" value="IFOPTRX">
              <td colspan="3" align="center"><input type="button" value="Aceptar" onclick="determina_lo_que_modifica()"></td>
            </tr>
          </tbody></table>
       
    </form>`;
    break;
      case "eliminarMuestreo":
        content = `<form name="formViaje" method="get">

        <table class="table table-bordered tabla_blanca letra_small">
          <tbody><tr>
            <th></th>
            <th>Viaje actual</th>                           
          </tr>
          <tr>
            <td>Cï¿½digo Barco:</td>
            <td><input type="hidden" name="cod_barco_orig" id="cod_barco_orig" value="940266">940266 </td>                            
          </tr>            
          <tr>
            <td>Fecha-hora recalada:</td>
            <td><input type="hidden" name="fhr_orig" id="fhr_orig" value="18/05/2018 18:00">18/05/2018 18:00</td>                           
          </tr>          
          <tr>
            <td>Tipo Muestreo:</td>
            <td><select name="tipo_muestreo" id="tipo_muestreo"><option value="25">AAMC</option><option value="21">AMAT</option><option value="26">AMTCI</option><option value="6">BIOLOGICO</option><option value="19">BIO_MAMIFEROS</option><option value="24">CAM</option><option value="15">CAP_LM</option><option value="27">CAPTURA_PECES</option><option value="18">CIAMT</option><option value="16">CNR</option><option value="22">DETALLE_CAPTURA</option><option value="23">IAMTM</option><option value="17">IOE</option><option value="7">LONGITUD</option><option value="9">PRESENCIA</option><option value="8">PROPORCION</option><option value="20">RAI</option></select></td>      
          </tr>
          <tr>
            <input type="hidden" name="bd" id="bd" value="IFOPTRX">
            <td colspan="3" align="center"><input type="button" value="Aceptar" onclick="determina_lo_que_modifica()"></td>
          </tr>
        </tbody></table>
      
  </form>`;
        break;
      case "modificarOrigen":
        content = `<form name="formViaje" method="get">

          <table class="table table-bordered tabla_blanca letra_small">
            <tbody><tr>
              <th></th>
              <th>Viaje actual</th>                           
            </tr>
            <tr>
              <td>Código Barco:</td>
              <td><input type="hidden" name="cod_barco_orig" id="cod_barco_orig" value="940266">940266 </td>                            
            </tr>            
            <tr>
              <td>Fecha-hora recalada:</td>
              <td><input type="hidden" name="fhr_orig" id="fhr_orig" value="18/05/2018 18:00">18/05/2018 18:00</td>                           
            </tr>          
            <tr>
              <td>Tipo Muestreo:</td>
              <td><select name="tipo_muestreo" id="tipo_muestreo"><option value="25">AAMC</option><option value="21">AMAT</option><option value="26">AMTCI</option><option value="6">BIOLOGICO</option><option value="19">BIO_MAMIFEROS</option><option value="24">CAM</option><option value="15">CAP_LM</option><option value="27">CAPTURA_PECES</option><option value="18">CIAMT</option><option value="16">CNR</option><option value="22">DETALLE_CAPTURA</option><option value="23">IAMTM</option><option value="17">IOE</option><option value="7">LONGITUD</option><option value="9">PRESENCIA</option><option value="8">PROPORCION</option><option value="20">RAI</option></select></td>      
            </tr>
            <tr>
              <input type="hidden" name="bd" id="bd" value="IFOPTRX">
              <td colspan="3" align="center"><input type="button" value="Aceptar" onclick="determina_lo_que_modifica()"></td>
            </tr>
          </tbody></table>
       
    </form>`;
        break;
      case "migrar":
        content = `<table class="table table-bordered tabla_blanca letra_small" align="center">
      <tbody><tr>
            
              <td colspan="2" align="center"><b>Viaje a Migrar<b></b></b></td>
            </tr>
            <tr>
              <td>Código Barco:</td>
              <td><input type="hidden" name="cod_barco_orig" value="940266">940266</td>
            </tr>
            <tr>
              <td>Nombre Barco:</td>
              <td><input type="hidden" name="nom_barco_orig" value="CONSTITUCION                                      ">CONSTITUCION                                      </td>
            </tr>
            <tr>
              <td>Fecha-hora recalada:</td>
              <td><input type="hidden" name="fhr_orig" value="18/05/2018 18:00">18/05/2018 18:00</td>
            </tr>
            <tr>
              <td>Pesquería:</td>
              <td><input type="hidden" name="cod_pesq_orig" value="21">21</td>
            </tr>
            <tr>
           <form name="confirma" method="get"></form>
        <input type="hidden" name="bd" value="IFOPTRX">
     <input type="hidden" name="cod_barco_orig" value="940266"> 
        <input type="hidden" name="fhr_orig" value="18/05/2018 18:00"> 
         <input type="hidden" name="cod_pesq_orig" value="21"> 
        <td colspan="1" align="center"><b>¿Está seguro que desea migrar este viaje?<b></b></b></td>
        <td align="center"><input type="button" name="resp" value="Si" onclick="carga_pagina()">
            <input type="button" name="resp" value="No" onclick="oculta_frame()">
        </td>
          
            </tr>
          </tbody></table>`;
        break;
      default:
        content = "<p>Seleccione una opcion para ver detalles</p>";
        break;
    }
    dynamicContent.innerHTML = content;
  });

  var modal = new bootstrap.Modal(document.getElementById("infoModal"));
  modal.show();
}
