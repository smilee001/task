import React, { useEffect, useState } from 'react'
import SpalshScreen from './src/screen/spalsh';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import ViewScreen from './src/screen/View';
import AddNote from './src/screen/Add';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesView from './src/screen/NotesView';
import Editbox from './src/screen/Editbox';
import Aboutus from './src/screen/Aboutus';

function View() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="ViewList"
      screenOptions={{
        headerShown: false
      }} >
      <Stack.Screen name="ViewList" component={ViewScreen} />
      <Stack.Screen name="NotesView" component={NotesView} />
      <Stack.Screen name="Editbox" component={Editbox} />
    </Stack.Navigator>
  );
}

const App = () => {

  const [splash, setSplash] = useState(true);

  const Tab = createBottomTabNavigator();

  useEffect(() => {

    setTimeout(() => {
      setSplash(false)
    }, 3000)

  }, [])

  return (
    <>
      {splash ? <SpalshScreen />

        : <NavigationContainer>
          {/* <Stack.Navigator>
            <Stack.Screen name="NotesView" component={NotesView} />
          </Stack.Navigator> */}
          <Tab.Navigator
            initialRouteName="View"
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                height: 60,
                paddingBottom: 2,
                backgroundColor: '#000'
              }
            }}
            tabBarOptions={{
              labelStyle: { fontSize: 16, fontWeight: '500' },
              activeTintColor: 'royalblue',
              inactiveTintColor: '#fff',
              activeBackgroundColor: '#000',
              inactiveBackgroundColor: '#000'
            }}
          >
            <Tab.Screen name="AddNote" component={AddNote}
              options={{
                tabBarLabel: 'Add Note',
                tabBarIcon: ({ color }) => (
                  <Icon name="add-to-list" size={25} color={color} />
                ),
              }}
            />
            <Tab.Screen name="View" component={View}
              options={{
                tabBarLabel: 'View List',
                tabBarIcon: ({ color }) => (
                  <Icon name="eye" size={25} color={color} />
                ),
              }}
            />
            <Tab.Screen name="AboutUs" component={Aboutus}
              options={{
                tabBarLabel: 'About Us',
                tabBarIcon: ({ color }) => (
                  <Icon name="info-with-circle" size={23} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer >
      }
    </>
  )
}

export default App;
