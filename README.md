# Electronic Point — Registro al Taller de Creación de Contenido

Landing de información y registro para el taller de creación de contenido
de Electronic Point (Viernes 31 de julio, 19 hs, Costa Rica 5509, Palermo).
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
2. Una fila nueva en una **Google Sheet** (`src/lib/sheets.ts`).

Si falta alguna credencial, esa vía se omite sin romper el registro (queda
un warning en los logs de la función). Para que ambas funcionen en
producción hay que cargar las variables de entorno de abajo en el proyecto
de Vercel (Settings → Environment Variables).

### 1. Email con Resend

1. Creá una cuenta gratis en [resend.com](https://resend.com).
2. Generá una API key.
3. Cargá en Vercel:
   - `RESEND_API_KEY`
   - `RESEND_TO_EMAIL` (opcional, por defecto `loretoconsultora@gmail.com`)

El remitente usa el dominio de pruebas `onboarding@resend.dev`. Si más
adelante quieren enviar desde un dominio propio (ej. `@electronicpoint.ar`),
hay que verificarlo en Resend y actualizar el `from` en `src/lib/mailer.ts`.

### 2. Google Sheet

1. En [Google Cloud Console](https://console.cloud.google.com/), creá un
   proyecto (o usá uno existente) y una **cuenta de servicio**
   (IAM & Admin → Service Accounts).
2. Generá una clave JSON para esa cuenta de servicio.
3. Habilitá la **Google Sheets API** en el proyecto.
4. Creá una planilla de Google Sheets con una hoja llamada `Registros`
   (o el nombre que prefieras) y agregá esta fila de encabezados:
   `Fecha | Nombre | Teléfono | Perfil | Equipo | Asistencia`
5. Compartí la planilla con el email de la cuenta de servicio
   (algo como `nombre@proyecto.iam.gserviceaccount.com`) con permiso de
   **Editor**.
6. Cargá en Vercel:
   - `GOOGLE_SHEETS_CLIENT_EMAIL` → el email de la cuenta de servicio
   - `GOOGLE_SHEETS_PRIVATE_KEY` → el campo `private_key` del JSON
     (tal cual, con los `\n`; Vercel lo interpreta bien como variable
     multilinea)
   - `GOOGLE_SHEETS_SPREADSHEET_ID` → el ID de la planilla (está en la URL,
     entre `/d/` y `/edit`)
   - `GOOGLE_SHEETS_SHEET_NAME` (opcional, por defecto `Registros`)

Ver `.env.example` para la lista completa de variables.

## Contenido a actualizar cuando lleguen los assets de marca

- Logo y colores exactos de Electronic Point (por ahora se usa un wordmark
  de texto y el azul de la bandera argentina como acento).
- Fecha/hora del evento en `src/lib/event.ts` si cambia la confirmación.
