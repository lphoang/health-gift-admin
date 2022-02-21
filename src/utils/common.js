export const AppointmentStatus = {
  INCOMING: "incoming",
  CANCELED: "canceled",
  DONE: "done",
};

export const AppointmentType = {
  OFFLINE: "offline",
  ONLINE: "online",
};

export const CertificateCheckStatus = {
  NOT_VERIFIED: "not verified",
  VERIFIED: "verified",
};

Object.freeze(AppointmentStatus, AppointmentType, CertificateCheckStatus);
