import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

function auth() {
  return {
    register: (request) => instance.post("/admin/register", request),
    login: (request) => instance.post("/admin/login", request),
    getUserInfo: (token, id) =>
      instance.get(`/auth/${id}/info`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
  };
}

function certificates() {
  return {
    getAll: (token) =>
      instance.get(`/admin/certificates`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    get: (token, id) =>
      instance.get(`/admin/certificates/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    verifyCertificate: (token, id) =>
      instance.put(`/admin/verify-certificate?cer_id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
  };
}

function diseases() {
  return {
    getAllDiseases: () => instance.get(`/diseases`),
    getDisease: (id) => instance.get(`/diseases/${id}`),
    create: (request, token) =>
      instance.post(
        `/admin/diseases/create`,
        {
          name: request.name,
          imageUrl: request.imageUrl,
          overview: request.overview,
          cause: request.cause,
          objects: request.objects,
          diagnosis: request.diagnosis,
          precautions: request.precautions,
          routesOfTransmission: request.routesOfTransmission,
          symptom: request.symptom,
          treatmentMeasures: request.treatmentMeasures,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    update: (request, token, id) =>
      instance.patch(
        `/admin/diseases/${id}/update`,
        {
          name: request.name,
          imageUrl: request.imageUrl,
          overview: request.overview,
          cause: request.cause,
          objects: request.objects,
          diagnosis: request.diagnosis,
          precautions: request.precautions,
          routesOfTransmission: request.routesOfTransmission,
          symptom: request.symptom,
          treatmentMeasures: request.treatmentMeasures,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    delete: (token, id) =>
      instance.delete(`/admin/diseases/${id}/delete`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
  };
}

function blogs() {
  return {
    getAllBlogs: () => instance.get(`/blogs`),
    getBlog: (id) => instance.get(`/blogs/${id}`),
    create: (request, token) =>
      instance.post(
        `/admin/blogs/create`,
        {
          body: request.body,
          imageUrl: request.imageUrl,
          title: request.title,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    update: (request, token, id) =>
      instance.patch(
        `/admin/blogs/${id}/update`,
        {
          body: request.body,
          imageUrl: request.imageUrl,
          title: request.title,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    delete: (token, id) =>
      instance.delete(`/admin/blogs/${id}/delete`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
  };
}

function specialists() {
  return {
    getAll: () => instance.get(`/specialists`),
    get: (id) => instance.get(`/specialists/${id}`),
    create: (specialistName, token) =>
      instance.post(`/admin/specialists/create`, specialistName, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    update: (specialistName, token, id) =>
      instance.patch(`/admin/specialists/${id}/update`, specialistName, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    delete: (token, id) =>
      instance.delete(`/admin/specialists/${id}/delete`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
  };
}

function doctors() {
  return {
    getDoctor: (id) => instance.get(`/doctor/${id}`),
    getAllDoctors: () => instance.get(`/doctor`),
    createDoctor: (request) =>
      instance.post("/auth/register", {
        email: request.email,
        password: request.password,
        firstName: request.firstName,
        lastName: request.lastName,
        appRole: "DOCTOR",
      }),
    updateDoctor: (request, token, id) =>
      instance.put(
        `/doctor/${id}/update`,
        {
          hospitalName: request.hospitalName,
          specialistId: request.specialistId,
          workFrom: request.workFrom,
          workTo: request.workTo,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    updateUserInfo: (request, token, id) =>
      instance.put(
        `/auth/${id}/update`,
        {
          avatar: request.avatar,
          firstName: request.firstName,
          lastName: request.lastName,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
  };
}

function bucket() {
  return {
    uploadFile: (formData) =>
      instance.post(`/api/storage/uploadFile`, formData, {
        headers: {
          "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
        },
      }),
  };
}

function hospitals() {
  return {
    create: (request, token) =>
      instance.post(
        "/hospitals/create",
        {
          hospitalName: request.hospitalName,
          address: request.address,
          imageUrl: request.imageUrl,
          since: request.since,
          description: request.description,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    get: (id) => instance.get(`/hospitals/${id}`),
    getAll: () => instance.get(`/hospitals`),
    update: (request, token, id) =>
      instance.put(
        `/hospitals/${id}/update`,
        {
          hospitalName: request.hospitalName,
          address: request.address,
          imageUrl: request.imageUrl,
          since: request.since,
          description: request.description,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
  };
}

export default function api() {
  return {
    auth,
    diseases,
    blogs,
    specialists,
    certificates,
    doctors,
    bucket,
    hospitals,
  };
}
