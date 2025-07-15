import './ContactForm.css'  // Importa los estilos del formulario de contacto
import { useState, useEffect } from 'react'  // Importa React y hooks necesarios

// Componente de formulario de contacto
function ContactForm() {  // Función para crear el formulario de contacto
  const [formData, setFormData] = useState({  // Estado para almacenar los datos del formulario
    nombre: '',  // Campo para el nombre
    apellido: '',  // Campo para el apellido
    email: '',  // Campo para el email
    mensaje: ''  // Campo para el mensaje
  })
  const [charCount, setCharCount] = useState(0)  // Contador de caracteres del mensaje
  const [messages, setMessages] = useState([])  // Estado para almacenar mensajes de error o éxito
  const [isSuccess, setIsSuccess] = useState(false)  // Estado para indicar si el envío fue exitoso

  const maxLength = 300  // Longitud máxima del mensaje

  useEffect(() => {  // Efecto para actualizar el contador de caracteres cuando cambia el mensaje
    setCharCount(formData.mensaje.length)  // Actualiza el contador de caracteres
  }, [formData.mensaje])  // Dependencia para que se ejecute cuando cambie el mensaje

  const handleInputChange = (e) => {  // Maneja los cambios en los campos del formulario
    const { name, value } = e.target  // Obtiene el nombre y valor del campo modificado
    setFormData(prev => ({  // Actualiza el estado del formulario
      ...prev,  // Mantiene los valores anteriores
      [name]: value  // Actualiza el campo modificado
    }))
  }

  const validateForm = () => {  // Función para validar los campos del formulario
    const errors = []  // Array para almacenar errores de validación
    const { nombre, apellido, email, mensaje } = formData  // Desestructura los campos del formulario

    // Validar campos vacíos
    if (!nombre.trim()) errors.push('Por favor, completa el campo Nombre.')  // Verifica si el campo nombre está vacío
    if (!apellido.trim()) errors.push('Por favor, completa el campo Apellido.')  // Verifica si el campo apellido está vacío
    if (!email.trim()) errors.push('Por favor, completa el campo Email.')  // Verifica si el campo email está vacío
    if (!mensaje.trim()) errors.push('Por favor, completa el campo Mensaje.')  // Verifica si el campo mensaje está vacío

    // Validar que nombre y apellido solo contengan letras
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/  // Expresión regular para letras y espacios
    if (nombre && !soloLetras.test(nombre)) {  // Verifica si el nombre no cumple con la expresión regular
      errors.push('El nombre solo debe contener letras y espacios.')  // Agrega error si el nombre no es válido
    }
    if (apellido && !soloLetras.test(apellido)) {  // Verifica si el apellido no cumple con la expresión regular
      errors.push('El apellido solo debe contener letras y espacios.')  // Agrega error si el apellido no es válido
    }

    // Validar formato de email
    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/  // Expresión regular para validar el formato del email
    if (email && !emailRegex.test(email)) {  // Verifica si el email no cumple con la expresión regular
      errors.push('Por favor, ingresa un correo electrónico válido.')  // Agrega error si el email no es válido
    }

    // Validar longitud mínima del mensaje
    if (mensaje && mensaje.length < 10) {  // Verifica si el mensaje tiene menos de 10 caracteres
      errors.push('El mensaje debe tener al menos 10 caracteres.')  // Agrega error si el mensaje es demasiado corto
    }

    // Validar que el mensaje no sea solo espacios o caracteres repetidos
    if (mensaje && /^(\s|\S)\1*$/.test(mensaje)) {  // Verifica si el mensaje es solo espacios o caracteres repetidos
      errors.push('El mensaje no puede ser solo espacios o caracteres repetidos.')  // Agrega error si el mensaje no es válido
    }

    return errors  // Retorna los errores encontrados
  }

  const handleSubmit = (e) => {  // Maneja el envío del formulario
    e.preventDefault()  // Previene el comportamiento por defecto del formulario
    
    const errors = validateForm()  // Llama a la función de validación del formulario
    
    if (errors.length > 0) {  // Si hay errores, los muestra
      setMessages(errors.map(error => ({ type: 'error', text: error })))  // Mapea los errores a un formato adecuado para mostrar
      setIsSuccess(false)  // Indica que el envío no fue exitoso
    } else {  // Si no hay errores, muestra mensaje de éxito      
      setMessages([{ type: 'exito', text: 'Formulario enviado correctamente!' }])  // Muestra mensaje de éxito
      setIsSuccess(true)  // Indica que el envío fue exitoso
      setFormData({ nombre: '', apellido: '', email: '', mensaje: '' })  // Limpia los campos del formulario
      setCharCount(0)  // Reinicia el contador de caracteres
    }
  }

  return (  // Renderiza el formulario de contacto
    <section id='formularioContacto' className={`formulario-contacto ${isSuccess ? 'exito' : ''}`}>  {/* Clase para aplicar estilos según el estado de éxito */}
      <h2>Formulario de Contacto</h2>  {/* Título del formulario */}
      <form onSubmit={handleSubmit}>  {/* Maneja el envío del formulario */}
        <label htmlFor="nombre">Nombre:</label>  {/* Etiqueta para el campo nombre */}
        <input  // Campo de entrada para el nombre
          type="text"  // Tipo de campo de entrada
          id="nombre"  // ID del campo para referencia
          name="nombre"  // Nombre del campo para manejar cambios
          value={formData.nombre}  // Valor del campo, vinculado al estado
          onChange={handleInputChange}  // Maneja el cambio en el campo
        />  {/* Fin del campo de entrada para el nombre */}

        <label htmlFor="apellido">Apellido:</label>  {/* Etiqueta para el campo apellido */}
        <input  // Campo de entrada para el apellido
          type="text"  // Tipo de campo de entrada
          id="apellido"  // ID del campo para referencia
          name="apellido"  // Nombre del campo para manejar cambios
          value={formData.apellido}  // Valor del campo, vinculado al estado
          onChange={handleInputChange}  // Maneja el cambio en el campo
        />  {/* Fin del campo de entrada para el apellido */}

        <label htmlFor="email">Email:</label>  {/* Etiqueta para el campo email */}
        <input  // Campo de entrada para el email
          type="email"  // Tipo de campo de entrada
          id="email"  // ID del campo para referencia
          name="email"  // Nombre del campo para manejar cambios
          value={formData.email}  // Valor del campo, vinculado al estado
          onChange={handleInputChange}  // Maneja el cambio en el campo
        />  {/* Fin del campo de entrada para el email */}

        <label htmlFor="mensaje">Mensaje:</label>  {/* Etiqueta para el campo mensaje */}
        <textarea  // Área de texto para el mensaje
          id="mensaje"  // ID del campo para referencia
          name="mensaje"  // Nombre del campo para manejar cambios
          maxLength={maxLength}  // Longitud máxima del mensaje
          value={formData.mensaje}  // Valor del campo, vinculado al estado
          onChange={handleInputChange}  // Maneja el cambio en el campo
        />  {/* Fin del área de texto para el mensaje */}
        
        <div id="contador-caracteres">{charCount} / {maxLength}</div>  {/* Muestra el contador de caracteres */}
        
        <button type="submit">Enviar</button>  {/* Botón para enviar el formulario */}
      </form>  {/* Fin del formulario */}
      
      <div id="msj-formulario">  {/* Contenedor para mostrar mensajes de error o éxito */}
        {messages.map((message, index) => (  // Mapea los mensajes para mostrarlos
          <div key={index} className={`mensaje-${message.type}`}>  {/* Clase para aplicar estilos según el tipo de mensaje */}
            {message.text}  {/* Muestra el texto del mensaje */}
          </div>  // Fin del mensaje
        ))}
      </div>  {/* Fin del contenedor de mensajes */}
    </section>  // Fin del formulario de contacto
  )
}

export default ContactForm  // Exporta el componente ContactForm para que pueda ser utilizado en otros archivos