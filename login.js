import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>Andra's button</Text>
            <TouchableOpacity
               style={styles.sendButton}
              onPress={async ()=>{
                  await Alert.alert("Hello Andra");
              }}
            >
              <Text style={{color:'blue'}}>Send</Text>      
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})