# 🎨 Museo DelAle

Aplicación web interactiva para la gestión y visualización de una colección de obras de arte.

## 📋 Descripción

Museo DelAle es una aplicación web moderna que permite visualizar una colección de obras de arte y gestionar el contenido a través de un panel de administración. El proyecto utiliza **LocalStorage** para el almacenamiento persistente de datos, permitiendo agregar, editar y eliminar obras sin necesidad de un backend.

## ✨ Características Principales

### Para Visitantes
- 🖼️ **Galería de Obras**: Visualización de todas las obras con información detallada
- 🔍 **Modal de Detalles**: Vista ampliada de cada obra con imagen grande y descripción completa
- 📱 **Diseño Responsive**: Adaptado para dispositivos móviles, tablets y desktop
- 🎨 **Interfaz Moderna**: Diseño elegante con animaciones suaves

### Para Administradores
- 🔐 **Sistema de Login**: Acceso protegido al panel de administración
- ➕ **Agregar Obras**: Formulario completo para cargar nuevas obras
- ✏️ **Editar Obras**: Modificar información de obras existentes
- 🗑️ **Eliminar Obras**: Remover obras de la colección con confirmación elegante
- 💾 **Persistencia de Datos**: Todos los cambios se guardan en LocalStorage
- 🔔 **Notificaciones Toast**: Mensajes elegantes para confirmar acciones
- ⚠️ **Modal de Confirmación**: Diálogo personalizado para acciones críticas

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con animaciones y gradientes
- **JavaScript (ES6+)**: Lógica de la aplicación
- **LocalStorage**: Almacenamiento persistente en el navegador
- **Git & GitHub**: Control de versiones y hosting

## 📁 Estructura del Proyecto

```
pre entrega/
├── index.html              # Página principal
├── pages/
│   ├── coleccion.html     # Galería de obras
│   ├── admin.html         # Panel de administración
│   └── contacto.html      # Página de contacto
├── css/
│   └── styles.css         # Estilos globales
├── js/
│   ├── db.js              # Inicialización de datos
│   ├── coleccion.js       # Lógica de la galería
│   └── admin.js           # Lógica del panel admin
├── img/                   # Imágenes del sitio
└── README.md
```

## 🔧 Instalación y Uso

### Opción 1: Clonar el Repositorio

```bash
git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git
cd pre-entrega
```

### Opción 2: Descargar ZIP

1. Descargá el proyecto como ZIP
2. Descomprimí la carpeta
3. Abrí `index.html` en tu navegador

### Uso Local

Simplemente abrí el archivo `index.html` en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).

## 🔐 Credenciales de Administrador

Para acceder al panel de administración (`pages/admin.html`):

- **Usuario**: `admin`
- **Contraseña**: `1234`

## 💡 Funcionalidades Detalladas

### LocalStorage

El proyecto utiliza LocalStorage para:
- Almacenar la colección de obras
- Mantener el estado de login del administrador
- Persistir cambios entre sesiones del navegador

### Gestión de Obras

Cada obra contiene:
- Título
- Artista
- Año
- Técnica
- Dimensiones
- Descripción
- URL de imagen

### Notificaciones

El sistema incluye:
- **Toast Notifications**: Mensajes elegantes que aparecen en la esquina
- **Modal de Confirmación**: Diálogo personalizado para eliminar obras
- **Animaciones Suaves**: Transiciones fluidas en todas las interacciones

## 🎯 Requisitos del Proyecto

Este proyecto cumple con los siguientes requisitos:

### Opción "Easy"
- ✅ Formulario con validaciones
- ✅ Mensajes de validación
- ✅ Redirección/cambio de vista tras login

### Opción "Hard"
- ✅ Carrito/Gestión con LocalStorage
- ✅ Consumo de objetos JSON
- ✅ Agregar elementos a un listado dinámicamente

## 🌐 Demo en Vivo

[Enlace a GitHub Pages o tu hosting]

## 👨‍💻 Autor

**Ale** - Proyecto final para el curso de JavaScript

## 📝 Notas de Desarrollo

- El proyecto NO requiere servidor backend
- Todos los datos se almacenan localmente en el navegador
- Las imágenes de las obras se cargan desde URLs externas
- El código está completamente documentado en español

## 🔄 Actualizaciones Recientes

- ✨ Sistema de notificaciones toast elegantes
- ✨ Modal de confirmación personalizado
- ✨ Modal de detalles de obras con imagen ampliada
- ✨ Optimización y documentación completa del código
- ✨ Mejoras en la interfaz de usuario del panel admin
- ✨ Credenciales de prueba visibles en la página de login

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

---

⭐ Si te gustó el proyecto, no olvides darle una estrella en GitHub!