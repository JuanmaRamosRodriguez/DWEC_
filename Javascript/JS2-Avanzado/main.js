var paises = [
        {
            "pais" : "España",
            "capital" : "Madrid"
        },
        {
            "pais" : "Alemania",
            "capital" : "Berlín"
        },
        {
            "pais" : "Albania",
            "capital" : "Tirana"
        },
        {
            "pais" : "Andorra",
            "capital" : "Andorra la Vella"
        },
        {
            "pais" : "Francia",
            "capital" : "Paris"
        },
        {
            "pais" : "Reino Unido",
            "capital" : "Londres"
        },
        {
            "pais" : "Bélgica",
            "capital" : "Bruselas"
        },
        {
            "pais" : "Croacia",
            "capital" : "Zagreb"
        },
        {
            "pais" : "Dinamarca",
            "capital" : "Copenhage"
        },
        {
            "pais" : "Eslovaquia",
            "capital" : "Bratislava"
        },
        {
            "pais" : "Rusia",
            "capital" : "Moscú"
        },      
        {
            "pais" : "Finlandia",
            "capital" : "Helsinki"
        },
        {
            "pais" : "Italia",
            "capital" : "Roma"
        },
        {
            "pais" : "Luxemburgo",
            "capital" : "Luxemburgo"
        },
        {
            "pais" : "Mónaco",
            "capital" : "Mónaco"
        },
        {
            "pais" : "Países Bajos",
            "capital" : "Ámsterdam"
        },
        {
            "pais" : "Polonia",
            "capital" : "Varsovia"
        },
        {
            "pais" : "Portugal",
            "capital" : "Lisboa"
        }
    ]

    let tablas = document.getElementById("tabla");

    let generarTabla = '';

    for (x of paises) {
        generarTabla += `<tr><td>${x.capital}</td><td>${x.pais}</td</tr>`;
    }

    tablas.innerHTML += generarTabla;

    
    //Esto filtra los países
    function filtrarCapital() {
   
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("input");
        filter = input.value;
        table = document.getElementById("tabla");
        tr = table.getElementsByTagName("tr");
      

        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }

      //Esto filtraría las capitales
      function filtrarPais() {
      
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("input1");
        filter = input.value;
        table = document.getElementById("tabla");
        tr = table.getElementsByTagName("tr");
      
        
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[1];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }