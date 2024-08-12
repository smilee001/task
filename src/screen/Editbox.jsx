import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Editbox = ({ navigation }) => {

    const route = useRoute();

    const [Editname, setEditname] = useState('');
    const [Editdisc, setEditDisc] = useState('');
    const [noteindex, setNotesIndex] = useState();

    var list = [];

    useEffect(() => {

        setEditname(route.params.note)
        setEditDisc(route.params.notedis)
        setNotesIndex(route.params.noteindex)

    }, [])

    const save = async () => {

        try {
            const storevalue = await AsyncStorage.getItem('myData');
            list = JSON.parse(storevalue)

        } catch (error) {
            console.log(error);
        }



        for (var i = 0; i < list.length; i++) {

            if (i == noteindex) {
                list[i] = { "task": Editname, "discription": Editdisc }
                // console.log(list[i]);
            }

        }

        try {
            AsyncStorage.setItem('myData', JSON.stringify(list));

        } catch (error) {
            console.log(error);
        }

        navigation.navigate("ViewList");

    }

    return (
        <View style={{ flex: 1, backgroundColor: '#000', padding: 20 }}>
            <Text style={{ fontSize: 35, fontWeight: '500', color: '#fff', paddingLeft: 2 }}>Edit Note</Text>

            <View style={{ flex: 1, gap: 10, marginVertical: 20 }}>
                <TextInput
                    value={Editname}
                    onChangeText={(text) => { setEditname(text) }}
                    placeholder='Enter Task Name'
                    placeholderTextColor='#555555'
                    style={{ paddingHorizontal: 15, fontSize: 20, backgroundColor: '#111111', borderRadius: 10, color: '#fff' }}>
                </TextInput>
                <TextInput
                    value={Editdisc}
                    onChangeText={(discription) => { setEditDisc(discription) }}
                    placeholder='Description :'
                    placeholderTextColor='#555555'
                    style={{ flex: 1, paddingHorizontal: 15, fontSize: 15, backgroundColor: '#111111', borderRadius: 10, textAlignVertical: 'top', color: '#fff' }}>
                </TextInput>
            </View>

            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={save}>
                <Text style={{
                    backgroundColor: 'royalblue', color: '#fff', padding: 10, fontSize: 22, fontWeight: '500',
                    width: 150, textAlign: 'center', borderRadius: 15
                }}>Save</Text>
            </TouchableOpacity>

        </View >

    )
}

export default Editbox;