import { defineConfig } from 'vite'  // vite.config.js
import react from '@vitejs/plugin-react'  // Importa el plugin de React para Vite

// https://vite.dev/config/
export default defineConfig({  // Configuración de Vite para el proyecto
  plugins: [react()],  // Añade el plugin de React
  base: '/portafolio-personal/',  // Establece la base del proyecto para el despliegue en GitHub Pages
})
