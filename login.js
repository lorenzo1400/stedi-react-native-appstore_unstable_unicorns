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
              <Text style={{color:'purple', fontSize: 25}}>Andra's button</Text>      
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.sendButton}
              onPress={async ()=>{
                  await Alert.alert("Hello Levi");
              }}
            >
              <Text style={{color:'red', fontSize: 25}}>Levi's button</Text>      
            </TouchableOpacity>
            
            <TouchableOpacity
               style={styles.sendButton}
              onPress={async ()=>{
                  await Alert.alert("Hello Micah");
              }}
            >
              <Text style={{color:'yellow', fontSize: 25}}>Micah's Button</Text>      
            </TouchableOpacity>
<<<<<<< HEAD
            
            <TouchableOpacity
=======
>>>>>>> 6a54371dc840dc75cdfdd685dfe4fd7ca2f09f8b

            <TouchableOpacity
               style={styles.sendButton}
              onPress={async ()=>{
                  await Alert.alert("Hello Enzo");
              }}
            >
              <Text style={{color:'blue', fontSize: 25}}>Enzo button</Text>      
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.sendButton}
              onPress={async ()=>{
                  await Alert.alert("Hello Moses");
              }}
            >
              <Text style={{color:'blue', fontSize: 25}}>Moses's Button</Text>      
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '60%',
        alignItems: 'center',
        paddingTop:30,
        paddingBottom: 30,
        paddingLeft: 10,
        paddingRight: 10
        
      },
})