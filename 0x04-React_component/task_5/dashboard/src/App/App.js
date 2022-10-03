import React from "react";
import PropTypes from 'prop-types';

import './App.css';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

import { getLatestNotification } from '../utils/utils';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.eventLogOut = this.eventLogOut.bind(this);
  }

  eventLogOut(e) {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.eventLogOut);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.eventLogOut);
  }

  render() {
    const { isLoggedIn } = this.props;

    let element = <BodySectionWithMarginBottom title="Log in to continue">
      <Login />
    </BodySectionWithMarginBottom>;

    if (isLoggedIn) element = <CourseList listCourses={listCourses} />;

    return (
      <React.Fragment>
        <Notifications
          displayDrawer={true}
          listNotifications={listNotifications} />

        <div className="App">
          <Header />

          <div className="App-body">
            <BodySectionWithMarginBottom title="Course list">
              {element}
            </BodySectionWithMarginBottom>

            <BodySection title="News from the School"><p>Random text</p></BodySection>
          </div>

          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;
