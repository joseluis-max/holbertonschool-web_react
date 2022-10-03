import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications() {
  const btnStyle = {
    background: 'transparent',
    border: 'none',
    alignSelf: 'self-end'
  };

  return (
    <div className="Notifications">
      <button style={btnStyle} aria-label="Close"
        onClick={() => {console.log('Close button has been clicked');}}>
        <img src={closeIcon} alt="close-icon" height="15px" width="15px"></img>
      </button>

      <p>
        Here is the list of notifications
      </p>

      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
    </div>
  )
}

export default Notifications;
