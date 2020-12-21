import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';




//handle state changes
const AuthApi = () =>{
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChange = async (user) => {
        setUser(user);
        if (initializing){ 
            setInitializing(false);
        }
    }

    // const secureSignUp


}

export default AuthApi;
  