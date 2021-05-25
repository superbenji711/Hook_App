import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigation/TabNavigator'
import UserContext from './util/UserContext';


const App = () => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
      <View style={styles.container}>
        <TabNavigator/>
      </View>
     </UserContext.Provider>
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