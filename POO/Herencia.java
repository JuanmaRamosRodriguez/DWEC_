//Ejemplo de Herencia.

public class Persona {
        protected String nombre;
        protected String apellidos;
        protected GregorianCalendar fechaNacim;

        // Método getNombre
        public String getNombre() {
            return nombre;
        }
        
        // Método getApellidos
        public String getApellidos() {
            return apellidos;
        }
        
        // Método getFechaNacim
        public GregorianCalendar getFechaNacim() {
            return this.fechaNacim;
        }

        // Método setNombre
        public void setNombre(String nombre) {
            this.nombre = nombre;
        }
        
        // Método setApellidos
        public void setApellidos(String apellidos) {
            this.apellidos = apellidos;
        }
        
        // Método setFechaNacim
        public void setFechaNacim(GregorianCalendar fechaNacim) {
            this.fechaNacim = fechaNacim;
        }
}




public class Alumno extends Persona {
        protected String grupo;
        protected double notaMedia;
    
        // Método getNombre
        public String getNombre() {
            return nombre;
        }
        
        // Método getApellidos
        public String getApellidos() {
            return apellidos;
        }
        
        // Método getFechaNacim
        public GregorianCalendar getFechaNacim() {
            return this.fechaNacim;
        }
        
        // Método getGrupo
        public String getGrupo() {
            return grupo;
        }

        // Método getNotaMedia
        public double getNotaMedia() {
            return notaMedia;
        }

        // Método setNombre
        public void setNombre(String nombre) {
            this.nombre = nombre;
        }
        
        // Método setApellidos
        public void setApellidos(String apellidos) {
            this.apellidos = apellidos;
        }
        
        // Método setFechaNacim
        public void setFechaNacim(GregorianCalendar fechaNacim) {
            this.fechaNacim = fechaNacim;
        }

        // Método setGrupo
        public void setGrupo(String grupo) {
            this.grupo = grupo;
        }
        
        // Método setNotaMedia
        public void setNotaMedia(double notaMedia) {
            this.notaMedia = notaMedia;
        }
        
}



public class Profesor extends Profesor {
        String especialidad;
        double salario;
      
        // Método getNombre
        public String getNombre() {
            return nombre;
        }
        
        // Método getApellidos
        public String getApellidos() {
            return apellidos;
        }
        
        // Método getFechaNacim
        public GregorianCalendar getFechaNacim() {
            return this.fechaNacim;
        }
        
        // Método getEspecialidad
        public String getEspecialidad() {
            return especialidad;
        }

        // Método getSalario
        public double getSalario() {
            return salario;
        }

        // Método setNombre
        public void setNombre(String nombre) {
            this.nombre = nombre;
        }
        
        // Método setApellidos
        public void setApellidos(String apellidos) {
            this.apellidos = apellidos;
        }
        
        // Método setFechaNacim
        public void setFechaNacim(GregorianCalendar fechaNacim) {
            this.fechaNacim = fechaNacim;
        }

        // Método setSalario
        public void setSalario(double salario) {
            this.salario = salario;
        }
        
        // Método setESpecialidad
        public void setESpecialidad(String especialidad) {
            this.especialidad = especialidad;
        }
}