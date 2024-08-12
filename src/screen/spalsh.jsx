import React from 'react'
import { Image, Text, View } from 'react-native';

const SpalshScreen = () => {
    return (
        <View style={{ flex: 1, gap: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
            <Image style={{ width: 130, height: 130, borderRadius: 100 }} source={{ uri: 'https://cdn-icons-png.freepik.com/512/8019/8019118.png' }}></Image>
            <Text style={{ fontSize: 40, color: '#FFF', fontWeight: 'bold' }}>ToDoList</Text>
        </View>
    )
}

export default SpalshScreen;
