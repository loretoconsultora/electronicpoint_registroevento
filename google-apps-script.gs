/**
 * Alternativa rápida al webhook de n8n: pegar este código en
 * Extensions → Apps Script de la planilla de registro, y publicarlo
 * como Web App (ver README.md, sección "n8n / webhook").
 *
 * Espera un POST con JSON: { nombre, telefono, perfil, equipo, asistencia }
 * y agrega una fila a la hoja "Registro" en ese mismo orden de columnas.
 */
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

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
