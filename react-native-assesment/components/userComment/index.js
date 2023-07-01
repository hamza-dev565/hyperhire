import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./styles";

const UserComment = ({ name, status, description, icon }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={icon ? icon : require('../../assets/user.png')}
                        resizeMode="stretch"
                        style={styles.userImage}
                    />
                </View>
                <Text style={styles.userName}>{name ? name : 'John Smith'}</Text>
                {status && <Image
                    source={require('../../assets/check.png')}
                    resizeMode="contain"
                    style={styles.verfiyImage}
                />}
                <Text style={styles.verifyText}>{status ? 'verified' : 'no-verified'}</Text>
            </View>
            <View style={{ marginLeft: '16%' }}>
                <Text style={{ fontSize: 13 }}>{description ? description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}</Text>
                <View style={styles.reactionContainer}>
                    <Image
                        source={require('../../assets/heart.png')}
                        resizeMode="contain"
                        style={styles.reactionImage}
                    />
                    <Text style={{ marginHorizontal: 5 }}>5</Text>
                    <Image
                        source={require('../../assets/chat-bubble.png')}
                        resizeMode="contain"
                        style={styles.reactionImage}
                    />
                    <Text style={{ marginHorizontal: 5 }}>6</Text>
                </View>
            </View>
        </>
    );
};


export default UserComment;
