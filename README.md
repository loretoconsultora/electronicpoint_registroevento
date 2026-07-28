# Electronic Point — Registro al Taller de Creación de Contenido

Landing de información y registro para el taller de creación de contenido
de Electronic Point (Miércoles 5 de agosto, 18 hs, Costa Rica 5509, Palermo).
Next.js 16 (App Router) + Tailwind CSS 4.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Cómo funciona el registro

El formulario postea a `POST /api/register` (`src/app/api/register/route.ts`),
que valida los datos y dispara en paralelo:

1. Un email de notificación vía **Resend** (`src/lib/mailer.ts`).
2. Un webhook a **n8n** (`src/lib/n8n.ts`), que guarda la fila en la Google
   Sheet del equipo y puede disparar otras automatizaciones (ej. GoHighLevel).

Si falta alguna variable de entorno, esa vía se omite sin romper el registro
(queda un warning en los logs de la función). Cargar en Vercel (Settings →
Environment Variables):

### 1. Email con Resend

1. Creá una cuenta gratis en [resend.com](https://resend.com).
2. Generá una API key.
3. Cargá en Vercel:
   - `RESEND_API_KEY`
   - `RESEND_TO_EMAIL` (opcional, por defecto `loretoconsultora@gmail.com`)

El remitente usa el dominio de pruebas `onboarding@resend.dev`. Si más
adelante quieren enviar desde un dominio propio (ej. `@electronicpoint.ar`),
hay que verificarlo en Resend y actualizar el `from` en `src/lib/mailer.ts`.

### 2. n8n (Google Sheets + automatizaciones)

1. Importá el workflow (`electronic-point-registro-n8n.json`) en tu instancia
   de n8n.
2. Abrí el nodo **Google Sheets - Agregar fila** y seleccioná/creá tu
   credencial de Google Sheets.
3. Activá el workflow y copiá la URL **de producción** del nodo Webhook.
4. Cargá en Vercel:
   - `N8N_WEBHOOK_URL` → esa URL

El workflow ya viene mapeado a las columnas de la planilla existente
(`Nombre`, `Teléfono`, `¿Qué opción te describe mejor?`,
`¿Con qué equipo creás actualmente tu contenido?`,
`¿Confirmás tu asistencia al evento?`).

Ver `.env.example` para la lista completa de variables.

## Contenido a actualizar cuando lleguen los assets de marca

- Fecha/hora del evento en `src/lib/event.ts` si cambia la confirmación.
