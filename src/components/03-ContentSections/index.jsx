import './ContentSections.css'  // Importa los estilos del componente
import fotoDiegoDani from '../../assets/images/foto-diegodani.jpg'  // Importa la foto de Diego y Dani
import fotoInacap from '../../assets/images/fotoInacap.jpg'  // Importa la foto de Inacap
import segurosSura from '../../assets/images/segurosSura.jpg'  // Importa la foto de SURA
import fotoSantiago from '../../assets/images/fotoSantiago.jpg'  // Importa la foto de Santiago

// Componente que muestra las secciones de contenido del sitio
function ContentSections({ onAddToInterests }) {  // Recibe una función para agregar secciones a los intereses
  return (
    <section className="contenido">  {/* Sección que contiene todas las subsecciones */}
      <article id="sobre-mi" className="sobre-mi">  {/* Sección sobre mí */}
        <h2>Sobre Mi:</h2>  {/* Título de la sección */}
        <p>  {/* Párrafo que describe al usuario */}
          Mi nombre es Diego Cea, tengo 31 años a la fecha. Algunos de mis hobbies
          son jugar fútbol (un clásico), también videojuegos (sobre todo shooters y RPGs),
          me gusta mucho leer, sobre todo fantasía como Canción de Hielo y Fuego o policiales
          como la saga de Hannibal Lecter. También me gusta mucho la música,
          sobre todo el grunge, el metal, y el rap, pero también escucho de todo un poco.
          Obviamente me encanta ir a conciertos y festivales de música a los que siempre
          voy con mi novia (es la mejor).
        </p>  {/* Fin del párrafo */}
        <img src={fotoDiegoDani} alt="Foto de Diego y Dani" className="img-dd" />  {/* Imagen de Diego y Dani */}
        <button  // Botón para agregar esta sección a los intereses
          className="btn-favorito"  // Clase para aplicar estilos al botón
          onClick={() => onAddToInterests("Sobre Mi")}  // Llama a la función onAddToInterests con el nombre de la sección
        >
          ⭐ Agregar a mis intereses  {/* Texto del botón */}
        </button>  {/* Fin del botón */}
      </article>  {/* Fin de la sección sobre mí */}

      <article id="estudios" className="estudios">  {/* Sección de estudios */}
        <h2>Estudios:</h2>  {/* Título de la sección */}
        <p>  {/* Párrafo que describe los estudios del usuario */}
          Actualmente estoy estudiando en Inacap, en la carrera de Analista Programador. 
          He aprendido sobre programación y desarrollo de software.
          Anteriormente estudié Tecnología Médica en la Universidad Mayor, donde no pude terminar
          la carrera por problemas personales. A pesar de eso, obtuve habilidades valiosas
          en el área de la salud y la ciencia. También llegué a conseguir mi Bachiller
          en Ciencias de la Salud, lo que me ha permitido tener una base sólida en biología y química.
        </p>  {/* Fin del párrafo */}
        <img src={fotoInacap} alt="Foto de Inacap Santiago Sur" className="img-seccion" />  {/* Imagen de Inacap Santiago Sur */}
        <button  // Botón para agregar esta sección a los intereses
          className="btn-favorito"  // Clase para aplicar estilos al botón
          onClick={() => onAddToInterests("Estudios")}  // Llama a la función onAddToInterests con el nombre de la sección
        >
          ⭐ Agregar a mis intereses  {/* Texto del botón */}
        </button>  {/* Fin del botón */}        
      </article>  {/* Fin de la sección de estudios */}

      <article id="ultimo-trabajo" className="ultimo-trabajo">  {/* Sección del último trabajo */}
        <h2>Último Trabajo:</h2>  {/* Título de la sección */}
        <p>  {/* Párrafo que describe el último trabajo del usuario */}
          Mi último trabajo fue en una empresa de seguros, donde trabajé como asistente de producción.
          Me encargaba de solucionar los rechazos de polizas variadas y generar reportes al respecto.
          Aprendí mucho sobre el manejo de datos y la importancia de la atención al detalle.
        </p>  {/* Fin del párrafo */}
        <img src={segurosSura} alt="Foto de SURA" className="img-seccion" />  {/* Imagen de SURA */}
        <button  // Botón para agregar esta sección a los intereses
          className="btn-favorito"  // Clase para aplicar estilos al botón
          onClick={() => onAddToInterests("Último Trabajo")}  // Llama a la función onAddToInterests con el nombre de la sección
        >
          ⭐ Agregar a mis intereses  {/* Texto del botón */}
        </button>  {/* Fin del botón */}        
      </article>  {/* Fin de la sección del último trabajo */}

      <article id="ubicacion" className="ubicacion">  {/* Sección de ubicación */}
        <h2>Ubicación:</h2>  {/* Título de la sección */}
        <p>Actualmente vivo en la Calle Falsa 123, en la comuna de Santiago, Santiago de Chile.</p>  {/* Párrafo que describe la ubicación del usuario */}
        <img src={fotoSantiago} alt="Foto de Santiago" className="img-seccion" />  {/* Imagen de Santiago */}
        <button  // Botón para agregar esta sección a los intereses
          className="btn-favorito"  // Clase para aplicar estilos al botón
          onClick={() => onAddToInterests("Ubicación")}  // Llama a la función onAddToInterests con el nombre de la sección
        >
          ⭐ Agregar a mis intereses  {/* Texto del botón */}
        </button>  {/* Fin del botón */}        
      </article>  {/* Fin de la sección de ubicación */}
    </section>  // Fin de la sección que contiene todas las subsecciones
  )
}

export default ContentSections  // Exporta el componente ContentSections para que pueda ser utilizado en otros archivos
