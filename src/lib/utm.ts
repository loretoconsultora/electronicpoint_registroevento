const STORAGE_KEY = "ep_utm_params";

export interface UtmParams {
  utm_source?: string;
  utm_campaign?: string;
}

export function captureUtmParams() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get("utm_source");
  const utm_campaign = params.get("utm_campaign");

  if (!utm_source && !utm_campaign) return;

  const stored: UtmParams = {};
  if (utm_source) stored.utm_source = utm_source;
  if (utm_campaign) stored.utm_campaign = utm_campaign;

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
