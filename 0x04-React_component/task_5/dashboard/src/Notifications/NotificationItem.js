import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    let list = <li
      data-notification-type={type}
      onClick={() => { markAsRead(id) }} >
      {value}
    </li>;

    if (html['__html'] && !value) {
      list = (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => { markAsRead(id) }} >
        </li>
      );
    }

    return list;
  }
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {}
};

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

export default NotificationItem;
