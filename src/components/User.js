import React, { Fragment } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import { getUserInformation } from "./Users";

class Users extends React.Component {
  state = {
    userInformation: {},
  };

  componentDidMount() {
    this.loadUserInformation();
  }

  loadUserInformation = async () => {
    const username = this.props.match.params.userName;
    const userInformation = await getUserInformation(username);
    this.setState({ userInformation });
  };

  render() {
    const { userInformation } = this.state;
    return (
      <Fragment>
        <Row>
          <Col xs={4} md={1}>
            <Image
              src={userInformation.avatar_url}
              roundedCircle
              height={100}
              width={100}
            />
          </Col>
          <Col xs={6} md={3}>
            <h3 className="text-align-left font-weight">
              {userInformation.name}
            </h3>
            <p className="text-align-left description-text">
              {userInformation.location}
            </p>
          </Col>
        </Row>
        <hr />
      </Fragment>
    );
  }
}

export default withRouter(Users);
