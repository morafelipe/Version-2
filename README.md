# 🛒 E-Com Inicio

**Página de inicio de un e-commerce desarrollada con Next.js**, basada en la estructura solicitada por el docente.
Incluye categorías, listado de productos, filtrado dinámico, paginación y diseño responsivo.

---

## ✅ Características principales

### 🔹 1. **Navbar**

Barra superior con navegación básica.

### 🔹 2. **Hero Section**

Sección principal con imagen destacada, texto promocional y botón de acción.

### 🔹 3. **Categorías (Filtro)**

Listado de categorías centrado horizontalmente.
Al hacer clic, se filtran los productos sin recargar la página.

### 🔹 4. **Listado de Productos**

Grid responsiva que muestra los productos según la categoría seleccionada.

### 🔹 5. **Paginación**

Los productos se dividen en páginas para mejorar la experiencia del usuario.

### 🔹 6. **Diseño Responsivo**

Adaptado a móvil, tablet y escritorio utilizando Tailwind CSS.

### 🔹 7. **Código Modular**

Componentes separados y organizados:

* `Navbar`
* `Hero`
* `Categories`
* `ProductGrid`
* `Pagination`

---

## 📁 Estructura del Proyecto

```
e-cominicio/
├── public/
│   ├── Camisetas/
│   ├── heater/
│   ├── maletas/
│   ├── oversized/
│   ├── sacos/
│   └── ...otros assets
│
└── src/
    ├── app/
    │   ├── layout.js
    │   ├── page.js
    │   └── globals.css
    │
    ├── components/
    │   ├── Categories.jsx
    │   ├── Grid.jsx
    │   ├── Hero.jsx
    │   ├── Pagination.jsx
    │   └── Navbar.jsx
    │
    └── data/
        └── Products.js
```

---

## 🧩 Funcionalidad del Filtrado

El filtrado se implementa usando **estado en React (useState)**.
Los productos se cargan desde un archivo estático (`Products.js`) y se muestran según:

✅ Categoría seleccionada
✅ Página activa
✅ Cantidad de productos por página

---

## ⚙️ Tecnologías utilizadas

| Tecnología           | Uso                         |
| -------------------- | --------------------------- |
| **Next.js 14**       | Framework principal         |
| **React**            | Lógica de UI y estados      |
| **Tailwind CSS**     | Estilos y diseño responsivo |
| **Material Symbols** | Iconos de navegación        |
| **JavaScript**       | Manejo de datos y filtrado  |

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/usuario/e-cominicio.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el entorno local:

```bash
npm run dev
```

4. Abrir en el navegador:

```
http://localhost:3000
```

---

## ✨ Posibles Mejoras

* Filtrado por rango de precios
* Búsqueda por nombre
* Animaciones con Framer Motion
* Carrito de compras (context/global state)
* Páginas de producto individuales

---

Desarrollado como práctica para la asignatura de **Frameworks de Desarrollo Web**.

