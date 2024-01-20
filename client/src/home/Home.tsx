import * as React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </>
  );
};

export default Home;
