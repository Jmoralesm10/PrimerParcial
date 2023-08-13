GET();
function GET (){
    var id = document.getElementById('id');
    var url = "https://censopoblacion.azurewebsites.net/API/indicadores/"+id.value+"/999";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var data2 = JSON.parse(data);
            
            var valorCodigo = data2.depto_id;
            var codigo = document.getElementById('codigo');
            codigo.textContent = valorCodigo;
            console.log(valorCodigo);

            var valornombre = data2.nombre;
            var nombre = document.getElementById('nombre');
            nombre.textContent = valornombre;
            console.log(valornombre);

            var valorcapital = data2.capital;
            var capital = document.getElementById('capital');
            capital.textContent = valorcapital;
            console.log(valorcapital);

            var valorpoblacion = data2.pob_total;
            var pob_total = document.getElementById('pob_total');
            pob_total.textContent = valorpoblacion;

            var valorhombres = data2.total_sexo_hombre;
            var hombres = document.getElementById('tot_hombres');
            hombres.textContent = valorhombres;

            var valormujeres = data2.total_sexo_mujeres;
            var mujeres = document.getElementById('tot_mujeres')
            mujeres.textContent = valormujeres;

        })

}

GETMuni();
function GETMuni (){
    var id = document.getElementById('Did');
    var Mid = document.getElementById('Mid');
    var url = "https://censopoblacion.azurewebsites.net/API/indicadores/"+id.value+"/"+Mid.value+"";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var data2 = JSON.parse(data);
            
            var valorCodigo = data2.depto_id;
            var codigo = document.getElementById('Mcodigo');
            codigo.textContent = valorCodigo;
            console.log(valorCodigo);

            var valorid = data2.municipio_id;
            var id = document.getElementById('Muniid');
            id.textContent = valorid;

            var valornombre = data2.nombre;
            var nombre = document.getElementById('Mnombre');
            nombre.textContent = valornombre;
            console.log(valornombre);

            var valorpoblacion = data2.pob_total;
            var pob_total = document.getElementById('Mpob_total');
            pob_total.textContent = valorpoblacion;

            var valorhombres = data2.total_sexo_hombre;
            var hombres = document.getElementById('Mtot_hombres');
            hombres.textContent = valorhombres;

            var valormujeres = data2.total_sexo_mujeres;
            var mujeres = document.getElementById('Mtot_mujeres')
            mujeres.textContent = valormujeres;

        })

}
