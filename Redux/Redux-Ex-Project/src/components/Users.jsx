import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userdelete } from "../store/reducers/userReducer";

const Users = () => {
  const { users } = useSelector((state) => state.userReducer);
  // console.log(users);
  const dispatch = useDispatch();

  const deleteUser = (index) => {
    dispatch(userdelete(index));
  };
  return (
    <div className=" w-full p-10">
      <div className="m-auto w-full h-full p-20 mt-5 bg-red-300">
        <h1 className="text-2xl font-bold text-red-900 mb-5">User List</h1>
        <ul>
          {users.map((user, index) => {
            return (
              <li className="text-red-900 mb-4" key={user.id}>
                <h1 className="font-semibold">
                  {user.firstname} {user.lastname}{" "}
                  <span
                    onClick={() => {
                      deleteUser();
                    }}
                    className="text-red-700 cursor-pointer border ml-4 font-extrabold border-red-500 px-2 py-1 "
                  >
                    X
                  </span>
                </h1>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Users;
