import React, {Component, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './views/LoginScr';
import TabNavigator from './navigation/TabNavigator'
import UserContext from './util/UserContext';


const App = () => {
  const [user, setUser] = useState();

 
  return (
    // <UserContext.Provider currUser={user, setUser}>
    <View style={styles.container}>
      <TabNavigator>
      {/* <Login/> */}
      </TabNavigator>
    </View>
    // </UserContext.Provider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 15,
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;