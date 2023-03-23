import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import Search from "./components/Search";
import Alert from "./components/Alert";
import React from "react";
import UsersContextProvider from "./contexts/usersContexts";
import AlertContextProvider from "./contexts/alertContext";
// http request -- xmlhttprequest -- axios -- fetch

const App = () => {
  return (
    <UsersContextProvider>
      <AlertContextProvider>
        <Navbar />
        <Alert />
        <Search />
        <UserList />
      </AlertContextProvider>
    </UsersContextProvider>
  );
};

export default App;
