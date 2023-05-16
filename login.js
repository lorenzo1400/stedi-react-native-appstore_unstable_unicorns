import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from "react-native";

export default function Login(props){
    return(
        <View style={styles.login}>
            <TouchableOpacity
               style={styles.sendButton}
              onPress={async ()=>{
                  await Alert.alert("Hello Andra");
              }}
            >
              <Text style={{color:'blue'}}>Andra's button</Text>      
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.sendButton}
              onPress={async ()=>{
                  await Alert.alert("Hello Levi");
              }}
            >
              <Text style={{color:'red'}}>Levi's button</Text>      
            </TouchableOpacity>
            
            <TouchableOpacity
               style={styles.sendButton}
              onPress={async ()=>{
                  await Alert.alert("Hello Micah");
              }}
            >
              <Text style={{color:'blue'}}>Micah's Button</Text>      
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