import facebookIcon from '../assets/images/facebook.png'  // Importa el icono de Facebook
import githubIcon from '../assets/images/github.png'  // Importa el icono de GitHub
import instagramIcon from '../assets/images/instagram.png'  // Importa el icono de Instagram

// Componente Footer que representa el pie de página de la aplicación
function Footer() {  // Función para crear el pie de página de la aplicación
  return (
    <footer>  {/* Pie de página de la aplicación */ }
      <div className="datos">  {/* Información de contacto */}
        <p>Dirección: Calle Falsa 123, Santiago, Chile.</p>  {/* Dirección ficticia */ }
        <p>Email: contacto@diegoCea.com</p>  {/* Email ficticio */ }
        <p>Telefóno: +56 9 6785 0006</p>  {/* Número de teléfono ficticio */ }
        <p>Sígueme en redes sociales.</p>  {/* Invitación a seguir en redes sociales */ }
        <div className="redes-sociales">  {/* Enlaces a redes sociales */}
          <a href="#">  {/* Enlace a Facebook */}
            <img src={facebookIcon} alt="Icono de Facebook" /> Facebook  {/* Icono de Facebook */ }
          </a><br />  {/* Salto de línea */ }
          <a href="#">  {/* Enlace a GitHub */}
            <img src={githubIcon} alt="Icono de GitHub" /> GitHub  {/* Icono de GitHub */ }
          </a><br />  {/* Salto de línea */ }
          <a href="#">  {/* Enlace a Instagram */}
            <img src={instagramIcon} alt="Icono de Instagram" /> Instagram  {/* Icono de Instagram */ }
          </a><br />  {/* Salto de línea */ }
        </div>  {/* Fin de enlaces a redes sociales */ }
      </div>  {/* Fin de información de contacto */}
      
      <div className="creditos-imagenes">  {/* Créditos de imágenes */}
        <p>  {/* Créditos de imágenes utilizadas */}
          Enlaces de las imágenes utilizadas:<br />  {/* Enlaces a las imágenes */}
          - <a href="https://portales.inacap.cl/noticias/noticias-inacap/2021/santiago-sur-21/inacap-santiago-sur-inicia-charlas-informativas-con-establecimientos-de-educacion-media?page=1987" target="_blank" rel="noopener noreferrer">
            Foto de Inacap Santiago Sur  {/* Foto de Inacap */ }
          </a><br />  {/* Salto de línea */ }
          - <a href="https://www.valoraanalitik.com/seguros-sura-estrena-sistema-para-administrar-clientes-polizas-y-facturacion/" target="_blank" rel="noopener noreferrer">
            Foto de SURA  {/* Foto de SURA */ }
          </a><br />  {/* Salto de línea */ }
          - <a href="https://www.istockphoto.com/photo/stunning-entrance-to-cerro-santa-lucia-hilltop-the-historic-public-park-in-downtown-gm2150802230-571950571?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbannerNone_media&utm_term=santiago+de+chile" target="_blank" rel="noopener noreferrer">
            Foto de Santiago  {/* Foto de Santiago */ }
          </a>  {/* Foto de Santiago */ }
        </p>  {/* Fin de créditos de imágenes */}
      </div>  {/* Fin de créditos de imágenes */}
      
      <p className="copyright">  {/* Derechos de autor */}
        &copy; 2025 Diego Cea. Todos los derechos reservados.
      </p>  {/* Fin de derechos de autor */}
    </footer>  // Fin del pie de página */
  )
}

export default Footer  // Exporta la función Footer para que pueda ser utilizada en otros archivos