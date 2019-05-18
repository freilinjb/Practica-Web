public class UsuariosAdministrador extends Usuario{
    public List<String> getPermisos(){
        List<String> permisos = super.getPermisos();
        permisos.add(PERMISOS_ADMINISTRADIR)
    }
}

public boolean equals(Object o){
    Punto2D p = (Punto2D)o;

}