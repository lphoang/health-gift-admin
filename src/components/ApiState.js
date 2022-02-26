import React from "react";
import { Loading } from "./Loading";

export default function ApiState({
  isLoading,
  isSuccess,
  isError,
  errorMessage,
}) {
  return (
    <>
      {isLoading && (
        <div style={{ color: "white", textAlign: "center", margin: "1rem" }}>
          <Loading />
        </div>
      )}
      {isSuccess && (
        <div style={{ color: "white", textAlign: "center", margin: "1rem" }}>
          Done!
        </div>
      )}
      {isError && (
        <div style={{ color: "red", textAlign: "center", margin: "1rem" }}>
          {errorMessage}
        </div>
      )}
    </>
  );
}
