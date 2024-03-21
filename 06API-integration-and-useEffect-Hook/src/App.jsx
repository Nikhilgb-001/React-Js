import { Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Show from "./components/Show";
import Service from "./components/Service";
const App = () => {
  return (
    <>
      <nav className="flex justify-center gap-10">
        <Link className="p-4 text-xl" to="/">
          Home
        </Link>
        <Link className="p-4 text-xl" to="/show">
          Show
        </Link>

        <Link className="p-4 text-xl" to="/service">
          Service
        </Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/show" element={<Show />}></Route>
        <Route path="/service" element={<Service />}></Route>
      </Routes>
    </>
  );
};

export default App;
