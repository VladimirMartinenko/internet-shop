import CONSTANTS from "../constants";

function getQueue() {
  if (typeof window === "undefined") {
    return null;
  }
  window.klaviyo = window.klaviyo || [];
  return window.klaviyo;
}

function callKlaviyo(method, ...args) {
  const klaviyo = getQueue();
  if (!klaviyo) {
    return;
  }
  if (typeof klaviyo[method] === "function") {
    klaviyo[method](...args);
    return;
  }
  klaviyo.push([method, ...args]);
}

export function initKlaviyo() {
  const publicKey = CONSTANTS.KLAVIYO_PUBLIC_KEY;
  if (!publicKey || typeof document === "undefined") {
    return;
  }
  if (document.getElementById("klaviyo-onsite")) {
    return;
  }

  getQueue();
  const script = document.createElement("script");
  script.id = "klaviyo-onsite";
  script.async = true;
  script.src = `https://static.klaviyo.com/onsite/js/${publicKey}/klaviyo.js`;
  document.head.appendChild(script);
}

export function getKlaviyoExchangeId() {
  if (typeof window === "undefined") {
    return "";
  }
  try {
    const fromQuery = new URLSearchParams(window.location.search).get("_kx");
    if (fromQuery) {
      return fromQuery;
    }
  } catch (error) {
    // ignore
  }

  const match = document.cookie.match(/(?:^|;\s*)__kla_id=([^;]*)/);
  if (!match) {
    return "";
  }

  try {
    const decoded = atob(decodeURIComponent(match[1]));
    const parsed = JSON.parse(decoded);
    return parsed.$exchange_id || parsed.exchange_id || "";
  } catch (error) {
    return "";
  }
}

export function identifyKlaviyo(profile) {
  if (!profile || !profile.email) {
    return;
  }
  const attributes = {
    email: profile.email,
  };
  if (profile.first_name || profile.firstName) {
    attributes.first_name = profile.first_name || profile.firstName;
  }
  if (profile.last_name || profile.lastName) {
    attributes.last_name = profile.last_name || profile.lastName;
  }
  const phone = profile.phone_number || profile.phone;
  if (phone) {
    const digits = String(phone).replace(/\D/g, "");
    if (String(phone).trim().startsWith("+")) {
      attributes.phone_number = String(phone).replace(/[\s-]/g, "");
    } else if (digits.startsWith("380") && digits.length === 12) {
      attributes.phone_number = `+${digits}`;
    }
  }
  rememberProfile({
    email: attributes.email,
    firstName: attributes.first_name,
    lastName: attributes.last_name,
    phone: attributes.phone_number || phone,
  });
  callKlaviyo("identify", attributes);
}

const SERVER_METRICS = {
  "Viewed Product": true,
  "Viewed Category": true,
  "Added to Cart": true,
  "Started Checkout": true,
};

function rememberProfile(profile) {
  if (!profile || !profile.email) {
    return;
  }
  try {
    sessionStorage.setItem("klaviyo_profile", JSON.stringify(profile));
  } catch (error) {
    // ignore
  }
}

function getRememberedProfile() {
  try {
    const raw = sessionStorage.getItem("klaviyo_profile");
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function getAnonymousId() {
  if (typeof window === "undefined") {
    return "";
  }
  const key = "klaviyo_anon_id";
  try {
    let id = localStorage.getItem(key);
    if (!id) {
      id =
        (window.crypto && crypto.randomUUID && crypto.randomUUID()) ||
        `anon_${Date.now()}_${Math.random().toString(16).slice(2)}`;
      localStorage.setItem(key, id);
    }
    return id;
  } catch (error) {
    return "";
  }
}

function sendServerEvent(eventName, properties) {
  if (!SERVER_METRICS[eventName] || !CONSTANTS.HTTP_SERVER_URL) {
    return;
  }
  const profile = getRememberedProfile() || {};
  const payload = {
    metric: eventName,
    properties,
    email: profile.email,
    firstName: profile.firstName,
    lastName: profile.lastName,
    phone: profile.phone,
    _kx: getKlaviyoExchangeId(),
    anonymousId: getAnonymousId(),
    value: properties.$value,
    uniqueId: properties.$event_id,
  };
  fetch(`${CONSTANTS.HTTP_SERVER_URL}klaviyo/track`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

export function trackKlaviyo(eventName, properties = {}) {
  if (!eventName) {
    return;
  }
  callKlaviyo("track", eventName, properties);
  sendServerEvent(eventName, properties);
}

export function trackViewedItemKlaviyo(item) {
  if (!item) {
    return;
  }
  callKlaviyo("trackViewedItem", item);
}
