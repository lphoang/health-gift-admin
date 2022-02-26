import React, { useEffect } from "react";
import { getAllDoctors } from "../../features/slices/doctorSlice";
import { useDispatch, useSelector } from "react-redux";
import { getInitialDoctorInfo } from "../../api/initialInformation";

function Doctors() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  useEffect(() => {
    document.title = "Health Gift || Doctors";
  });

  const doctorProps = Object.keys(getInitialDoctorInfo());

  return (
    <div>
    </div>
  );
}

export default Doctors;
