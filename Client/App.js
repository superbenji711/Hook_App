import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/LoginScr';
import TabNavigator from './navigation/TabNavigator'


const App = () => {
 
  return (
    <View style={styles.container}>
      <TabNavigator>
      {/* <Login/> */}
      </TabNavigator>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;