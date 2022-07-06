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
    formulario1.reset();
    
}

function ValidateData(){
    if(isNaN(h_trabajadas) && nombre.length > 0 && h_trabajadas.length > 0){
        function LS_Save(nombre,h_trabajadas){
            localStorage.setItem("Nombre", nombre);
            localStorage.setItem("Horas" h_trabajadas);
            ListData();
        }
        function ListData(){
            let NombreUs = localStorage.getItem("Nombre");
            let HorasUS = localStorage.getItem("Horas");
            
        }
    }

}

if()