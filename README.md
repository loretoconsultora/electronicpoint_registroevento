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
que valida los datos y dispara, en paralelo, dos envíos independientes:

1. `src/lib/webhook.ts` → guarda la fila en la Google Sheet del equipo y
   manda el email de notificación. Puede apuntar a n8n o a un Google Apps
   Script — ver abajo.
2. `src/lib/gohighlevel.ts` → carga el lead en GoHighLevel a través de un
   Inbound Webhook de un Workflow.

Si falta alguna de las dos variables de entorno, ese envío se omite sin
romper el registro (queda un warning en los logs de la función) — son
independientes entre sí. Cargá en Vercel (Settings → Environment Variables):

- `REGISTRATION_WEBHOOK_URL` → la URL que corresponda según la opción (A o B).
- `GOHIGHLEVEL_WEBHOOK_URL` → la URL del Inbound Webhook del Workflow de
  GoHighLevel (no requiere API Key ni Location ID).

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

**GoHighLevel**: como el formulario no pide email, el envío usa el teléfono
como identificador (GoHighLevel exige email o teléfono). El nombre completo
se separa en `firstName`/`lastName` por el primer espacio. Se mandan también
`tags: ["Lead", "TallerContenido"]`, `source: "Landing Taller"`, y el perfil,
equipo y confirmación de asistencia como campos extra.

Si alguien llega a la landing con `?utm_source=...&utm_campaign=...` en la
URL (por ejemplo desde un anuncio de Facebook), esos valores se guardan en
`sessionStorage` apenas carga la página (`src/lib/utm.ts`) y se mandan junto
con el registro, aunque el usuario tarde en completar el formulario.

Ver `.env.example` para la lista completa de variables.

## Tracking (Meta Pixel + Microsoft Clarity)

- `NEXT_PUBLIC_META_PIXEL_ID` → carga el píxel de Meta en todo el sitio
  (`src/components/MetaPixel.tsx`). Trackea `PageView` automático y dispara
  un evento `Lead` (`src/lib/metaPixel.ts`) cuando alguien completa el
  registro con éxito.
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` → carga el snippet de Microsoft Clarity
  (`src/components/ClarityScript.tsx`) para grabaciones de sesión y mapas de
  calor.

Ambas son opcionales e independientes: si falta alguna, ese script
simplemente no se carga, sin afectar el resto del sitio. Como van al
bundle del cliente necesitan el prefijo `NEXT_PUBLIC_` — no son datos
sensibles, ya quedan visibles en el código fuente de la página una vez
publicado.

## Contenido a actualizar cuando lleguen los assets de marca

- Fecha/hora del evento en `src/lib/event.ts` si cambia la confirmación.
