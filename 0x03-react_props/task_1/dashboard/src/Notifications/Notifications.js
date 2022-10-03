import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

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
        <li className="priority-default" data-priority="default">New course available</li>
        <li className="priority-urgent" data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  )
}

export default Notifications;
