import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    //TODO: Pull out into environement var
    fetch("http://localhost:3000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!users) {
    return <p>No profile data</p>;
  } else {
    return (
      <ul key="userList">
        {(users as any).map((user: any) => {
          return (
            <li key={user._id}>
              Name: {user.firstName} {user.lastName}, email: {user.email}
            </li>
          );
        })}
      </ul>
    );
  }
};

export default UsersPage;
