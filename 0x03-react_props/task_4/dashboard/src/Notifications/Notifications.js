import React from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications(props) {
  const { displayDrawer } = props;

  const btnStyle = {
    background: 'transparent',
    border: 'none',
    alignSelf: 'self-end'
  };

  return (
    <>
      <div className="menuItem">Your notifications</div>

      <div className="Notifications" style={displayDrawer? {}: {display: 'none'}}>
        <button style={btnStyle} aria-label="Close"
          onClick={() => { console.log('Close button has been clicked'); }}>
          <img src={closeIcon} alt="close-icon" height="15px" width="15px"></img>
        </button>

        <p>
          Here is the list of notifications
        </p>

        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem
            type="urgent"
            html={{ __html: getLatestNotification() }} />
        </ul>
      </div>
    </>
  )
}

Notifications.defaultProps = {
  displayDrawer: false
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

export default Notifications;
