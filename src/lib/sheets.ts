import { google } from "googleapis";
import type { RegistrationPayload } from "./mailer";

export async function appendRegistrationToSheet(payload: RegistrationPayload) {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    console.warn(
      "Credenciales de Google Sheets no configuradas, se omite el guardado."
    );
    return;
  }

  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Registros";

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:F`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          payload.nombre,
          payload.telefono,
          payload.perfil,
          payload.equipo,
          payload.asistencia,
        ],
      ],
    },
  });
}
