import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

const NotesView = ({ navigation }) => {

    const route = useRoute();

    const [note, setNotes] = useState('');
    const [notedis, setNotesDis] = useState('');
    const [noteindex, setNotesIndex] = useState();

    useEffect(() => {
        setNotes(route.params.item.task);
        setNotesDis(route.params.item.discription);
        setNotesIndex(route.params.index)
    }, [])

    const edit = () => {

        navigation.navigate('Editbox', { note, notedis, noteindex });
        // console.log(note, '+', notedis);
    }

    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'space-around', padding: 20, gap: 20 }}>
                <Text style={{ fontSize: 40, fontWeight: '500', color: '#fff', paddingLeft: 2, textAlign: 'center' }}>{note}</Text>
                <View style={{ flex: 1, backgroundColor: '#111111', borderRadius: 20, paddingTop: 15 }}>
                    <Text style={{ color: '#555555', fontSize: 20, fontWeight: '500', paddingLeft: 15 }}>{notedis}</Text>
                </View>

                <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={edit}>
                    <Text style={{
                        backgroundColor: 'royalblue', color: '#fff', padding: 10, fontSize: 22, fontWeight: '500',
                        width: 150, textAlign: 'center', borderRadius: 15
                    }}>Edit Note</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

export default NotesView;