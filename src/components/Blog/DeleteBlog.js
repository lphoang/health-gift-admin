import React from "react";
import { Loading } from "../Loading";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../../features/slices/blogSlice";

function DeleteBlog({ blog: { id, title } }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const token = state.auth.accessToken;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(deleteBlog(token, id));
    if (state.auth.apiState.errorMessage) {
      alert(state.auth.apiState.errorMessage);
    } else {
      alert(`Delete ${title} successfully`);
    }
  };

  const onDeleteHandler = (e) => {
    if (window.confirm("Are you sure to delete this blog?")) {
      onSubmitHandler(e);
    }
  };

  return (
    <div>
      {state.auth.apiState.isLoading && <Loading />}
      <button
        onClick={onDeleteHandler}
        className="w-full flex items-center justify-center p-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteBlog;
