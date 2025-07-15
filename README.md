# Portafolio Personal - Diego Cea

Portfolio personal migrado de HTML/CSS/JavaScript vanilla a React + Vite con arquitectura modular.

## Descripción

Este proyecto es una migración de mi página web personal desarrollada originalmente. Incluye información personal, estudios, experiencia laboral y un sistema interactivo de intereses con funcionalidades avanzadas.

## Funcionalidades

- ✅ **Portafolio responsivo** con información personal
- ✅ **Sistema de intereses mejorado** - Agregar/eliminar secciones con iconos
- ✅ **Navegación horizontal scrolleable** en móviles
- ✅ **Formulario de contacto** con validaciones completas
- ✅ **Alertas dinámicas** y notificaciones animadas
- ✅ **Contador de caracteres** en tiempo real
- ✅ **Navegación suave** entre secciones
- ✅ **Arquitectura modular** con componentes independientes
- ✅ **Sistema de variables CSS** para consistencia de diseño

## Tecnologías

- **React 19** - Biblioteca de componentes
- **Vite** - Herramienta de construcción y desarrollo
- **CSS3** - Estilos modulares con variables CSS
- **JavaScript ES6+** - Lógica moderna de la aplicación

## Comandos

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Preview de la build
```

## Estructura del Proyecto

```
src/
├── components/           # Componentes React modularizados
│   ├── 01-Header/       # Navegación principal
│   ├── 02-Banner/       # Sección hero
│   ├── 03-ContentSections/  # Artículos de contenido
│   ├── 04-InterestsList/    # Panel de favoritos interactivo
│   └── 05-ContactForm/      # Formulario de contacto
├── styles/              # Variables CSS globales
│   └── variables.css    # Sistema de diseño centralizado
├── assets/              # Imágenes y recursos estáticos
├── App.jsx              # Componente principal
└── main.jsx             # Punto de entrada
```

## Características Técnicas

### **Arquitectura Modular**
- Cada componente tiene su propio CSS independiente
- Sistema de variables CSS para consistencia
- Componentes reutilizables y mantenibles

### **Responsive Design**
- Navegación horizontal scrolleable en móviles
- 3 breakpoints: Desktop (>768px), Tablet (768px-481px), Móvil (<480px)
- Optimización específica para cada dispositivo

### **Sistema de Intereses**
- Iconos específicos por sección (👤 🎓 💼 📍 📧)
- Funcionalidad agregar/eliminar con confirmación visual
- Estado vacío con mensaje guía para mejor UX

## Historia del Proyecto

Este proyecto comenzó como una página web estática desarrollada para la asignatura de Programación Front End usando HTML, CSS y JavaScript vanilla. Posteriormente fue migrado a React + Vite con una arquitectura modular más profesional para aprovechar las ventajas de un framework moderno y mejores prácticas de desarrollo.