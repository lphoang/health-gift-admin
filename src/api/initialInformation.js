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
    id: "",
    name: "",
    imageUrl: [],
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
    id: "",
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

export function getInitialHospitalInfo(){
  return {
    id: "",
    hospitalName: "",
    doctors: [],
    since: new Date(),
    imageUrl: [],
    address: "",
    description: "",
    specialists: []
  }
}

export function getInitialDoctorInfo() {
  return {
    id: "",
    doctorId: "",
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
    reviewRating: 0,
    appointments: [],
    certificates: [],
    specialist: null,
    reviews: [],
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
    errMsg = error.response?.data.message;
  } else {
    errMsg = `Something wrong happened! ${error.message}`;
  }
  return errMsg;
}
