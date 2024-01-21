import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <>
      <h1>Login Page</h1>
      <form action="http://localhost:3000/login" method="POST">
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
      <p>
        Or <Link to="/register">Register</Link> a new account
      </p>
      <Link to="/">Home</Link>
    </>
  );
};

export default LoginPage;
