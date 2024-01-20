import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <>
      <h1>An unexpected error has occured.</h1>
      <p>
        <h2>{error.status + " " + error.statusText}</h2>
        <br />
        <i>{error.data}</i>
      </p>
      <Link to="/">Home</Link>
    </>
  );
};

export default ErrorPage;
