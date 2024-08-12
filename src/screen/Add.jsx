import React, { useEffect, useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ViewScreen from './View';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

const AddNote = ({ navigation }) => {

    const [task, setTask] = useState('');
    const [discription, setDiscription] = useState('');

    const [taskvalue, setTaskvalue] = useState('');
    const [disvalue, setDisvalue] = useState('');

    const [on, setOn] = useState(false);

    useEffect(() => {
        setTaskvalue(task);
        setDisvalue(discription);
    }, [task, discription])

    // const [list, setList] = useState([]);

    var list = [];

    useEffect(() => {

    }, []);

    const clear = async () => {
        try {
            const storevalue = await AsyncStorage.getItem('myData');
            list = JSON.parse(storevalue)

        } catch (error) {
            console.log(error);
        }

        list.push({ "task": task, "discription": discription, "complate": false })

        console.log(list);

        try {
            AsyncStorage.setItem('myData', JSON.stringify(list));

        } catch (error) {
            console.log(error);
        }

        navigation.navigate("ViewList");

        // navigation.navigate("ViewList", { list })

        clean();
    }

    function clean() {

        setTask('');
        setDiscription('');

    }

    return (
        <View style={{ flex: 1, backgroundColor: '#000', padding: 20 }}>
            <Text style={{ fontSize: 35, fontWeight: '500', color: '#fff', paddingLeft: 2 }}>Create Note</Text>

            <View style={{ flex: 1, gap: 10, marginVertical: 20 }}>
                <TextInput
                    value={task}
                    onChangeText={(text) => { setTask(text) }}
                    placeholder='Enter Task Name'
                    placeholderTextColor='#555555'
                    style={{ paddingHorizontal: 15, fontSize: 20, backgroundColor: '#111111', borderRadius: 10, color: '#fff' }}>
                </TextInput>
                <TextInput
                    value={discription}
                    onChangeText={(discription) => { setDiscription(discription) }}
                    placeholder='Description :'
                    placeholderTextColor='#555555'
                    style={{ flex: 1, paddingHorizontal: 15, fontSize: 15, backgroundColor: '#111111', borderRadius: 10, textAlignVertical: 'top', color: '#fff' }}>
                </TextInput>
            </View>

            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={clear} >
                <Text style={{
                    backgroundColor: 'royalblue', color: '#fff', padding: 10, fontSize: 22, fontWeight: '500',
                    width: 150, textAlign: 'center', borderRadius: 15
                }}>Add Note</Text>
            </TouchableOpacity>

        </View >
    )
}

export default AddNote;
