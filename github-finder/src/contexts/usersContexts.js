import React, { useReducer } from "react";
import UserReducer from "../reducer/usersReducer";

export const UserContext = React.createContext();

const UsersContextProvider = (props) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const searchUsers = (keyword) => {
    setLoading();
    setTimeout(() => {
      fetch("http://api.github.com/search/users?q=" + keyword)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "SEARCH_USERS", users: data.items });
        });
    }, 1000);
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const clearResults = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <UserContext.Provider
      value={{ users: state.users, loading: state.loading,searchUsers,clearResults }}
    >
        {props.children}
    </UserContext.Provider>
  );
};

export default UsersContextProvider;
