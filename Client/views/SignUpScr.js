import React, { Component, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { render } from 'react-dom';
import LinearGradient from 'react-native-linear-gradient';
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
            <KeyboardAwareScrollView
                resetScrollToCoords={{ x: 0, y: 0 }}
                style={{ backgroundColor: "grey" }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        {/* <LinearGradient colors={['#2974FA', '#38ABFD', '#43D4FF']} style={{flex:1}}> */}

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

                            <Text>You have an account?
                                <Button
                                    title="Login"
                                    onPress={() => navigation.navigate('Settings')}
                                >
                                    <Text>
                                        Login
                                    </Text>
                                </Button>
                            </Text>

                            <TouchableOpacity
                                title={'Sign Up'}
                                onPress={null}
                                style={styles.loginButton}>
                                <Text>Submit</Text>
                            </TouchableOpacity>
                        {/* </LinearGradient> */}
                    </View>
                </SafeAreaView>
            </KeyboardAwareScrollView>
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
    rowDisplay: {
        flexDirection: 'column'

    },
    appTitle: {
        // textAlign: 'center',
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
        color: "#FFF",
        margin: 7,
        fontSize: 15,
        paddingTop: 10,
        // paddingHorizontal: 32,
        paddingVertical: 5,
    },
    loginButton: {
        padding: 15,
        // minWidth: MAX_FIELD_WIDTH,
        backgroundColor: '#ACCBAC',
        borderWidth: 1,
        borderColor: '#ACCBAC',
        borderRadius: 100,
        marginHorizontal: 10,
        marginVertical: 10,
        elevation: 3,
        // justifyContent: 'center',
        // alignContent: 'center',
        alignSelf: 'center'
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