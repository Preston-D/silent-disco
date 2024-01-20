import * as React from "react";
import { Link } from "react-router-dom";

const UserPage: React.FC = () => {
  return (
    <>
      <h1>Page for a User</h1>
      <Link to="/home">Home</Link>
    </>
  );
};

export default UserPage;
