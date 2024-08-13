import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChildOne from "./ChildOne";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Users from "./Pages/Users";
import ReduxUser from "./Pages/ReduxUser";
import ApiCall from "./Pages/ApiCall";
import "./App.css"
import Higher from "./Pages/HOC/Higher";
import Portal from "./Pages/Portal/Portal";
import ErrorComponent from "./Pages/ErrorBoundary/ErrorComponent";
import ToDo from "./Pages/ToDo/ToDo";
export const Context = createContext();

export default function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/contact" element={<Contact />} />
          <Route  path="/reduxUser" element={<ReduxUser />}/>
          <Route  path="/apiCall" element={<ApiCall />}/>
          <Route  path="/higher" element={<Higher />}/>
          <Route  path="/portal" element={<Portal />}/>
          <Route  path="/errorboundaryComponent" element={<ErrorComponent />}/>
          <Route path="/todo" element={<ToDo />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Context.Provider
        value={{
          number,
        }}
      >
        <div className="App">
          <button onClick={() => setNumber(number + 1)}>Click</button>
          <ChildOne />
        </div>
      </Context.Provider>
    </>
  );
}
