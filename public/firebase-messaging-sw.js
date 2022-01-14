importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyBQUhkVpCm_gNWN3sZJTRS17wIanzUaF5M",
    authDomain: "lug-captone.firebaseapp.com",
    projectId: "lug-captone",
    storageBucket: "lug-captone.appspot.com",
    messagingSenderId: "639566774506",
    appId: "1:639566774506:web:7c7b29eaa6391401e39793",
    measurementId: "G-HNSP0TR0MR"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body."
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});