# Sistema de Inventario

Una aplicación web completa para gestionar inventario de productos con frontend interactivo y backend REST API.

## 👥 Integrantes

- **James David Ortiz
- **Davis Segundo Girón**
- **Samuel David Guerrero**

## 📋 Descripción

Este proyecto es un sistema de gestión de inventario que permite:
- ✅ Listar todos los productos
- ✅ Agregar nuevos productos
- ✅ Editar información de productos existentes
- ✅ Eliminar productos del inventario
- ✅ Visualizar cantidad total y precio de cada producto

## 🏗️ Estructura del Proyecto

```
sistemas de inventario/
│
├── backend/
│   ├── package.json          # Dependencias del servidor
│   ├── server.js             # Servidor Express con API REST
│   ├── database.js           # Configuración de SQLite
│   ├── inventario.db         # Base de datos SQLite
│   └── node_modules/         # Dependencias instaladas
│
├── assets/                   # Carpeta de recursos (imágenes, etc.)
├── index.html                # Página principal
├── script.js                 # Lógica del frontend
├── style.css                 # Estilos CSS
├── package-lock.json         # Lock file del frontend (opcional)
└── README.md                 # Este archivo
```

## 🚀 Instalación y Configuración

### Requisitos Previos
- **Node.js** (versión 14 o superior)
- **npm** (incluido con Node.js)

### Pasos de Instalación

#### 1. Instalar dependencias del backend

```powershell
Set-Location 'C:\Users\david\OneDrive\Desktop\sistemas de invetario\backend'
npm install
```

Esto instalará las siguientes dependencias:
- `express` - Framework web
- `sqlite3` - Base de datos
- `cors` - Habilitación de CORS

#### 2. Iniciar el servidor backend

Desde la carpeta `backend/`:

```powershell
npm start
```

El servidor estará disponible en `http://localhost:3000`

#### 3. Abrir el frontend

Abre `index.html` en tu navegador usando **Live Server** (VS Code) o un servidor local:

```powershell
# Opción 1: Live Server en VS Code
# Haz clic derecho en index.html → "Open with Live Server"

# Opción 2: Simple HTTP Server con Python (si tienes Python instalado)
python -m http.server 5500
```

Luego abre `http://localhost:5500/index.html` en tu navegador.

## 🔌 API REST - Endpoints

El backend proporciona los siguientes endpoints:

### Obtener todos los productos
```
GET /api/productos
```
**Respuesta (200):**
```json
[
  {
    "id": 1,
    "nombre": "Manzana",
    "cantidad": 20,
    "precio": 1.5
  }
]
```

### Crear un producto
```
POST /api/productos
```
**Body:**
```json
{
  "nombre": "Producto nuevo",
  "cantidad": 10,
  "precio": 25.99
}
```
**Respuesta (201):**
```json
{
  "id": 2
}
```

### Actualizar un producto
```
PUT /api/productos/:id
```
**Body:**
```json
{
  "nombre": "Producto actualizado",
  "cantidad": 15,
  "precio": 30.50
}
```
**Respuesta (200):**
```json
{
  "updated": 1
}
```

### Eliminar un producto
```
DELETE /api/productos/:id
```
**Respuesta (200):**
```json
{
  "deleted": 1
}

