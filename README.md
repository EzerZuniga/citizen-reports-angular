# Citizen Reports - Sistema de Gestión de Reportes Ciudadanos

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-00C7B7?style=for-the-badge)

Sistema web completo para la gestión de reportes ciudadanos, desarrollado con Angular 17. Permite a los ciudadanos reportar problemas en la comunidad y seguir su estado de resolución.

## 🌟 Características Principales

### 🔐 **Autenticación Segura**
- Sistema de login con validaciones
- Gestión de sesiones persistente
- Protección de rutas con guards
- Logout seguro

### 📋 **Gestión Completa de Reportes**
- **CRUD completo**: Crear, Leer, Actualizar, Eliminar reportes
- **Categorización**: Infraestructura, Seguridad, Medio Ambiente, Transporte, Otros
- **Estados de seguimiento**: Pendiente, En Progreso, Resuelto, Cerrado
- **Filtros avanzados**: Por categoría, estado, fecha y ubicación
- **Búsqueda inteligente**: En títulos, descripciones y ubicaciones

### 🎨 **Experiencia de Usuario**
- **Diseño responsive** para móviles, tablets y desktop
- **Interfaz moderna** con componentes reutilizables
- **Validación en tiempo real** de formularios
- **Feedback visual** con badges y alerts
- **Paginación** para listas extensas
- **Estados de carga** con spinners

### 🏗️ **Arquitectura Profesional**
- **Modularidad**: Separación por funcionalidades
- **Lazy Loading**: Optimización de carga inicial
- **Servicios centralizados**: Lógica de negocio reutilizable
- **Componentes puros**: Separación de responsabilidades
- **Tipado fuerte** con TypeScript

## 📁 Estructura del Proyecto
citizen-reports-angular/
├── src/
│ ├── app/
│ │ ├── auth/ # Módulo de autenticación
│ │ │ ├── login/ # Componente de login
│ │ │ ├── auth-routing.module.ts # Rutas de auth
│ │ │ └── auth.module.ts # Módulo de auth
│ │ │
│ │ ├── core/ # Núcleo de la aplicación
│ │ │ ├── guards/ # Guards de autenticación
│ │ │ ├── services/ # Servicios centrales
│ │ │ └── core.module.ts # Módulo core
│ │ │
│ │ ├── reports/ # Módulo de reportes
│ │ │ ├── components/ # Componentes de reportes
│ │ │ ├── models/ # Modelos e interfaces
│ │ │ ├── services/ # Servicios de reportes
│ │ │ ├── reports-routing.module.ts
│ │ │ └── reports.module.ts
│ │ │
│ │ ├── shared/ # Componentes compartidos
│ │ │ ├── components/ # Navbar, Footer
│ │ │ └── shared.module.ts
│ │ │
│ │ ├── app-routing.module.ts # Rutas principales
│ │ ├── app.component.* # Componente raíz
│ │ └── app.module.ts # Módulo principal
│ │
│ ├── assets/ # Recursos estáticos
│ ├── styles.scss # Estilos globales
│ └── index.html # HTML principal
│
├── angular.json # Configuración de Angular
├── package.json # Dependencias y scripts
├── tsconfig.json # Configuración TypeScript
└── README.md # Este archivo

text

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js 16+** (Recomendado: 18 LTS)
- **npm 8+** o **yarn 1.22+**
- **Angular CLI 17+**

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd citizen-reports-angular
Instalar dependencias

bash
npm install
# o con yarn
yarn install
Verificar instalación

bash
ng version
# Debería mostrar Angular CLI: 17.x.x
Ejecutar la aplicación en desarrollo

bash
npm start
# o
ng serve
