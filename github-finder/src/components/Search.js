import React, { useContext, useState } from "react";
import { AlertContext } from "../contexts/alertContext";
import { UserContext } from "../contexts/usersContexts";

const Search = () => {
  const { displayAlert}= useContext(AlertContext)
  const {searchUsers,users, clearResults} = useContext(UserContext)
  const [keyword, setKeyword] = useState();

  const onChange = (e) => {
    setKeyword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      searchUsers(keyword);
    } else {
      displayAlert("Write Something", "danger");
    }
    setKeyword("");
  };

  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="text"
            onChange={onChange}
            className="form-control"
            placeholder="Key Word"
            value={keyword}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>

      {users.lenght > 0 && (
        <button
          onClick={clearResults}
          className="btn btn-outline-danger mt-2 w-100"
        >
          Clear Results
        </button>
      )}
    </div>
  );
};

export default Search;
