window.onload = fuction(){
var yousay = "goodbye";

if (yousay.startsWith("goodbye")){
var isay = "hello";
}

console.log('you say ${yousay}, I say ${isay}');

/* NEW STRINGS METHODS

- replace
- startsWith
- endsWith
- includes

*/
  
  // Otras formas de expresar un arreglo
  
  var lenguajes = new Array("ruby", "javascript", "go", "php");
  var lenguajes2 = ["ruby", "javascript", "go", "php"];
  
  
  // Map o Mapa
  
  var car = new Map();
  
  car.set("brand", "Volkswagen");
  car.set("name", "yeta");
  car.set("color", "black");
  
  console.log(car.get("brand")); // retorna Volkswagen
  console.log(car.has("brand")); // pregunta si existe brand
  car.delete("brand"); // borra el valor
  
  // Set o Conjunto
  
  var dogs = new Set();
  
  dogs.add("Chihuahua"); // agrega
  dogs.add("Golden Retriever"); // agrega
  dogs.add("Pastor Alemán"); // agrega
  dogs.add(lenguajes) // agrega el arreglo
  
  dogs.delete("Chihuahua"); // borra el valor
  console.log(dogs); // retorna los valores
  dogs.size // retorma la cantidad de valores en forma de numero
  
  // Ciclo for of
  
  var frameworks = new Array("Rails", "Node.js", "Laravel");
  
  for(let framework of frameworks){
    console.log(framework); //  retorma los valores
  }
  
  // Ciclo while
  
 var age = 0;
 
  while(age <= 20){
    console.log("he cumplido estos "+age+"años");
     age++;
  }
  
  //Ciclo do while
  
  var mascotas = 0;
  
  do{
    console.log("hay unas "+mascotas+" en la tienda de mascotas");
    mascotas++;
  }while(mascotas < 10);
  
  // Parámetros Spread
  
  function device (type, name, brand, color){
    console.log(`el ${type} ${name} es de la marca ${brand} y es de color ${color}`);
  }
  
  var cellphone = new Array("celular", "X2", "Motorola", "gris oscuro");
  device(...cellphone);
  
  
  
  

 
