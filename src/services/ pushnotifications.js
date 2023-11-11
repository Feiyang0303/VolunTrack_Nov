// src/services/PushNotification.js

import messaging from '@react-native-firebase/messaging';
import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';

// Initialize Firebase
const firebaseConfig = {
  // ... your config
};

const app = initializeApp(firebaseConfig);

const usePushNotification = () => {
useEffect(() => {
    const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);

        // Get the FCM token
        const fcmToken = await messaging().getToken();
        console.log('FCM Token:', fcmToken);

        // Send a test notification
        PushNotification.localNotification({
        title: 'Test Notification',
        message: 'This is a test notification.',
        });
    }
    };

    requestUserPermission();
}, []);
};

export { app, usePushNotification };
