import R from 'ramda';
const images = R.range(1, 11).map(i => i);
const data = [{
  "id": 1,
  "first_name": "Amanda",
  "last_name": "Grant",
  "time": "8:54 AM",
  "message": "rutrum",
  "isRead": false,
  "isViewed": false,
  "image": images[0]
}, {
  "id": 2,
  "first_name": "Gloria",
  "last_name": "Hicks",
  "time": "11:56 AM",
  "message": "viverra pede",
  "isRead": false,
  "isViewed": true,
  "image": images[1]
}, {
  "id": 3,
  "first_name": "Gloria",
  "last_name": "Lane",
  "time": "1:34 AM",
  "message": "vehicula consequat",
  "isRead": true,
  "isViewed": false,
  "image": images[2]
}, {
  "id": 4,
  "first_name": "Linda",
  "last_name": "Wells",
  "time": "2:12 AM",
  "message": "vehicula",
  "isRead": true,
  "isViewed": true,
  "image": images[3]
}, {
  "id": 5,
  "first_name": "Samantha",
  "last_name": "Lee",
  "time": "11:23 AM",
  "message": "amet",
  "isRead": false,
  "isViewed": false,
  "image": images[4]
}, {
  "id": 6,
  "first_name": "Irene",
  "last_name": "Garcia",
  "time": "3:15 PM",
  "message": "quis orci nullam",
  "isRead": false,
  "isViewed": false,
  "image": images[5]
}, {
  "id": 7,
  "first_name": "Marilyn",
  "last_name": "Grant",
  "time": "5:06 AM",
  "message": "felis sed lacus",
  "isRead": true,
  "isViewed": true,
  "image": images[6]
}, {
  "id": 8,
  "first_name": "Maya",
  "last_name": "Carr",
  "time": "11:28 PM",
  "message": "purus aliquet at",
  "isRead": true,
  "isViewed": false,
  "image": images[7]
}, {
  "id": 9,
  "first_name": "Paula",
  "last_name": "Kelly",
  "time": "12:36 PM",
  "message": "aliquam lacus morbi",
  "isRead": true,
  "isViewed": true,
  "image": images[8]
}, {
  "id": 10,
  "first_name": "Ruth",
  "last_name": "Carr",
  "time": "3:05 PM",
  "message": "integer tincidunt",
  "isRead": true,
  "isViewed": true,
  "image": images[9]
}, {
  "id": 11,
  "first_name": "Christy",
  "last_name": "Cook",
  "time": "10:02 PM",
  "message": "parturient montes nascetur",
  "isRead": true,
  "isViewed": true,
  "image": images[10]
}, {
  "id": 12,
  "first_name": "Karen",
  "last_name": "Burke",
  "time": "1:19 AM",
  "message": "pede libero",
  "isRead": false,
  "isViewed": false,
  "image": images[0]
}, {
  "id": 13,
  "first_name": "Annie",
  "last_name": "Garrett",
  "time": "11:28 PM",
  "message": "lacinia sapien quis",
  "isRead": false,
  "isViewed": false,
  "image": images[1]
}, {
  "id": 14,
  "first_name": "Ally",
  "last_name": "Little",
  "time": "12:45 AM",
  "message": "mauris morbi non",
  "isRead": false,
  "isViewed": true,
  "image": images[2]
}, {
  "id": 15,
  "first_name": "Georgie",
  "last_name": "Little",
  "time": "10:24 AM",
  "message": "rhoncus aliquam lacus",
  "isRead": false,
  "isViewed": true,
  "image": images[3]
}];

module.exports = {
  images,
  data
};
