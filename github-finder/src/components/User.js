import React from "react";

const User = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            className="img-fluid rounded-start avatar "
            src={avatar_url}
            alt={login}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{login}</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href={html_url}
              className="btn btn-primary"
            >
              Github Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
