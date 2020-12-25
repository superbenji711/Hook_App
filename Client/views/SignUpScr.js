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

// import logoTest from '../assets/logoTest.png';

class SignUpScr extends Component {

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
    setName = async (response) => {
        this.setState({
            name: response,
        })
    };
    setEmail = async (response) => {
        this.setState({
            email: response,
        })
    };

    render() {
        const { navigation } = this.props;
        const { userName, password, name, email, age } = this.state;
        return (
            // ['#2974FA', '#38ABFD', '#43D4FF']
            <LinearGradient colors={['#009FFD', '#2A2A72']} style={{ flex: 1 }}>

                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                >

                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={styles.container}>
                            <Image
                                source={require('../assets/l')}
                                style={{height: 50, width: 50}}
                            />

                            <TextInput editable={false} style={styles.appTitle}>Register</TextInput>

                            <View style={styles.rowDisplay}>
                                <TextInput
                                    style={styles.field}
                                    placeholder={'Name'}
                                    onChangeText={this.setName}
                                    value={name}
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
                                    placeholder={'Email'}
                                    onChangeText={this.setEmail}
                                    value={email}
                                />
                            </View>

                            <Text style={{ color: 'white' }}>You have an account?
                                <TouchableOpacity
                                    title="Login"
                                    onPress={() => navigation.navigate('Settings')}
                                    style={styles.loginButton}
                                >
                                    <TextInput editable={false} style={{ borderBottomWidth: 1, borderBottomColor: 'black', left: 4, alignSelf: 'center', top: 3, color: 'yellow' }}>
                                        Login
                                    </TextInput>
                                </TouchableOpacity>
                            </Text>

                            <TouchableOpacity
                                title={'Submit'}
                                onPress={null}
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
        paddingTop: 70,
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