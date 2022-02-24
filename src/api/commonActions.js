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
      instance.get(`/auth/info/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
  };
}

function certificate() {
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
      instance.post(
        `/admin/specialists/create`,
        {
          specialistName: specialistName,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    update: (specialistName, token, id) =>
      instance.patch(
        `/admin/specialists/${id}/update`,
        {
          specialistName: specialistName,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      ),
    delete: (token, id) =>
      instance.delete(`/admin/specialists/${id}/delete`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
  };
}

export default function api() {
  return {
    auth,
    diseases,
    blogs,
    specialists,
    certificate,
  };
}
