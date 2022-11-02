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

export const notificationsDataNormalized = normalize(notificationsData, [notification]);

export function getAllNotificationsByUser(userId) {
  return notificationsData.filter(
    element => element.author.id === userId
  ).map(element => element.context);
}
