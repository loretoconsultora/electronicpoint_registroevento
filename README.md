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
que valida los datos y dispara un webhook genérico (`src/lib/webhook.ts`) con
el registro. Ese webhook es responsable de guardar la fila en la Google Sheet
del equipo, mandar el email de notificación, y puede disparar otras
automatizaciones (ej. GoHighLevel). Puede apuntar a n8n o a un Google Apps
Script — ver abajo.

Si falta la variable de entorno, el envío se omite sin romper el registro
(queda un warning en los logs de la función). Cargá en Vercel (Settings →
Environment Variables):

- `REGISTRATION_WEBHOOK_URL` → la URL que corresponda según la opción.

**Opción A — n8n** (la definitiva, permite encadenar más automatizaciones
como GoHighLevel):

1. Importá el workflow (`electronic-point-registro-n8n.json`) en tu
   instancia de n8n.
2. Abrí el nodo **Google Sheets - Agregar fila** y seleccioná/creá tu
   credencial de Google Sheets.
3. Activá el workflow y copiá la URL **de producción** del nodo Webhook.
4. El workflow tal cual viene solo escribe en la Sheet — si querés el email
   de notificación también desde acá, agregale un nodo de Gmail después del
   de Sheets.

**Opción B — Google Apps Script** (la que está activa hoy; no depende de
ningún servicio de terceros, corre con tu propia cuenta de Google):

1. Abrí la planilla → **Extensiones → Apps Script**.
2. Pegá el contenido de `google-apps-script.gs` en el editor.
3. **Implementar → Nueva implementación → Aplicación web**:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
4. Copiá la URL de la aplicación web que te da al implementar.

Esta opción ya escribe en la Sheet **y** manda el email de notificación
(vía `MailApp`, a la dirección definida en `NOTIFICATION_EMAIL` dentro del
script).

Ambas opciones esperan el mismo JSON y escriben en la hoja `Registro`
las columnas ya existentes: `Nombre`, `Teléfono`,
`¿Qué opción te describe mejor?`, `¿Con qué equipo creás actualmente tu
contenido?`, `¿Confirmás tu asistencia al evento?`.

Ver `.env.example` para la lista completa de variables.

## Contenido a actualizar cuando lleguen los assets de marca

- Fecha/hora del evento en `src/lib/event.ts` si cambia la confirmación.
