import './Header.css'  // Importa los estilos del encabezado
import logoImage from '../../assets/images/fotoPerfilClasica.jpg'  // Importa la imagen del logo

// Componente Header que representa la cabecera del sitio
function Header() {
  return (
    <header>  {/* Cabecera del sitio */}
      <div className="logo">  {/* Contenedor del logo */}
        <img src={logoImage} alt="Foto de perfil Diego Cea" />  {/* Imagen del logo */}
      </div>  {/* Fin del contenedor del logo */}
      <nav>  {/* Navegación del sitio */}
        <ul>  {/* Lista de enlaces de navegación */}
          <li><a href="#sobre-mi">Sobre Mi</a></li>  {/* Enlace a la sección Sobre Mi */}
          <li><a href="#estudios">Estudios</a></li>  {/* Enlace a la sección Estudios */}
          <li><a href="#ultimo-trabajo">Último Trabajo</a></li>  {/* Enlace a la sección Último Trabajo */}
          <li><a href="#ubicacion">Ubicación</a></li>  {/* Enlace a la sección Ubicación */}
          <li><a href="#favoritos-lista">Mis Intereses</a></li>  {/* Enlace a la sección Intereses */}
          <li><a href="#formularioContacto">Contacto</a></li>  {/* Enlace al formulario de contacto */}
        </ul>  {/* Fin de la lista de enlaces de navegación */}
      </nav>  {/* Fin de la navegación del sitio */}
    </header>  // Fin de la cabecera del sitio
  )
}

export default Header  // Exporta el componente Header para que pueda ser utilizado en otros archivos
