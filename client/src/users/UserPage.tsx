import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UserPage: React.FC = () => {
  interface IUserPacket {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    isCurrentSessionUser: boolean;
  }
  const [user, setUser] = useState<IUserPacket>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    createdAt: new Date(),
    isCurrentSessionUser: false,
  });
  const [isLoading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    //TODO: Pull out into environement var
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (user == null) {
    return <p>No user with id {id}</p>;
  } else {
    console.log(user);
    if (user.isCurrentSessionUser) {
      return (
        <>
          <p>Welcome {user.firstName}! This is your Account!</p>
          <form action="http://localhost:3000/logout" method="POST">
            <input type="submit" value="Logout" />
          </form>
        </>
      );
    } else {
      return <p>This is the page for {user.firstName}'s account.</p>;
    }
  }
};

export default UserPage;
