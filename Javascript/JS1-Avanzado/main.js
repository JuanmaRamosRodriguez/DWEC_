function generarDatos(fila, columna){                    //Creación de la siguiente función de fila y columna
    var datos = document.getElementById("generarDatos"); //Creación de la variable datos, que será usada en el HTML
    let x = "";
    
   let nombre= ["Luffy", "Zoro", "Nami",   //Aquí creo un array con los nombres que se generarán en la tabla
   "Sanji", "Chopper", "Usopp", "Robin",
   "Brook", "Franky", "Jimbei"];

    for(let f = 0; f < fila; f++){        //Hago un for para recorrer las filas
        x += `<tr>`;                      //y declaro la variable x, donde irán los <tr>

        for(let c=0; c < columna; c++){                                              //Aquí otro for, pero en este caso recorreremos 
            x += `<td>` + nombre[Math.floor(Math.random()*nombre.length)] + `</td>`; //las columnas y usamos el método Math.random
                                                                                     //para generar los nombres aleatorios
        }

        x += `</tr>`;
    }
    
    datos.innerHTML += x;   //Esto enía los datos de este script al HTML
}

generarDatos(12,8); //Los datos que les quieras dar al ejercicio