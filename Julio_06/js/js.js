let nombre, h_trabajadas, s_semanal, s_extra, total
let formulario1 = document.getElementById("form1")
let formulario2 = document.getElementById("form2")

formulario1.addEventListener("submit", (e)=>{
    console.log("Formulario recibido")
    e.preventDefault();
    ReadData();
})

function ReadData(){
    nombre = document.getElementById("nombre").value
    h_trabajadas = document.getElementById("Horas").value
    ValidateData(nombre,h_trabajadas);
    
    
}

function ValidateData(nombre,h_trabajadas){
    
    if(isNaN(h_trabajadas) == false && nombre.length > 0 && h_trabajadas.length > 0){
        
        
        LS_Save(nombre,h_trabajadas);
        Operation(h_trabajadas, s_semanal,s_extra,total);
        swal({  title:  document.getElementById("nombre").value, text: "Tu resultado esta listo", icon: "success",})
    

    }
    else{
        swal("Error","No rellenaste un campo","error");
    }
}
function LS_Save(nombre,h_trabajadas){
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Horas", h_trabajadas);
    ListData();
    
    
}
function ListData(){
    let NombreUs = localStorage.getItem("Nombre");
    let HorasUS = localStorage.getItem("Horas");

    
}



function Operation(h_trabajadas, s_semanal, s_extra, total){
    console.log(nombre)
    console.log(h_trabajadas)
    console.log(document.getElementById("Horas").value)
    if(h_trabajadas < 40){
        s_semanal = (h_trabajadas*8000)
        s_extra = 0
        total = s_semanal
        
    }
        
    else{
        s_semanal = ((h_trabajadas-(h_trabajadas-40))*8000)
        s_extra = (((h_trabajadas-40)*12000))
        total = s_extra+s_semanal
    }
        
    document.getElementById("S_semanal").value = s_semanal
    document.getElementById("S_extra").value = s_extra
    document.getElementById("Total").value = total
    console.log(total)
}

