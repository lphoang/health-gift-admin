import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpecialist,
  updateSpecialist,
} from "../../features/slices/specialistSlice";
import { Loading } from "../Loading";
import { useNavigate, useParams } from "react-router-dom";

function EditSpecialist() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [specialist, setSpecialist] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const token = state.auth?.accessToken;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateSpecialist(specialist, token, id));
    alert("Updated successfully");
    navigate("/specialists");
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setSpecialist(e.target.value);
  };

  useEffect(() => {
    document.title = "Update specialist";
    dispatch(getSpecialist(id));
  }, [id]);

  return (
    <div>
      {state.bucket?.apiState.isLoading && <Loading />}
      <div>
        <h3 className="text-center text-lg leading-6 font-medium text-gray-900">
          Update specialist
        </h3>
      </div>
      <form
        className="mt-8 space-y-12 w-1/2 mx-auto"
        onSubmit={onSubmitHandler}
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="Name"
              >
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Name of specialist"
                name="name"
                value={state.specialists.specialist.specialistName}
                onChange={onChangeHandler}
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

export default EditSpecialist;
