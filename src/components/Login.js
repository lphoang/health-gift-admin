import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ApiState from "./ApiState";
import {
  authLogin,
  selectApiState,
  selectIsLogged,
} from "../features/slices/authSlice";

function Login(props) {
  const apiState = useSelector(selectApiState);
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Health Gift Admin | Đăng nhập`;
  });

  useEffect(() => {
    isLogged && navigate("/");
  }, [navigate, isLogged]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Trying to login", { email, password });
    dispatch(authLogin({ email, password }));
  }
  return (
    <div>
      <div className="bg-white px-3 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start w-full">
          <div className="mt-3 text-center sm:mt-0 sm:text-left w-full mx-5">
            <h1 className="text-center text-lg leading-6 font-medium text-gray-900">
              Login
            </h1>
            <form className="mt-8 space-y-6 w-1/2 mx-auto" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-left md:mb-0 pr-4"
                      htmlFor="email"
                    >
                      Email
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="email"
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-left md:mb-0 pr-4"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="password"
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <ApiState {...apiState} />
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
