import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const AboutPage = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: 'https://cdn-icons-png.freepik.com/512/8019/8019118.png' }} />
            <Text style={styles.title}>ToDoList</Text>
            <Text style={styles.subtitle}>by YourCompany</Text>
            <Text style={styles.version}>Version 1.0</Text>
            <Text style={styles.description}>A simple and intuitive task management app to help you stay organized and productive.</Text>
            <Text style={styles.description}>With ToDoList, you can easily create, manage, and prioritize your tasks, ensuring nothing falls through the cracks.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingHorizontal: 20,
    },
    logo: {
        width: 130,
        height: 130,
        borderRadius: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 40,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 25,
        color: '#FFF',
        marginBottom: 10,
    },
    version: {
        fontSize: 20,
        color: '#FFF',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: 'silver',
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default AboutPage;