
function mensaje(){
     alert("Has seleccionado el texto");
}
//window.onload=hacerclick; 
 

 
function muestraTexto(){
     var elem=document.getElementById("parrafo1");
     elem.innerHTML = "texto"
     
 }
 function concatenaNombre(){
     var nombre=document.getElementById("nombre").innerHTML;
     var apellidos=document.getElementById("apellidos").innerHTML;
     
     document.getElementById("nombrecompleto").innerHTML = nombre + " " + apellidos;
     
 }
 
 function suma(a,b){
     
     return a+b;
 }
 
 function resta(a,b){
     return a-b;
 }
 function multiplicacion(a,b){
     return a*b;
 }
 function division(a,b){
     return a/b;
 }
 function exponencial(a,b){
     return Math.pow(a,b);
 }
 


 
 
 

 function sumar(){
     var numero1=document.getElementById("numero1").value;
     var numero2=document.getElementById("numero2").value;
     var resultado=suma(parseFloat(numero1),parseFloat(numero2));
     document.getElementById("resultado").innerHTML = resultado;
 }
 
 function restar(){
     var numero1=document.getElementById("numero1").value;
     var numero2=document.getElementById("numero2").value;
     var resultado=resta(parseFloat(numero1),parseFloat(numero2));
     document.getElementById("resultado").innerHTML = resultado;
 }
 
 function multiplicar(){
     var numero1=document.getElementById("numero1").value;
     var numero2=document.getElementById("numero2").value;
     var resultado=multiplicacion(parseFloat(numero1),parseFloat(numero2));
     document.getElementById("resultado").innerHTML = resultado;
 }
 
 function dividir(){
     var numero1=document.getElementById("numero1").value;
     var numero2=document.getElementById("numero2").value;
     var resultado=division(parseFloat(numero1),parseFloat(numero2));
     document.getElementById("resultado").innerHTML = resultado;
 }
 
 function exponente(){
     var numero1=document.getElementById("numero1").value;
     var numero2=document.getElementById("numero2").value;
     var resultado=exponencial(parseFloat(numero1),parseFloat(numero2));
     document.getElementById("resultado").innerHTML = resultado;
 }
 function paridad(){
     var a = document.getElementById("numero1").value;
     var b = document.getElementById("numero2").value;
     if (a %2==0){
          document.getElementById("resultado1").innerHTML = "El numero 1 es par";
     }
          else{
          document.getElementById("resultado1").innerHTML = "El numero 1 es impar";
          }
     
     
     if (b %2==0){
          document.getElementById("resultado2").innerHTML = "El numero 2 es par";
     }
          else{
          document.getElementById("resultado2").innerHTML = "El numero 2 es impar";
          }
     }
     
     
 function muestracoches(){
 
     var coches = ["Renault", "Peugeot", "Citroen", "Ford"];
     var texto = "<ul>";
     
     for(i=0; i<coches.length; i++){
          texto+= "<li>" + coches[i] + "</li>";
     }
     texto+= "</ul>";
     
     document.getElementById("listadocoches").innerHTML = texto;
 }
 
 function pesos(){
     
     var peso = [80, 100, 3, 67, 93, 89, 81];
     var acumulacionPesos=0;
     
     for (i=0; i<peso.length; i++){
          if(peso[i]>80){
               acumulacionPesos++;
               
          }
     document.getElementById("peso").innerHTML = "El numero de personas con un peso mayor de 80 Kg es:" + " " + acumulacionPesos ;
     }
     
 }
 
 function ponerNota(){
     var notas = ["3", "8", "7", "4.5", "9", "8" ,"5", "7" ,"3.5" ,"6", "10", "7", "7.5"];
     suspensos=0;
     aptos=0;
     bienes=0;
     notables=0;
     sobresalientes=0;
     matriculas=0;
     
     for(i=0; i<notas.legth; i++){
          if(notas[i]<5){
               suspensos++;
          }
          
          if(5<=(notas[i]) && (notas[i])<6){
               aptos++;
          }
          
          if(6<(notas[i]) && (notas[i])<7){
               bienes++;
          }
          
          if(notas[i]==8){
               notables++;
          }
          
          if(notas[i]>9){
               sobresalientes++;
          }
          
          if(notas[i]<=10){
               matriculas++;
          }
          
          
     }
     document.getElementById("suspenso").innerHTML = "El numero de personas suspensas es:" + " " + suspensos ;
     document.getElementById("apto").innerHTML = "El numero de personas aptas:" + " " + aptos ;
     document.getElementById("bien").innerHTML = "El numero de personas con bienes:" + " " + bienes ;
     document.getElementById("notable").innerHTML = "El numero de personas con notables:" + " " + notables ;
     document.getElementById("sobresaliente").innerHTML = "El numero de personas con sobresalientes:" + " " + sobresalientes ;
     document.getElementById("matricula").innerHTML = "El numero de personas con matricula de honor:" + " " + matriculas ;
     
     
 }
 
 
var empleados= [
     {nombre: "Marta", sueldo: 1000, horas: 50},
     {nombre: "Javier", sueldo: 3500, horas: 100},
     {nombre: "Pepe", sueldo: 800, horas: 100},
     {nombre: "Sandra", sueldo: 950, horas: 95},
     {nombre: "Teresa", sueldo: 2700, horas: 50}
 ];

function dinero(){
     var menosCobra=0;
     
     for(i=0; i<empleados.length; i++){
          if(empleados[i].sueldo<empleados[menosCobra].sueldo){
               menosCobra=i;
          }
     }
     menosCobra = empleados[menosCobra].nombre;
     document.getElementById("dinerillo").innerHTML = "El empleado que menos cobra es" + " " + menosCobra ;
}


 var listado= [
            
            ["Javier", 3500, 100],
            ["Pepito", 2000, 200],
            ["Ana", 2750, 100]
            ];
                
                
                $(document).ready(function(){
                    $("#ejemplo").DataTable({
                        data: listado,
                        columns:[
                         { title: "Name" },
                         { title: "sueldo" },
                         { title: "Horas" }
                        ]
                    }
    
                            
                    });
     
     
 
 
 