import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Declaración segura para HMR cuando no están los tipos de Node en el build
declare const module:
  | {
      hot?: {
        accept: () => void;
        dispose: (cb: () => void) => void;
      };
    }
  | undefined;

/**
 * Entry point bootstrap seguro y profesional:
 * - mide el tiempo de arranque
 * - escucha errores globales y promesas no manejadas
 * - provee hook HMR seguro (si está habilitado en el entorno)
 */

function registerGlobalErrorHandlers() {
  if (typeof window === 'undefined') return;

  window.addEventListener('error', (event: ErrorEvent) => {
    // eslint-disable-next-line no-console
    console.error('Global error captured:', event.error || event.message, event);
  });

  window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
    // eslint-disable-next-line no-console
    console.error('Unhandled promise rejection:', event.reason);
  });
}

async function bootstrap() {
  registerGlobalErrorHandlers();

  const t0 = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();

  try {
    await platformBrowserDynamic().bootstrapModule(AppModule);
    const t1 =
      typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
    // eslint-disable-next-line no-console
    console.info(`App bootstrapped in ${Math.round(t1 - t0)} ms`);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Bootstrap failed:', err);
    // Optionally rethrow or report to telemetry
  }

  // HMR support (safe guard)
  if (module?.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
      // Optional: perform cleanup before replacing module
      // e.g. remove global listeners if needed
    });
  }
}

bootstrap();
