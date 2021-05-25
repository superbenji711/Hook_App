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
            userPosts: [],
            followers: 0,
            following: 0
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
        const { firstName, lastName, userName,userPosts, password, confirmPassword, email, followers, following } = this.state;

        if (confirmPassword != password) {
            return (
                <Text style={{ fontSize: 20 }}>
                    {alert("Password must be the same!")}
                </Text>
            )
        } else {
            const name =   {
                first: firstName, 
                last: lastName
            }
            const createUserResponse = await UserAPI.createUser(
                name,
                userName, 
                password, 
                email,
                userPosts,
                followers,
                following
            );

            console.log(createUserResponse);

            // console.log(`Successfully created user ${userName}`);
        }
    };

    allUsers = async () => {  //get all users
         
            const createUserResponse = await UserAPI.getUsers();

            console.log(createUserResponse);

    };




    render() {
        const { navigation } = this.props;
        const { userName, password, confirmPassword, firstName, lastName, email, followers, following } = this.state;



        return (
            // ['#2974FA', '#38ABFD', '#43D4FF'] other colors for sign in page
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
                                    onPress={() => navigation.navigate('SignIn')}//{() => signIn({ name:{firstName, lastName}, password, userName, confirmPassword, email, followers, following })}
                                    style={styles.loginButton}
                                >
                                    <TextInput editable={false} style={{ borderBottomWidth: 1, borderBottomColor: 'black', left: 4, alignSelf: 'center', top: 3, color: 'yellow' }}>
                                        Login
                                    </TextInput>
                                </TouchableOpacity>
                            </Text>

                            <TouchableOpacity
                                title={'Submit'}
                                onPress={this.allUsers}//{this.signUp}
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