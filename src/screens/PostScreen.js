import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PostScreen = ({navigation}) => {
    return <View style = {styles.container}>
        <Text>Comming Soon!</Text>
        <Button
          title = "Click Here"
          onPress = {() => alert('Coming soon!')}
      />
    </View>
}

const styles =  StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default PostScreen