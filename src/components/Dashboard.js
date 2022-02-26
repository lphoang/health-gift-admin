import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../features/slices/authSlice";

function Dashboard(props) {
  const isLogged = useSelector(selectIsLogged);
  const navigate = useNavigate();

  useEffect(() => {
    !isLogged && navigate("/login");
  }, [isLogged]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
