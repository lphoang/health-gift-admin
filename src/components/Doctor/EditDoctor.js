import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDoctor,
  updateDoctor,
  updateUserInfo,
} from "../../features/slices/doctorSlice";
import { uploadFile, setEmptyBucket } from "../../features/slices/bucketSlice";
import { Loading } from "../Loading";
import { useNavigate, useParams } from "react-router-dom";
import { getAllSpecialists } from "../../features/slices/specialistSlice";
import { getAllHospitals } from "../../features/slices/hospitalSlice";
import { formatDay } from "../../utils/common";

function EditDoctor() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const calledDoctor = useSelector((state) => state.doctors?.doctor);
  const [doctor, setDoctor] = useState({
    hospitalName: calledDoctor?.hospital?.hospitalName,
    specialistId: "",
    workFrom: calledDoctor.workFrom,
    workTo: calledDoctor.workTo,
  });
  const [user, setUser] = useState({
    firstName: calledDoctor?.appUser?.firstName,
    lastName: calledDoctor?.appUser?.lastName,
    avatar: calledDoctor?.appUser?.avatar,
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const token = state.auth?.accessToken;

  const [file, setFile] = useState(null);
  let formData = new FormData();

  const onUploadHandler = (e) => {
    e.preventDefault();
    formData.append("file", file);
    dispatch(uploadFile(formData));
  };

  const onChangeImage = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateDoctor(doctor, token, id));
    dispatch(updateUserInfo(user, token, id));
    alert("Updated successfully");
    navigate("/doctors");
  };

  useEffect(() => {
    dispatch(getDoctor(id));
    dispatch(getAllSpecialists());
    dispatch(getAllHospitals());
  }, [id]);

  useEffect(() => {
    if (state.buckets.uploadFileUrl !== "") {
      setUser({
        ...user,
        avatar: state.buckets.uploadFileUrl,
      });
    }
    dispatch(setEmptyBucket());
  }, [state.buckets.uploadFileUrl]);

  return (
    <div>
      {state.doctors?.apiState.isLoading && <Loading />}
      <div>
        <h3 className="text-center text-lg leading-6 font-medium text-gray-900">
          Update doctor information
        </h3>
      </div>
      <form
        className="mt-8 space-y-12 w-2/3 mx-auto"
        onSubmit={onSubmitHandler}
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="firstName"
              >
                First name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="First name"
                name="firstName"
                value={user.firstName}
                onChange={(e) =>
                  setUser({
                    ...user,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="lastName"
              >
                Last name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Last name"
                name="lastName"
                type="text"
                onChange={(e) =>
                  setUser({
                    ...user,
                    lastName: e.target.value,
                  })
                }
                value={user.lastName}
                required
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center mb-5">
            <img
              src={user?.avatar ? user.avatar : "https://loremflickr.com/g/320/240/paris"}
              alt="images"
              className="w-64 h-64 rounded-md border-gray-700 object-cover mr-4"
            />
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="avatar"
              >
                Avatar
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="file"
                placeholder="Avatar"
                name="avatar"
                onChange={onChangeImage}
              />
              <button
                className="mt-4 relative w-24 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onUploadHandler}
              >
                Upload
              </button>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Email"
                type="email"
                value={calledDoctor?.appUser?.email}
                name="email"
                disabled
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="hospitalName"
              >
                Hospital name
              </label>
            </div>
            <div className="md:w-2/3">
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Hospital name"
                defaultValue={doctor?.hospitalName}
                value={doctor?.hospitalName}
                name="hospitalName"
                onChange={(e) =>
                  setDoctor({
                    ...doctor,
                    hospitalName: e.target.value,
                  })
                }
                required
              >
                {state.hospitals?.hospitals.map((hospital, index) => {
                  return (
                    <option value={hospital.hospitalName} key={index}>
                      {hospital.hospitalName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="specialistId"
              >
                Specialist
              </label>
            </div>
            <div className="md:w-2/3">
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Specialist"
                value={doctor?.specialistId}
                defaultValue={doctor?.specialistId}
                name="specialistId"
                onChange={(e) =>
                  setDoctor({
                    ...doctor,
                    specialistId: e.target.value,
                  })
                }
                required
              >
                {state.specialists?.specialists.map((specialist, index) => {
                  return (
                    <option value={specialist.specialistId} key={index}>
                      {specialist.specialistName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="workFrom"
              >
                Work from
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Work from"
                type="date"
                value={formatDay(doctor?.workFrom)}
                name="workFrom"
                onChange={(e) =>
                  setDoctor({
                    ...doctor,
                    workFrom: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="workTo"
              >
                Work to
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Work to"
                type="date"
                value={formatDay(doctor?.workTo)}
                name="workTo"
                onChange={(e) =>
                  setDoctor({
                    ...doctor,
                    workTo: e.target.value,
                  })
                }
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mx-auto relative w-48 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditDoctor;
