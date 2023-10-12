import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>{error.status}</h1>
      <p>Not found</p>
      <br />
      <Link to="/">Back home</Link>
    </div>
  );
};

export default Error;
