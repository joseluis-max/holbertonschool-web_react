import React from 'react';
import PropTypes from 'prop-types';

import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(newProp) {
    return (
      newProp.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    const btnStyle = {
      background: 'transparent',
      border: 'none',
      alignSelf: 'self-end'
    };

    return (
      <>
        <div className="menuItem">Your notifications</div>

        <div className="Notifications" style={displayDrawer ? {} : { display: 'none' }}>
          <button style={btnStyle} aria-label="Close"
            onClick={() => { console.log('Close button has been clicked'); }}>
            <img src={closeIcon} alt="close-icon" height="15px" width="15px"></img>
          </button>

          <p>
            Here is the list of notifications
          </p>

          <ul>
            {
              (listNotifications === []) ?
                <li>No new notification for now</li>
                :
                listNotifications.map(notification => {
                  return (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead} />
                  )
                })
            }
          </ul>
        </div>
      </>
    )
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
