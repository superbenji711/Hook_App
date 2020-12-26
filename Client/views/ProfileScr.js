import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from 'react-native-elements';
import profilePic from '../assets/Profile/Hair_Profile.jpg';
import { Icon, ListItem } from 'react-native-elements'
class SettingsScr extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <LinearGradient colors={['#009FFD', '#2A2A72']} style={{ flex: 1 }}>
                        <View>
                            <Avatar
                                containerStyle={{ backgroundColor: 'black', alignSelf: 'center', marginTop: 15, }}
                                rounded={true}
                                title="BL"
                                size="xlarge"
                                activeOpacity={0.7}
                                source={require('../assets/Profile/noHair_profile.jpg')}
                            />
                        </View>
                        <View style={styles.containerUserInfo}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 18 }}>Followers</Text>
                                <Text style={{ fontSize: 16 }}>0</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 18 }}>Likes</Text>
                                <Text style={{ fontSize: 16 }}>0</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 18 }}>Comments</Text>
                                <Text style={{ fontSize: 16 }}>0</Text>
                            </View>

                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.containerBottom}>
                    <View style={styles.containerUserData}>
                        <TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 12 }}>
                            <Text>Messages
                                {/* <Icon name='rowing' /> */}
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 12 }}>
                            <Text>Edit Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 12 }}>
                            <Text>Promotions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 12 }}>
                            <Text>Membership</Text>
                        </TouchableOpacity>
                        <TouchableOpacity TouchableOpacity style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 12 }}>
                            <Text>About</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.logoutButton}>
                            <Text style={{color: 'blue'}}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    containerTop: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#009FFD',

    },
    containerBottom: {
        flex: 3,
    },
    containerUserInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        paddingLeft: 60,
        paddingRight: 60
    },
    containerUserData: {
        flex: 1,
        margin: 16,
        paddingRight: 15,
        paddingLeft: 15,
        justifyContent: 'space-evenly',
        flexDirection: 'column',
    },
    logoutButton: {
        // borderWidth: 2,
        // borderRadius: 15,
        // backgroundColor: 'red',
        alignSelf: 'center',
        padding: 6,
    }
});


export default SettingsScr;