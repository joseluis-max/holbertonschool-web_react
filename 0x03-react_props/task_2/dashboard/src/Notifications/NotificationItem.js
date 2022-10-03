import React from 'react';
import Notifications from './Notifications';

function NotificationItem(props) {
  let li = <li data-notification-type={props.type}>{props.value}</li>;

  if (props.html) {
    li = <li dangerouslySetInnerHTML={{__html: props.html}}></li>;
  }

  return li;
}

export default NotificationItem;
