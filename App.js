import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello There!</Text>
      <Text>                       -Obi wan Kenobi</Text>
      <Image source = {{uri:'https://seeklogo.com/images/M/msi-logo-47BD237377-seeklogo.com.png'}}
      style = {{ width: 243, height: 300 }}
      />
    </View>
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
