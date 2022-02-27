import { Loading } from "../components/Loading";
import { authLogout } from "../features/slices/authSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(authLogout());
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
}

export default Logout;
