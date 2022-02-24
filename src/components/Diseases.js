import React, { useEffect } from "react";
import Table from "./Table";
import {
  getAllDiseases
} from "../features/slices/diseaseSlice"
import { useDispatch, useSelector } from "react-redux";
import { getInitialDiseaseInfo } from "../api/initialInformation";

function Diseases() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllDiseases())
  },[])

  useEffect(() => {
   document.title = "Health Gift || Diseases" 
  })

  const diseasesProps = Object.keys(getInitialDiseaseInfo());

  return (
    <div>
      <Table properties={diseasesProps} data={state.diseases.diseases}/>
    </div>
  );
}

export default Diseases;
