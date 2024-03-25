import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";

const User = () => {
  const { users, setUsers } = useContext(UserContext);
  return (
    <>
      <div>
        <h1 className="text-4xl">User List</h1>
        <div className="w-1/2 mt-10 flex flex-col ">
          {users.map((u) => (
            <Link
              key={u.id}
              to={`/user/${u.id}`}
              className="bg-red-100 p-3 mb-3"
            >
              {u.name}
            </Link>
          ))}
        </div>
        <ul></ul>
      </div>
    </>
  );
};

export default User;
