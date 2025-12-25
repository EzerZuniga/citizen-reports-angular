## Arquitectura — citizen-reports-angular

Esta documentación resume las decisiones arquitectónicas, la estructura del proyecto y las prácticas recomendadas.

### Objetivos

- Modularidad: separar lógica reusable (`core`, `shared`) de features cargadas perezosamente.
- Seguridad y robustez: usar `strict` de TypeScript y `strictTemplates` de Angular.
- Calidad: linters, formateo y pipelines de CI que garanticen builds reproducibles.

### Tecnologías principales

- Angular 17
- TypeScript (modo estricto)
- Karma + Jasmine (unit tests)
- Prettier + ESLint

### Vista general del diseño

- CoreModule: singletons, servicios de aplicación (autenticación, interceptores, telemetría).
- SharedModule: componentes/pipes/directivas reutilizables (sin providers).
- Feature modules: `AuthModule`, `ReportsModule`, cargados perezosamente.
- Routing: rutas principales en `AppRoutingModule` con protección de `AuthGuard`.

### Estructura de carpetas (resumen)

- `src/` — código fuente
  - `app/core/` — servicios singletons, guards, interceptors
  - `app/shared/` — componentes y módulos reutilizables
  - `app/auth/`, `app/reports/` — feature modules (lazy-loaded)
  - `assets/`, `mocks/`, `environments/`
- `docs/` — documentación técnica
- `scripts/` — utilidades de desarrollo (seed, herramientas)
- `.github/workflows/` — CI

### Entornos y configuración

- Usar `src/environments/environment.ts` y `environment.prod.ts`.
- `angular.json` debe incluir `fileReplacements` para producción (ya configurado).
- No almacenar secretos en código; usar variables de entorno del CI y mecanismos de secret management.

### Comunicación con API

- Centralizar la URL base en `environment.apiUrl`.
- Usar `HttpInterceptor` para inyectar `Authorization` y manejo centralizado de errores/401.

### Autenticación y seguridad

- `AuthService` maneja token en `localStorage` (ejemplo actual). Considerar migrar a cookie HttpOnly si se requiere mayor seguridad.
- Interceptor para refresh token / manejo 401.

### Manejo de errores y telemetría

- Registrar errores globales en `main.ts` (handlers ya presentes).
- Integrar Sentry / Datadog / Azure Application Insights en producción.

### Testing

- Unit tests: Karma + Jasmine (módulos, servicios, guards).
- Recomendado: migrar a Jest si se requiere mayor rapidez.
- E2E: añadir Cypress o Playwright para flujos críticos (login, crear reporte, listado).

### CI / CD

- Pipeline mínimo: `npm ci`, `npm run lint`, `npm test`, `npm run build -- --configuration production`.
- Añadir workflow de PR que ejecute lint/tests y build (archivo en `.github/workflows/ci.yml`).

### Scripts útiles

- `npm start` — desarrollo
- `npm run start:hmr` — desarrollo con HMR (si se necesita)
- `npm run build -- --configuration production` — build produccion
- `node scripts/seed-sample.js --count N` — generar fixtures de ejemplo

### Buenas prácticas y recomendaciones

- Mantener `CoreModule` importado solo desde `AppModule`.
- No exportar providers desde `SharedModule`.
- Añadir pruebas unitarias básicas para `AuthGuard`, `ReportService` y `AuthInterceptor`.
- Documentar el proceso de despliegue y variables de entorno en el README.

### Próximos pasos sugeridos

1. Completar `src/environments` con las variables necesarias y eliminar warnings de compilación.
2. Añadir tests unitarios iniciales (AuthGuard, services) y configurar cobertura mínima.
3. Integrar e2e (Cypress) y añadir jobs en CI para e2e opcionalmente en despliegues.
