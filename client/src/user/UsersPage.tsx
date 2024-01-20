import * as React from "react";
import { Link } from "react-router-dom";

const UsersPage: React.FC = () => {
  return (
    <>
      <h1>Page for all Users</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default UsersPage;
