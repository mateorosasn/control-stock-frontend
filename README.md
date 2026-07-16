# 💈 Barbería Premium - Frontend

## 📖 Descripción

Barbería Premium es una aplicación web desarrollada con React y Vite que permite a los usuarios conocer los servicios ofrecidos por la barbería, visualizar el equipo de barberos, registrarse, iniciar sesión y reservar turnos de manera rápida e intuitiva.

El frontend consume una API REST desarrollada con Node.js y Express, la cual administra toda la información relacionada con usuarios, servicios y turnos almacenados en MongoDB Atlas.

El objetivo del proyecto es brindar una experiencia moderna, sencilla y organizada tanto para los clientes como para el administrador del sistema.

---

# 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Axios
- Bootstrap 5
- CSS3
- JavaScript (ES6)

---

# 🎨 Funcionalidades implementadas

## 🏠 Página Principal

La página principal presenta la identidad visual de Barbería Premium mediante un diseño moderno y responsive.

Incluye:

- Carrusel de imágenes.
- Sección de presentación.
- Acceso rápido a la reserva de turnos.
- Información sobre la barbería.
- Equipo de barberos.
- Footer con información de contacto.

---

## ✂️ Servicios

Los usuarios pueden visualizar todos los servicios registrados desde la base de datos.

Cada servicio muestra su información de forma clara para facilitar la elección antes de reservar un turno.

---

## 💈 Equipo de Barberos

Se muestra el equipo profesional de la barbería junto con una breve descripción de cada integrante.

---

## 📅 Reserva de Turnos

Los clientes pueden reservar turnos completando un formulario donde se solicita:

- Nombre
- Teléfono
- Servicio
- Barbero
- Fecha
- Hora

El sistema realiza distintas validaciones antes de guardar la reserva.

---

## ✅ Validaciones implementadas

Durante el desarrollo se agregaron diversas validaciones para mejorar la experiencia del usuario.

Entre ellas:

- Campos obligatorios.
- Validación del teléfono.
- No permite seleccionar fechas inválidas.
- No permite reservar horarios ocupados.
- Mensajes de error claros para el usuario.

---

## 👤 Registro e Inicio de Sesión

El sistema permite crear nuevas cuentas e iniciar sesión.

Dependiendo del tipo de usuario se habilitan distintas funcionalidades.

---

## 🔐 Panel Administrador

Los administradores pueden:

- Visualizar todos los turnos.
- Confirmar reservas.
- Eliminar turnos.
- Buscar clientes.
- Administrar la información del sistema.

---

## ❌ Manejo de errores

El frontend incorpora una página personalizada para el Error 404.

Además consume las respuestas enviadas por el backend para informar correctamente cuando un recurso solicitado no existe.

---

# 📱 Responsive Design

La aplicación fue desarrollada para adaptarse correctamente a:

- Computadoras.
- Tablets.
- Dispositivos móviles.

---

# 🔗 Comunicación con el Backend

Toda la información utilizada por la aplicación se obtiene mediante solicitudes HTTP utilizando Axios.

El frontend consume los endpoints desarrollados con Express para:

- Usuarios.
- Turnos.
- Servicios.

---

# ▶️ Instalación

Clonar el repositorio

```bash
git clone URL_DEL_FRONTEND
```

Ingresar al proyecto

```bash
cd frontend
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

---

# 📂 Estructura del proyecto

```
src/
│
├── components/
├── pages/
├── router/
├── services/
├── assets/
├── App.jsx
└── main.jsx
```

---

# 👨‍💻 Autor

**Mateo Rosas**

Proyecto desarrollado para **Rolling Code School** como trabajo final del curso de Desarrollo Web Full Stack.

---

# 📌 Estado del Proyecto

🟢 En desarrollo avanzado.

Actualmente el proyecto cuenta con aproximadamente un 92 % de desarrollo, incluyendo frontend completamente funcional e integración con el backend mediante una API REST.

Las mejoras futuras incluyen el despliegue en producción, optimizaciones visuales y nuevas funcionalidades para la administración del sistema.
