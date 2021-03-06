import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    firstView
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const firstView = (
  <View style={styles.container}>
    <Image source = {{uri:'https://seeklogo.com/images/M/msi-logo-47BD237377-seeklogo.com.png'}}
      style = {{ width: 243, height: 300 }}
    />
    <Text></Text>
    <Text style={{color: '#fafafa', fontSize: 25, fontWeight:'bold'}} >Welcome to the MSI Team</Text>
    <Text></Text>
    <Button
          title="Activate Cooler Boost"
          color="#d00000"
          onPress={() => Alert.alert('Cooler Boost Activated',
          'This will make your computer cooler while you game. It will also make your computer take off.')}
    />
  </View>
)

const secondView = (
  <View style={styles.container}>
    <Text style={{fontWeight:'bold', color:'white'}}>
      Text Bold
        <Text style={{color:'red'}}>
          Nested Text in red
        </Text>
    </Text>
  </View>
)
