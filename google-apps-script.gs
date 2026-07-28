/**
 * Pegar este código en Extensions → Apps Script de la planilla de
 * registro, y publicarlo como Web App (ver README.md, sección
 * "Webhook de registro").
 *
 * Espera un POST con JSON: { nombre, telefono, perfil, equipo, asistencia }
 * y:
 *   1. Agrega una fila a la hoja "Registro" en ese mismo orden de columnas.
 *   2. Envía un email de notificación con MailApp (usando tu propia
 *      cuenta de Google, sin servicios de terceros).
 */
var NOTIFICATION_EMAIL = "hello@loretoconsultora.lat,correopoint@gmail.com";

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Registro");
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.nombre || "",
    data.telefono || "",
    data.perfil || "",
    data.equipo || "",
    data.asistencia || "",
  ]);

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "Nueva inscripción al taller: " + (data.nombre || ""),
    htmlBody:
      "<h2>Nueva inscripción — Taller de Creación de Contenido</h2>" +
      "<p><strong>Nombre:</strong> " + (data.nombre || "") + "</p>" +
      "<p><strong>Teléfono:</strong> " + (data.telefono || "") + "</p>" +
      "<p><strong>Perfil:</strong> " + (data.perfil || "") + "</p>" +
      "<p><strong>Equipo actual:</strong> " + (data.equipo || "") + "</p>" +
      "<p><strong>Confirma asistencia:</strong> " + (data.asistencia || "") + "</p>",
  });

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
