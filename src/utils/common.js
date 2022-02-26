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

export const getExtension = (filename) => {
  let parts = filename.split(".");
  let image = "image/";
  return image.concat(parts[parts.length - 1]);
};

export default function formatDate(dateArr) {
  if (dateArr !== null && dateArr.length >= 6) {
    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];
    let hour = dateArr[3];
    let minutues = dateArr[4];
    let seconds = dateArr[5];
    return `${hour}h ${minutues}m ${seconds}s - ${day}/${month}/${year}`;
  }
}
