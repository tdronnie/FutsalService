import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBsC1isB9lqMknXRIaw4A7C31l2M5SjGDQ",
  authDomain: "mancity-app-127e1.firebaseapp.com",
  projectId: "mancity-app-127e1",
  storageBucket: "mancity-app-127e1.appspot.com",
  messagingSenderId: "282522754528",
  appId: "1:282522754528:web:2a51c272ce8f97372c9f85",
  measurementId: "G-L6WWDH5746"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

self.addEventListener("install", function (e) {
  console.log("fcm sw install..");
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("fcm sw activate..");
});

self.addEventListener("push", function (e) {
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image, // 웹 푸시 이미지는 icon
    tag: resultData.tag,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  console.log("notification click");
  const url = "/alert";
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});