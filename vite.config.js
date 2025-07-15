import { defineConfig } from 'vite'  // Importa defineConfig desde Vite
import react from '@vitejs/plugin-react'  // Importa el plugin de React para Vite

// https://vitejs.dev/config/
export default defineConfig({  // Exporta la configuración de Vite
  plugins: [react()],  // Añade el plugin de React
  base: '/portafolio-personal/',  // Define la base para el despliegue en GitHub Pages
  build: {  // Configuración de la construcción del proyecto
    outDir: 'dist',  // Directorio de salida para los archivos construidos
    assetsDir: 'assets',  // Directorio para los activos estáticos
  }
})