import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const getUserInformation = async (username) => {
  return await fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((user) => {
      return user;
    });
};

class Users extends React.Component {
  state = {
    usersInformation: [],
  };

  componentDidMount() {
    this.loadUsersInformation();
  }

  loadUsersInformation = async () => {
    const users = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];
    const usersInformation = await Promise.all(
      users.map((user) => getUserInformation(user))
    );
    this.setState({
      usersInformation,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="text-align-left">
          <h3 className="font-weight">Top 5 GitHub Users</h3>
          <p>Tap the username to see more information</p>
        </div>
        <div className="text-align-left">
          {this.state.usersInformation.map((user, index) => (
            <Link key={index} to={`/user/${user.login}`}>
              <Button
                variant="primary"
                style={{ marginRight: 10, marginTop: 10 }}
              >
                {user.name}
              </Button>
            </Link>
          ))}
        </div>
      </Fragment>
    );
  }
}

export { getUserInformation };

export default Users;
