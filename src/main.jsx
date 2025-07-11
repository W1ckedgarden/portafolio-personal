import { StrictMode } from 'react'  // Importa StrictMode para ayudar en la depuración de problemas en el código
import { createRoot } from 'react-dom/client'  // Importa createRoot para renderizar la aplicación React
import './index.css'  // Importa los estilos globales de la aplicación
import App from './App.jsx'  // Importa el componente principal de la aplicación

createRoot(document.getElementById('root')).render(  // Renderiza la aplicación React en el elemento con ID 'root'
  <StrictMode>  {/* StrictMode ayuda a identificar problemas potenciales en la aplicación */ }
    <App />  {/* Componente principal de la aplicación que contiene toda la lógica y los componentes secundarios */}
  </StrictMode>,  // Fin del StrictMode y renderizado de la aplicación
)
