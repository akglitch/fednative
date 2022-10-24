import React from "react";
import { ImageBackground, Button, StyleSheet, Text, View } from "react-native";

const image = require('./components/images/eng.png')

const App = () => (
 
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Mr money with the vibes</Text>
    </ImageBackground>
    <Button
          title="lets go"
        
        />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",

  
  },
  text: {
    color: "#000000",
    fontSize: 32,
    lineHeight: 104,
    textAlign: "center",
    
    
 
  }
  
});

export default App;