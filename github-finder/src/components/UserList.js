import React, { useContext } from "react";
import User from "./User";
import Loading from "./Loading";
import { UserContext } from "../contexts/usersContexts";

const UserList = () => {

  const {loading,users} = useContext(UserContext)

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mt-3">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
