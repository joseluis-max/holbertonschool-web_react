import React from "react";
import PropTypes from 'prop-types';

import './App.css';

import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from "../CourseList/CourseList";

function App(props) {
  const { isLoggedIn } = props;

  let element = <Login />;

  if (isLoggedIn) element = <CourseList />;

  return (
    <React.Fragment>
      <Notifications displayDrawer={true}/>

      <div className="App">
        <Header />

        <div className="App-body">
          {element}
        </div>

        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;
