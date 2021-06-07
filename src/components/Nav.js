import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { ChevronLeft } from "react-bootstrap-icons";

const HOME_URL = "/";

class NavbarComponent extends React.Component {
  goBack = () => {
    return this.props.history.goBack();
  };

  isHomeUrl = () => {
    return this.props.location.pathname === HOME_URL;
  };

  render() {
    return (
      <div>
        <div className="ul nav-link-container ">
          <span className="li">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </span>
          <span className="li cursor">
            {!this.isHomeUrl() && (
              <p onClick={() => this.goBack()} className="nav-link">
                <ChevronLeft /> Back
              </p>
            )}
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(NavbarComponent);
