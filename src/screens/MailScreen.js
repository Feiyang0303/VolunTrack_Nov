import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // Import FlatList
import colors from '../../assets/colors/colors';
import MailSearchBar from '../components/MailSearchBar';
import { usePushNotification } from '../services/pushnotifications';

import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';


    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    
          // Handle the incoming message, e.g., display a notification or update state
        });
    
        return unsubscribe;
    }, []);

const MailScreen = ({ navigation }) => {
    usePushNotification();

  // Sample messages data
const messages = [
    { id: 1, text: 'Message 1' },
    { id: 2, text: 'Message 2' },
    { id: 3, text: 'Message 3' },
];

  // Function to navigate to IndividualMailScreen with message data
const navigateToIndividualMail = (message) => {
    navigation.navigate('IndividualMail', { message });
};
return (
    <View>
    <Text style={styles.header}>Mail</Text>
    <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigateToIndividualMail(item)}>
            <View style={styles.messageItem}>
            <Text>{item.text}</Text>
            </View>
        </TouchableOpacity>
        )}
    />
    <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
        <Image
        source={require('../../assets/adaptive-icon-cropped.png')}
        style={{
            width: 60,
            height: 60,
            marginTop: 60,
            marginLeft: 15,
        }}
        />
    </TouchableOpacity>
    <Text style={styles.header}>Mail</Text>
    <MailSearchBar />
    <StatusBar style="auto" />
    </View>
);
};

const styles = StyleSheet.create({
header: {
    color: colors.primary,
    fontFamily: 'PingFangSC-Semibold',
    fontSize: 36,
    marginVertical: 15,
    marginLeft: 35,
    textAlign: 'left',
},
messageItem: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
},
});

export default MailScreen;
