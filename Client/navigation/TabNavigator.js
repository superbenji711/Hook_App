import React, { Component, useState, useContext } from 'react';
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
import SettingsScr from '../views/SettingsScr';
import ProfileScr from '../views/ProfileScr';
import SignUpScr from '../views/SignUpScr';
import SignInScr from '../views/SignInScr';
import MessageScr from '../views/MessageScr';
import StatsScr from '../views/StatsScr';

import Icon from 'react-native-vector-icons/Ionicons';
import UserContext from '../util/UserContext';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
    const user = useContext(UserContext);
    // console.log(value)
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const HomeStack = () => {
        return (
            <Stack.Navigator
            initialRouteName='Landing'
                options={{
                    headerStyle: { backgroundColor: 'grey' }
                }}
            >
                <Stack.Screen
                    name="Landing"
                    component={HomeScr}
                />
                                <Stack.Screen
                    name="Settings"
                    component={SettingsScr}
                />
            </Stack.Navigator>
        )
    }
    const MessageStack = () => {
        return (
            <Stack.Navigator
            initialRouteName='Message'
            >
                <Stack.Screen
                    name="Message"
                    component={MessageScr}
                />
            </Stack.Navigator>
        )
    }
    const StatStack = () => {
        return (
            <Stack.Navigator
            initialRouteName='Stat'>
                <Stack.Screen
                    name="Stat"
                    component={StatsScr}
                />
            </Stack.Navigator>
        )
    }
    const ProfileStack = () => {
        return (
            <Stack.Navigator
                initialRouteName='Profile'
            >
                <Stack.Screen
                    name="Profile"
                    component={ProfileScr}
                />
            </Stack.Navigator>
        )
    }

    //Stack used for authentication and logging user In
    const AuthStack = () => {
        return (
            <Stack.Navigator
                initialRouteName='SignIn'>
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScr}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignInScr}
                />
            </Stack.Navigator>
        )
    }

    return user.isLoggedIn == true ? (
    // return(
        <NavigationContainer>
            <Tab.Navigator
                // initialRouteName="Home"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'grey' }
                }}
                // tabBarOptions={{
                //     activeTintColor: '#009FFD',
                //     inactiveTintColor: '#bdc3c7',
                // }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        title: 'Home',
                        backgroundColor: 'green',
                    }}
                />
                <Tab.Screen
                    name="Message"
                    component={MessageStack}
                    options={{
                        title: 'Message',
                        backgroundColor: 'green',
                    }}
                />
                <Tab.Screen
                    name="Stat"
                    component={StatStack}
                    options={{
                        title: 'Stat'
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileStack}
                    options={{
                        title: 'Profile'
                    }}
                />
            </Tab.Navigator>

        </NavigationContainer>
    )
    : //user no logged In
    (
        <NavigationContainer>
            <Stack.Navigator
                headerMode='none'
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'grey' }
                }}
            >
                <Stack.Screen
                    name="Sign"
                    component={AuthStack}
                    options={{
                        title: 'sign'
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
});


export default TabNavigator;