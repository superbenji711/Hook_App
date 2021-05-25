import React, { Component, useState, useContext } from 'react';
import { render } from 'react-dom';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Form,
    Modal,
    TouchableOpacity,
    Button,
    Dimensions
} from 'react-native';
import ChatApi from '../api/ChatApi';
import UserApi from '../api/UserApi';
import UserContext from '../util/UserContext';

const { width } = Dimensions.get("window");



const MessageScr = ({ navigation }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [input, setInput] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [history, setHistory] = useState([]);
    const [members, setMembers] = useState([]);

    const user = useContext(UserContext);
    // {console.log()}

    const getChats = async () => {
        // const chats = await ChatApi.getAllChats();
        // const chats = "Hello";
        // console.log(chats);

    }
    const createChat = async () => {

        // const chats = await ChatApi.createChat(null,null,null);

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!isModalVisible);
                }}
            >
            </Modal>
        )
    }

    // Open and close modal upon button clicks.
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };
    // const{navigation} = this.props;

    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.container1}> */}
            <Text style={styles.title1}>Welcome to Messages</Text>


            <TouchableOpacity
                onPress={()=>setModalVisible(!isModalVisible)}
                title={"hey"}
                backgroundColor={'green'}

                style={{ alignSelf: 'center', alignItems: 'center', borderRadius: 20, borderColor: 'green', borderWidth: 2, width: '60%' }}
            >
                <Text>
                    create Message
                </Text>
            </TouchableOpacity>

  

            <Modal animationType="slide"
                transparent visible={isModalVisible}
                presentationStyle="overFullScreen"
                onDismiss={toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>

                        <Text style={{ paddingLeft: 14, textAlign: 'left', fontSize: 15 }}>Title</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={val => setTitle(val)}
                            value={title}
                        />
                        <Text style={{ paddingLeft: 14, textAlign: 'left', fontSize: 15 }}>Message</Text>

                        <TextInput
                            style={styles.input2}
                            onChangeText={data => setMessage(data)}
                            value={message}
                            placeholder="Message"
                        />

                        {/** This button is responsible to close the modal */}
                        <Button title="Close" onPress={toggleModalVisibility} />
                    </View>
                </View>
            </Modal>



            <View style={{ flex: 1, borderTopWidth: 2, borderTopColor: 'black', marginTop: 15 }}>
                <Text>

                </Text>
            </View>
        </SafeAreaView>
    )


}


const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 2,
        margin: 5,
        flex: 1,
        backgroundColor: "#fff",
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title1: {
        textAlign: 'center',
        fontSize: 30,
        borderBottomWidth: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    input2: {
        // maxHeight: 150,
        height: 150,
        margin: 12,
        borderWidth: 1,
    },
    viewWrapper: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    modalView: {
        // alignItems: "center",
        justifyContent: "center",
        // position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.45) },
        { translateY: -300 }],
        height: 500,
        width: width * .9,
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    }

});


export default MessageScr;