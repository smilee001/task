import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotesView from './NotesView';

const ViewScreen = ({ navigation }) => {

  const route = useRoute();

  const [mlist, setMList] = useState([]);

  useEffect(() => {

    getData();

  }, [mlist])

  const getData = async () => {

    try {
      const storevalue = await AsyncStorage.getItem('myData');
      setMList(JSON.parse(storevalue));

    } catch (error) {
      console.log(error);
    }
  }

  const remove = (a) => {

    // mlist.splice(a)
    // console.log('click :', mlist[a]);

    var Afterlist = mlist.slice(a + 1);
    // console.log('Afterlist :', Afterlist);

    var Beforelist = mlist.slice(0, a);
    // console.log('Beforelist :', Beforelist);

    // setMList(Beforelist.concat(Afterlist));
    let Noteslist = Beforelist.concat(Afterlist);
    // console.log('list :', Noteslist);

    try {
      AsyncStorage.setItem('myData', JSON.stringify(Noteslist));

    } catch (error) {
      console.log(error);
    }

  }

  const complate = (a) => {

    // mlist[a] = { "task": task, "discription": discription, "complate": false }
    mlist[a]["complate"] = true;
    console.log(mlist);

    try {
      AsyncStorage.setItem('myData', JSON.stringify(mlist));

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'space-around', padding: 20, gap: 20 }}>
      <Text style={{ fontSize: 40, fontWeight: '500', color: '#fff', paddingLeft: 2 }}>My Notes</Text>
      <View style={{ flex: 1, backgroundColor: '#111111', borderRadius: 20, paddingTop: 15 }}>
        <ScrollView>
          {
            mlist.length === 0 ? (
              <Text style={{ color: '#555555', fontSize: 20, fontWeight: '500', paddingLeft: 15 }}>Empty Notes List</Text>
            ) : (
              mlist.map((item, index) => {
                return (
                  <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 15 }}>

                    <TouchableOpacity key={index} style={{ width: '80%', marginHorizontal: 15, padding: 10, gap: 10, backgroundColor: item.complate ? 'green' : 'silver', borderRadius: 10, overflow: 'hidden' }}
                      onPress={() => navigation.navigate('NotesView', { item, index })}>

                      {item.complate ?
                        <Text style={{
                          position: 'absolute', height: '140%', width: '108%', fontSize: 25, zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.6)',
                          textAlignVertical: 'center', textAlign: 'center', color: 'silver', fontWeight: '500'
                        }}>Task Complate</Text> : null
                      }

                      <Text style={{ color: '#111111', fontSize: 20, fontWeight: 'bold' }}>{item.task}</Text>
                      <Text style={{ color: '#111111', fontSize: 15, fontWeight: '500' }}>{item.discription}</Text>
                    </TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>

                      <TouchableOpacity onPress={() => { complate(index) }}>
                        <Icon name="check-all" size={24} color={item.complate ? 'green' : 'silver'} />
                      </TouchableOpacity>


                      <TouchableOpacity onPress={() => { remove(index) }}>
                        <Icon name="delete" size={30} color="silver" />
                      </TouchableOpacity>

                    </View>
                  </View>
                )
              })
            )
          }
        </ScrollView>
      </View >
    </View >
  )
}

export default ViewScreen;
