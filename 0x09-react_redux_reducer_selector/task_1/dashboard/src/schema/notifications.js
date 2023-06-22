import * as notificationsData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid'
});

const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

export const notificationsDataNormalized = normalize(
  notificationsData, [notification]
);

export function getAllNotificationsByUser(userId) {
  const allUserNotification = []
  const allNotifications = notificationsDataNormalized.entities.notifications
  const allMessages = notificationsDataNormalized.entities.messages

  for (notificationElement in allNotifications) {
    notificationElement = allNotifications[notificationElement];

    if (notificationElement.author === userId) {
      allUserNotification.push(allMessages[notificationElement.context])
    }
  }

  return allUserNotification;
}
