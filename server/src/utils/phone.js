function toE164(phone) {
  if (!phone) {
    return undefined;
  }
  const raw = String(phone).trim();
  if (raw.startsWith("+") && /^\+[1-9]\d{7,14}$/.test(raw.replace(/[\s-]/g, ""))) {
    return raw.replace(/[\s-]/g, "");
  }
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("380") && digits.length === 12) {
    return `+${digits}`;
  }
  if (digits.startsWith("0") && digits.length === 10) {
    return `+38${digits}`;
  }
  return undefined;
}

module.exports = { toE164 };
