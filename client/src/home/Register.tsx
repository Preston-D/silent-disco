import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <>
      <h1>Register Page</h1>
      <form action="">
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
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" name="username" />
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

export default Register;
