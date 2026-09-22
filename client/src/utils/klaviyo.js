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
  if (phone && String(phone).startsWith("+")) {
    attributes.phone_number = phone;
  }
  callKlaviyo("identify", attributes);
}

export function trackKlaviyo(eventName, properties = {}) {
  if (!eventName) {
    return;
  }
  callKlaviyo("track", eventName, properties);
}
