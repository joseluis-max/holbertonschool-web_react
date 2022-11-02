import * as notificationsData from '../../../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  return notificationsData.filter(
    element => element.author.id === userId
  ).map(element => element.context);
}
