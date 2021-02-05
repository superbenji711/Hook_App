import React, { Component, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { render } from 'react-dom';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Button,
    SafeAreaView
} from 'react-native';
import UserAPI from '../api/UserApi'
class SignUpScr extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            confirmPassword: "",
            email: "",
            age: "",
            userPosts: []
        }
    }



    setPassword = async (response) => {
        this.setState({
            password: response,
        })
    };
    setConfirmPassword = async (response) => {
        this.setState({
            confirmPassword: response,
        })
    }
    setUserName = async (response) => {
        this.setState({
            userName: response,
        })
    };
    setFirstName = async (response) => {
        this.setState({
            firstName: response,
        })
    };
    setLastName = async (response) => {
        this.setState({
            lastName: response,
        })
    };
    setEmail = async (response) => {
        this.setState({
            email: response,
        })
    };

    signUp = async () => {  //create user
        const { userName, password, confirmPassword, firstName, lastName, email } = this.state;

        if (confirmPassword != password) {
            return (
                <Text style={{ fontSize: 20 }}>
                    {alert("Password must be the same!")}
                </Text>
            )
        } else {
            // console.log("complete");
            const createUserResponse = await UserAPI.createUser(
                {first: firstName, last: lastName}, 
                userName, 
                password, 
                email
            );

            // console.log(`Successfully created user ${userName}`);
        }
    };




    render() {
        const { navigation } = this.props;
        const { userName, password, confirmPassword, firstName, lastName, email } = this.state;




        const signIn = async (props) => { // got to login screen

            if (props.confirmPassword != props.password) {
                return (
                    <Text style={{ fontSize: 20 }}>
                        {alert("Password must be the same!")}
                    </Text>
                )
            } else {
                // console.log("complete");
                UserAPI.createUser(firstName, lastName, userName, password, email);
            }
        }


        return (
            // ['#2974FA', '#38ABFD', '#43D4FF']
            <LinearGradient colors={['#009FFD', '#2A2A72']} style={{ flex: 1 }}>
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                >
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={styles.container}>
                            <Image
                                source={require('../assets/logoTest.png')}
                                style={{ alignSelf: 'center', height: 70, width: 70 }}
                            />

                            <TextInput editable={false} style={styles.appTitle}>Register</TextInput>

                            <View style={styles.rowDisplay}>
                                <TextInput
                                    style={styles.field}
                                    placeholder={'First Name'}
                                    onChangeText={this.setFirstName}
                                    value={firstName}
                                />
                                <TextInput
                                    style={styles.field}
                                    placeholder={'Last Name'}
                                    onChangeText={this.setLastName}
                                    value={lastName}
                                />
                                <TextInput
                                    style={styles.field}
                                    placeholder={'Username'}
                                    onChangeText={this.setUserName}
                                    value={userName}
                                />
                                <TextInput
                                    style={styles.field}
                                    placeholder={'Password'}
                                    onChangeText={this.setPassword}
                                    value={password}
                                />
                                <TextInput
                                    style={styles.field}
                                    placeholder={'Confirm Password'}
                                    onChangeText={this.setConfirmPassword}
                                    value={confirmPassword}
                                />
                                <TextInput
                                    style={styles.field}
                                    placeholder={'Email'}
                                    onChangeText={this.setEmail}
                                    value={email}
                                />
                            </View>

                            <Text style={{ color: 'white' }}>You have an account?
                                <TouchableOpacity
                                    title="Login"
                                    onPress={() => signIn({ userName, name, password, confirmPassword, email })}
                                    style={styles.loginButton}
                                >
                                    <TextInput editable={false} style={{ borderBottomWidth: 1, borderBottomColor: 'black', left: 4, alignSelf: 'center', top: 3, color: 'yellow' }}>
                                        Login
                                    </TextInput>
                                </TouchableOpacity>
                            </Text>

                            <TouchableOpacity
                                title={'Submit'}
                                onPress={this.signUp}
                                style={styles.submitButton}
                            >
                                <Text style={{ color: 'white' }}>Submit</Text>
                            </TouchableOpacity>

                        </View>
                    </SafeAreaView>
                </KeyboardAwareScrollView>
            </LinearGradient>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        // backgroundColor: 'grey',
        padding: 50,
        paddingTop: 50,
        flex: 1,
        // margin: 20,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    rowDisplay: {
        flexDirection: 'column'

    },
    appTitle: {
        color: 'white',
        fontSize: 30,
        borderBottomWidth: 3,
        // borderBottomColor: 'black',
        marginBottom: 30,

    },
    title: {
        fontSize: 34,
        letterSpacing: 1,
        marginVertical: 30,
    },
    field: {

        borderBottomWidth: 1,
        // color: "#FFF",
        margin: 7,
        fontSize: 15,
        paddingTop: 10,
        // paddingHorizontal: 32,
        paddingVertical: 5,
    },
    loginButton: {
        paddingTop: 12,
    },
    submitButton: {
        alignContent: 'center',
        alignSelf: 'center',
        top: 12,
        padding: 2,
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: 'black',
        paddingLeft: 15,
        paddingRight: 15,

    },
    signupButtonTxt: {
        fontSize: 15,
        alignSelf: 'center',
        color: '#ACCBAC',
        justifyContent: 'center'
    },
    loginButtonText: {
        // flex: 1,
        fontSize: 15,
        alignSelf: 'center',
        color: '#fff',
    },
});


export default SignUpScr;