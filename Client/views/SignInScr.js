import React, { Component, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { render } from 'react-dom';
// import {LinearGradient} from 'react-native-linear-gradient';
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
import UserContext from '../util/UserContext';

// import logoTest from '../assets/logoTest.png';

class SignInScr extends Component {
    // static contextType = UserContext;

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            userName: "",
            password: "",
            email: "",
            age: "",
            userPosts: []
        }
    }

    signUp = async () => {
        const { userName, password } = this.state;

        { console.log(userName + " " + password) }
    };

    signIn = async () => {

    }

    setPassword = async (response) => {
        this.setState({
            password: response,
        })
    };
    setUserName = async (response) => {
        this.setState({
            userName: response,
        })
    };

    // componentDidMount() {
    //     const isLoggedIn = this.context;
    //     const setIsLoggedIn = this.context;
    
    // }
    
    render() {
        // const {isLoggedIn,setIsLoggedIn} = this.context;
        // console.log(isLoggedIn);
        const { navigation } = this.props;
        const { userName, password, name, email, age } = this.state;
        return (
            <LinearGradient colors={['#009FFD', '#2A2A72']} style={{ flex: 1 }}>

                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                >

                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={styles.container}>
                            <Image
                                source={require('../assets/logoTest.png')}
                                style={{alignSelf: 'center', height: 70, width: 70}}
                            />

                            <TextInput editable={false} style={styles.appTitle}>Login</TextInput>

                            <View style={styles.rowDisplay}>
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
                            </View>

                            <Text style={{ color: 'white' }}>You don't have an account!
                                <TouchableOpacity
                                    title="Login"
                                    onPress={() => navigation.navigate('Sign Up')}
                                    style={styles.loginButton}
                                >
                                    <TextInput editable={false} style={{ borderBottomWidth: 1, borderBottomColor: 'black', left: 4, alignSelf: 'center', top: 3, color: 'yellow' }}>
                                        Sign Up
                                    </TextInput>
                                </TouchableOpacity>
                            </Text>

                            <TouchableOpacity
                                title={'Submit'}
                                // onPress={navigation.navigate("Profile"), setIsLoggedIn(true)}
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
        alignContent: 'center',
        padding: 50,
        paddingTop: 80,
        flex: 1,
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


export default SignInScr;