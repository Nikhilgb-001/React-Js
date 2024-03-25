import React, { useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

const Context = (props) => {
  const [users, setUsers] = useState([
    { id: 0, name: "John", city: "New York" },
    { id: 1, name: "Jane", city: "Paris" },
    { id: 2, name: "Bob", city: "London" },
    { id: 3, name: "Alice", city: "Berlin" },
    { id: 4, name: "Mike", city: "Tokyo" },
    { id: 5, name: "Kate", city: "Moscow" }
  ]);
  return (
    <div>
      <UserContext.Provider value={{ users, setUsers }}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
};

export default Context;
