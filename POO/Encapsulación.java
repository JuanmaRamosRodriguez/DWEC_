//Ejemplo para probar la clase de java Encapsulación
  
package com.javatpoint;  
class Test{  
public static void main(String[] args){ 

//Creamos la instancia de la encapsulación  
Estudiante s=new Estudiante();  

//Ajustamos los valores del nombre  
	s.setNombre("Pepe");  

//Obtenemos los valores del nombre   
	System.out.println(s.getName());  

	}  
} 