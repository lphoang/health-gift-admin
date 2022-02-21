import {
  AppointmentStatus,
  AppointmentType,
  CertificateCheckStatus,
} from "../utils/common";

export function getLoading() {
  return {
    isLoading: true,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  };
}

export function getInitialUserInfo() {
  return {
    age: 0,
    role: "",
    email: "",
    enabled: false,
    firstName: "",
    id: "",
    lastName: "",
    locked: false,
    password: "",
    username: "",
  };
}

export function getInitialDiseaseInfo() {
  return {
    name: "",
    overview: "",
    cause: "",
    symptom: "",
    routesOfTransmission: "",
    objects: "",
    precautions: "",
    diagnosis: "",
    treatmentMeasures: "",
  };
}

export function getInitialBlogInfo() {
  return {
    title: "",
    body: "",
    imageUrl: [],
    createdAt: new Date(),
  };
}

export function getInitialAppointmentInfo() {
  return {
    appointmentId: "",
    title: "",
    appointmentType: AppointmentType.OFFLINE,
    status: AppointmentStatus.INCOMING,
    description: "",
    startTime: new Date(),
    endTime: new Date(),
    createdAt: new Date(),
    lastModifiedAt: new Date(),
  };
}

export function getInitialSpecialistInfo() {
  return {
    specialistId: "",
    specialistName: "",
  };
}

export function getInitialDoctorInfo() {
  return {
    id: "",
    doctorId: "",
    email: "",
    firstName: "",
    lastName: "",
    reviewRating: 0,
    appointments: [],
    certificates: [],
    specialists: [],
    reviews: [],
  };
}

export function getInitialCertificateInfo() {
  return {
    id: "",
    certificateName: "",
    awardedBy: "",
    description: "",
    imageUrl: "",
    issuedOn: new Date(),
    status: CertificateCheckStatus.NOT_VERIFIED,
  };
}

export function getInitialPatientInfo() {
  return {
    id: "",
    patientId: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    birthDate: new Date(),
    city: "",
    phoneNumber: "",
    zipCode: "",
    appointments: [],
  };
}

export function getInitialApi() {
  return {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  };
}

export function getSuccess(apiState) {
  apiState.isError = false;
  apiState.errorMessage = "";
  apiState.isSuccess = true;
  apiState.isLoading = false;
  return { ...apiState };
}

export function getError(apiState, errorMessage) {
  apiState.isSuccess = false;
  apiState.isLoading = false;
  apiState.isError = true;
  apiState.errorMessage = errorMessage;
  return { ...apiState };
}

export function getErrorMsg(error) {
  let errMsg = "";
  if (error) {
    errMsg = error.response.data.message;
  } else {
    errMsg = `Something wrong happened! ${error.message}`;
  }
  return errMsg;
}