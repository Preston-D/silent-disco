import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  return (
    <>
      <h1>Register Page</h1>
      <form action="http://localhost:3000/register" method="POST">
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input type="text" id="firstName" name="firstName" />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input type="text" id="lastName" name="lastName" />
        <br />
        <label htmlFor="lastName">Email:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p>
        Or <Link to="/login">Login</Link> to an existing account.
      </p>
      <Link to="/">Home</Link>
    </>
  );
};

export default RegisterPage;
