import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  const { type, value, html } = props;
  let list = <li data-notification-type={type}>{value}</li>;

  if (html['__html'] && !value) {
    list = (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}>
      </li>
    );
  }

  return list;
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {}
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  })
};

export default NotificationItem;
