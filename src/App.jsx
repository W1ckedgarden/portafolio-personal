import { useRef } from 'react'  // Importa React y hooks necesarios
import './App.css'  // Importa los estilos globales de la aplicación
import Header from './components/Header'  // Importa el componente Header
import Banner from './components/Banner'  // Importa el componente Banner
import ContentSections from './components/ContentSections'  // Importa el componente ContentSections
import InterestsList from './components/InterestsList'  // Importa el componente InterestsList
import ContactForm from './components/ContactForm'  // Importa el componente ContactForm
import Footer from './components/Footer'  // Importa el componente Footer

// Componente principal de la aplicación
function App() {  // Define el componente App
  const interestsRef = useRef()  // Crea una referencia para el componente InterestsList

  const handleAddToInterests = (sectionName) => {  // Función para manejar la adición de intereses
    if (interestsRef.current) {  // Verifica si la referencia al componente InterestsList está disponible
      interestsRef.current.addToInterests(sectionName)  // Llama al método addToInterests del componente InterestsList
    }
  }

  return (  // Renderiza la estructura principal de la aplicación
    <>  {/* Fragmento que agrupa los elementos sin añadir un nodo extra al DOM */}
      <Header />  {/* Componente que muestra el encabezado del sitio */}
      <main>  {/* Contenedor principal de la aplicación */}
        <Banner />  {/* Componente que muestra el banner de bienvenida */}
        <ContentSections onAddToInterests={handleAddToInterests} />  {/* Componente que muestra las secciones de contenido y maneja la adición de intereses */}
        <InterestsList ref={interestsRef} />  {/* Componente que muestra la lista de intereses del usuario */}
        <ContactForm />  {/* Componente que muestra el formulario de contacto */}
      </main>  {/* Fin del contenedor principal de la aplicación */}
      <Footer />  {/* Componente que muestra el pie de página del sitio */}
    </>  // Fin del fragmento que agrupa los elementos sin añadir un nodo extra al DOM
  )
}

export default App  // Exporta el componente App para que pueda ser utilizado en otros archivos
