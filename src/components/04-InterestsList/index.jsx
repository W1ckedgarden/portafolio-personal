import './InterestsList.css'  // Importa los estilos específicos del componente
import { useState, forwardRef, useImperativeHandle } from 'react'  // Importa hooks de React

// Mapeo de iconos para cada sección
const SECTION_ICONS = {  // Define los iconos para cada sección
  'Sobre Mi': '👤',
  'Estudios': '🎓',
  'Último Trabajo': '💼',
  'Ubicación': '📍',
  'Contacto': '📧'
}

const InterestsList = forwardRef((props, ref) => {  // Componente que muestra la lista de intereses del usuario
  const [interests, setInterests] = useState([])  // Estado para almacenar los intereses del usuario
  const [alertMessage, setAlertMessage] = useState('')  // Estado para el mensaje de alerta
  const [showAlert, setShowAlert] = useState(false)  // Estado para controlar la visibilidad de la alertas

  const addToInterests = (sectionName) => {  // Función para agregar una sección a la lista de intereses
    // Evitar duplicados
    if (interests.includes(sectionName)) {  // Verifica si el interés ya está en la lista
      showAlertMessage('¡Ese interés ya está en tu lista!')  // Muestra un mensaje de alerta si el interés ya existe
      return  // Sale de la función si el interés ya está en la lista
    }

    setInterests([...interests, sectionName])  // Agrega el nuevo interés a la lista
    showAlertMessage('¡Interés agregado a la lista!')  // Muestra un mensaje de alerta indicando que el interés fue agregado
  }

  // Nueva función para eliminar intereses
  const removeFromInterests = (sectionName) => {  // Función para eliminar una sección de la lista de intereses
    setInterests(interests.filter(interest => interest !== sectionName))  // Filtra la lista de intereses para eliminar el interés especificado
    showAlertMessage('¡Interés eliminado de la lista!')  // Muestra un mensaje de alerta indicando que el interés fue eliminado
  }

  const showAlertMessage = (message) => {  // Función para mostrar un mensaje de alerta
    setAlertMessage(message)  // Establece el mensaje de alerta
    setShowAlert(true)  // Muestra la alerta
    setTimeout(() => {  // Oculta la alerta después de 1.8 segundos
      setShowAlert(false)  // Oculta la alerta
    }, 1800)  // 1.8 segundos
  }

  // Exponer métodos al componente padre
  useImperativeHandle(ref, () => ({  // Permite que el componente padre acceda a los métodos del componente InterestsList
    addToInterests  // Método para agregar intereses desde el componente padre
  }))

  return (  // Renderiza la lista de intereses
    <>  {/* Fragmento que agrupa los elementos sin añadir un nodo extra al DOM */}
      <section id='favoritos-panel' className="favoritos-panel">  {/* Sección que muestra la lista de intereses */}
        <h3>Mis intereses:</h3>  {/* Título de la sección de intereses */}
        <ul id="favoritos-lista">  {/* Lista de intereses */}
          {interests.length === 0 ? (  // Si no hay intereses, muestra un mensaje
            <li className="lista-vacia">  {/* Mensaje cuando la lista de intereses está vacía */}
              🌟 Agrega secciones que te interesen usando los botones ⭐
            </li>  // Fin del mensaje cuando la lista de intereses está vacía
          ) : (  // Si hay intereses, muestra cada uno en la lista
            interests.map((interest, index) => (  // Mapea cada interés a un elemento de lista
              <li key={index} className="interes-item">  {/* Elemento de lista para cada interés */}
                <div className="interes-contenido">  {/* Contenedor para el contenido del interés */}
                  <span className="interes-icono">  {/* Icono del interés */}
                    {SECTION_ICONS[interest] || '⭐'}  {/* Muestra el icono correspondiente o un icono por defecto */}
                  </span>  {/* Fin del icono del interés */}
                  <span className="interes-texto">  {/* Texto del interés */}
                    {interest}  {/* Nombre del interés */}
                  </span>  {/* Fin del texto del interés */}
                </div>  {/* Fin del contenedor del contenido del interés */}
                <button   // Botón para eliminar el interés
                  className="btn-eliminar"  // Clase para el botón de eliminar interés
                  onClick={() => removeFromInterests(interest)}  // Llama a la función para eliminar el interés al hacer clic
                  title={`Eliminar ${interest}`}  // Título del botón para eliminar el interés
                >
                  ✕
                </button>  {/* Fin del botón para eliminar el interés */}
              </li>  // Fin del elemento de lista para el interés
            ))
          )}
        </ul>  {/* Fin de la lista de intereses */}
      </section>  {/* Fin de la sección que muestra la lista de intereses */}

      <div
        id="alerta-favoritos"  // ID para la alerta de favoritos
        className={showAlert ? 'alerta-favoritos-activa' : ''}  // Clase que se activa cuando se muestra la alerta
      >  {/* Contenedor para la alerta de favoritos */}
        {alertMessage}  {/* Mensaje de alerta que se muestra */}
      </div>  {/* Fin de la alerta que se muestra cuando se agrega o elimina un interés */}
    </>  // Fin del fragmento que agrupa los elementos sin añadir un nodo extra al DOM
  )
})

InterestsList.displayName = 'InterestsList'  // Establece el nombre del componente para depuración

export default InterestsList  // Exporta el componente InterestsList para que pueda ser utilizado en otros archivos