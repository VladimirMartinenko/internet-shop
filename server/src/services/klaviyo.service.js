const https = require("https");

const KLAVIYO_HOST = "a.klaviyo.com";

function getApiKey() {
  return process.env.KLAVIYO_PRIVATE_API_KEY;
}

function getRevision() {
  return process.env.KLAVIYO_REVISION || "2026-01-15";
}

function isConfigured() {
  return Boolean(getApiKey());
}

function request({ method, pathname, body }) {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("Klaviyo skipped: KLAVIYO_PRIVATE_API_KEY is not set");
    return Promise.resolve({ skipped: true });
  }

  const payload = body ? JSON.stringify(body) : null;

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: KLAVIYO_HOST,
        path: pathname,
        method,
        headers: {
          Authorization: `Klaviyo-API-Key ${apiKey}`,
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          revision: getRevision(),
          ...(payload ? { "Content-Length": Buffer.byteLength(payload) } : {}),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          const ok = res.statusCode >= 200 && res.statusCode < 300;
          if (!ok) {
            const error = new Error(
              `Klaviyo ${method} ${pathname} failed: ${res.statusCode} ${data}`
            );
            error.statusCode = res.statusCode;
            error.body = data;
            reject(error);
            return;
          }
          resolve({ statusCode: res.statusCode, data });
        });
      }
    );

    req.on("error", reject);
    if (payload) {
      req.write(payload);
    }
    req.end();
  });
}

function buildProfileAttributes({ email, phone, firstName, lastName }) {
  const attributes = {};
  if (email) {
    attributes.email = email;
  }
  if (phone && String(phone).startsWith("+")) {
    attributes.phone_number = phone;
  }
  if (firstName) {
    attributes.first_name = firstName;
  }
  if (lastName) {
    attributes.last_name = lastName;
  }
  return attributes;
}

async function createEvent({
  metric,
  email,
  phone,
  firstName,
  lastName,
  properties = {},
  value,
  valueCurrency = "UAH",
  uniqueId,
  time,
}) {
  if (!metric) {
    throw new Error("Klaviyo event requires a metric name");
  }

  const profileAttributes = buildProfileAttributes({
    email,
    phone,
    firstName,
    lastName,
  });
  if (!profileAttributes.email && !profileAttributes.phone_number) {
    throw new Error("Klaviyo event requires email or phone_number");
  }

  const attributes = {
    properties,
    metric: {
      data: {
        type: "metric",
        attributes: { name: metric },
      },
    },
    profile: {
      data: {
        type: "profile",
        attributes: profileAttributes,
      },
    },
  };

  if (value !== undefined && value !== null) {
    attributes.value = Number(value);
    attributes.value_currency = valueCurrency;
  }
  if (uniqueId) {
    attributes.unique_id = String(uniqueId);
  }
  if (time) {
    attributes.time = time;
  }

  try {
    return await request({
      method: "POST",
      pathname: "/api/events/",
      body: {
        data: {
          type: "event",
          attributes,
        },
      },
    });
  } catch (error) {
    console.error(error.message);
    return { ok: false, error: error.message };
  }
}

module.exports = {
  isConfigured,
  createEvent,
};
