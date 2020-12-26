import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import HomeScr from '../views/HomeScr';
import LoginScr from '../views/LoginScr';
import SettingsScr from '../views/SettingsScr';
import ProfileScr from '../views/ProfileScr';
import SignUpScr from '../views/SignUpScr';
// import {}
// const Stack = createStackNavigator();



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const HomeSatck = createStackNavigator();

const TabNavigator = () => {

    const HomeStack = () => {
        return (
            <Tab.Navigator
                tabBarOptions={()=>{}}
            >
                <Tab.Screen
                    name="Landing"
                    component={HomeScr}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScr}
                />
                <Tab.Screen
                    name="Sign Up"
                    component={SignUpScr}
                    options={{
                        headerMode: 'none',
                    }}
                    screenOptions={{
                        headerMode: 'none',
                    }}
                />
                {/* <Tab.Screen name="Settings" component={SettingsScr} /> */}

            </Tab.Navigator>
        )
    }
    const ProfileStack = () => {
        return (
            <Tab.Navigator            >
                <Tab.Screen
                    name="Profile"
                    component={ProfileScr}
                />
                {/* //client screen */}
                {/* <Tab.Screen name="Settings" component={SettingsScr} /> */}

            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            {/* <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScr}
                    options={{ tabBarLabel: 'Home!', display: 1 }} />
                <Tab.Screen
                    name="Login"
                    component={LoginScr} />
                <Tab.Screen
                    name="Setting"
                    component={SettingsScr} />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScr} />
            </Tab.Navigator> */}
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle:{backgroundColor: 'grey'}
                    
                }}

                // mode="modal"
             >
                <Stack.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        title: 'Home'
                    }}
                    
                />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScr}
                    options={{
                        title: 'Settings'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

}


const styles = StyleSheet.create({
    container: {
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 20,
        flex: 1,
    },
    title1: {
        textAlign: 'center',
        fontSize: 30,
        borderWidth: 10,
        // ,
        borderColor: 'black',
        borderRadius: 15,
    },
    mainContainer: {
        margin: 20,
        flex: 1,
        display: 'flex',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 34,
        letterSpacing: 1,
        marginVertical: 30,
    },
    field: {
        backgroundColor: '#F4F4F4',
        borderWidth: 1,
        // minWidth: MAX_FIELD_WIDTH,
        borderRadius: 6,
        borderColor: '#F4F4F4',
        margin: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    loginButton: {
        padding: 10,
        // minWidth: MAX_FIELD_WIDTH,
        backgroundColor: '#ACCBAC',
        borderWidth: 1,
        borderColor: '#ACCBAC',
        borderRadius: 100,
        marginHorizontal: 10,
        marginVertical: 10,
        elevation: 3,
    },
    signupButton: {
        padding: 10,
        // minWidth: MAX_FIELD_WIDTH,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#ACCBAC',
        borderRadius: 100,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    signupButtonTxt: {
        fontSize: 15,
        alignSelf: 'center',
        color: '#ACCBAC',
    },
    loginButtonText: {
        // flex: 1,
        fontSize: 15,
        alignSelf: 'center',
        color: '#fff',
    },
});


export default TabNavigator;