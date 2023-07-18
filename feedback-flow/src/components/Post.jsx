import React from "react";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";
function Post() {
  const status = 200;
  const navigate = useNavigate();
  const click = () => {
    console.log("clicked");
    navigate("/about");
  };
  if (status === 404) {
    return <Navigate to='/noFound' />;
  }

  return (
    <div>
      <h1>Post </h1>
      <button onClick={click}>click me</button>
      <Routes>
        <Route path='/show' element={<h1>This is a Show</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Post;
