import { useState, forwardRef, useImperativeHandle } from 'react'  // Importa React y hooks necesarios

// Componente que muestra la lista de intereses del usuario
const InterestsList = forwardRef((props, ref) => {
  const [interests, setInterests] = useState([])  // Estado para almacenar los intereses del usuario
  const [alertMessage, setAlertMessage] = useState('')  // Estado para almacenar el mensaje de alerta
  const [showAlert, setShowAlert] = useState(false)  // Estado para controlar la visibilidad de la alerta

  const addToInterests = (sectionName) => {  // Método para agregar una sección a los intereses
    // Evitar duplicados
    if (interests.includes(sectionName)) {  // Verifica si el interés ya está en la lista
      showAlertMessage('¡Ese interés ya está en tu lista!')  // Muestra alerta si el interés ya existe
      return  // Sale de la función si el interés ya está en la lista
    }

    setInterests([...interests, sectionName])  // Agrega el nuevo interés a la lista
    showAlertMessage('¡Interés agregado a la lista!')  // Muestra alerta de éxito
  }

  const showAlertMessage = (message) => {  // Método para mostrar un mensaje de alerta
    setAlertMessage(message)  // Asigna el mensaje de alerta
    setShowAlert(true)  // Muestra la alerta
    setTimeout(() => {  // Oculta la alerta después de 1.8 segundos
      setShowAlert(false)  // Oculta la alerta
    }, 1800)  // Espera 1800 milisegundos = 1.8 segundos antes de ocultar la alerta
  }

  // Exponer métodos al componente padre
  useImperativeHandle(ref, () => ({  // Permite que el componente padre acceda a los métodos de este componente
    addToInterests  // Método para agregar una sección a los intereses
  }))

  return (  // Renderiza la lista de intereses y la alerta
    <>  {/* Fragmento que agrupa los elementos sin añadir un nodo extra al DOM */}
      <section className="favoritos-panel">  {/* Sección que contiene la lista de intereses */}
        <h3>Mis intereses:</h3>  {/* Título de la sección de intereses */}
        <ul id="favoritos-lista">  {/* Lista de intereses */}
          {interests.map((interest, index) => (  // Mapea los intereses y los muestra en una lista
            <li key={index}>{interest}</li>  // Cada interés se muestra como un elemento de lista
          ))}
        </ul>  {/* Fin de la lista de intereses */}
      </section>  {/* Sección que contiene la alerta de favoritos */}

      <div  // Alerta que se muestra cuando se agrega un interés a la lista
        id="alerta-favoritos"  // ID para aplicar estilos a la alerta
        className={showAlert ? 'alerta-favoritos-activa' : ''}  // Clase que se aplica si la alerta está activa
      >
        {alertMessage}  {/* Mensaje de alerta que se muestra */}
      </div>  {/* Fin de la alerta de favoritos */}
    </>  // Fin del fragmento que agrupa los elementos sin añadir un nodo extra al DOM
  )
})

InterestsList.displayName = 'InterestsList'  // Asigna un nombre al componente para que sea más fácil de identificar en el árbol de componentes

export default InterestsList  // Exporta el componente InterestsList para que pueda ser utilizado en otros archivos
