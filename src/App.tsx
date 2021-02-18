import React from "react";
import "./App.css";
import { UserDetails } from "./UserDetails";
import { UserList } from "./UserList";

const App = () => (
  <div className="App">
    <UserList />
    <UserDetails />
  </div>
);

export default App;
