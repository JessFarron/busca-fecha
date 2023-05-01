
function calcularDiaSemana() {
    const dia = document.getElementById("dia").value;
    const mes = document.getElementById("mes").value;
    const anio = document.getElementById("anio").value;
    
    // console.log(mes);
  
    // Transformamos a objeto con metodo 
    const fecha = new Date(`${mes}/${dia}/${anio}`);
  
    // bisiesto 
    let esBisiesto = false;
    if (anio % 4 === 0) {
      if (anio % 100 === 0) {
        if (anio % 400 === 0) {
          esBisiesto = true;
        }
      } else {
        esBisiesto = true;
      }
    }
  
    // Calcular el día de la semana con metodo getDate
    let diaSemana;
    switch (fecha.getDay()) {
      case 0:
        diaSemana = "domingo";
        break;
      case 1:
        diaSemana = "lunes";
        break;
      case 2:
        diaSemana = "martes";
        break;
      case 3:
        diaSemana = "miércoles";
        break;
      case 4:
        diaSemana = "jueves";
        break;
      case 5:
        diaSemana = "viernes";
        break;
      case 6:
        diaSemana = "sábado";
        break;
    }
  //Añadimos fotito de estación del año fotito ¿?
  let estacion;
  let mesEstacion = parseInt(mes); 
  
  switch(mesEstacion) {
    case 12:
    case 1:
    case 2:
        estacion= "invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacion= "primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacion= "verano";
        break;
    case 9:
    case 10:
    case 11:
        estacion= "otoño";
        break;

    }

// console.log(estacion);

    // Mostrar el resultado en la página web
    let resultado = `El día ${dia}/${mes}/${anio} fue un ${diaSemana} de ${estacion}`;

    const semana = ["lunes", "martes", "miércoles", "jueves", "viernes"];
    if (semana.includes(diaSemana)) {
      resultado += " dia laborable.";

    } else {
      resultado += " dia no laborable.";
    }

  if (esBisiesto) {
        resultado += " El año fue bisiesto.";
      } else {
        resultado += " El año no fue bisiesto.";
      }


    document.getElementById("resultado").innerHTML = resultado;

    
    
  }


  // background 
  