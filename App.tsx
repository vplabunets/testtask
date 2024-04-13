import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';

import HomeScreen from './src/Screens/HomeScreen';
import MapScreen from './src/Screens/MapScreen';
import QRScreen from './src/Screens/QRScreen';
import HistoryScreen from './src/Screens/HistoryScreen';
import ProfileScreen from './src/Screens/ProfileScreen';

import Home from './src/assets/bottomTabIcons/home.svg';
import HomeFocused from './src/assets/bottomTabIcons/homeFocused.svg';
import Map from './src/assets/bottomTabIcons/map.svg';
import MapFocused from './src/assets/bottomTabIcons/mapFocused.svg';
import History from './src/assets/bottomTabIcons/history.svg';
import HistoryFocused from './src/assets/bottomTabIcons/historyFocused.svg';
import Profile from './src/assets/bottomTabIcons/profile.svg';
import ProfileFocused from './src/assets/bottomTabIcons/profileFocused.svg';
import QR from './src/assets/bottomTabIcons/qr.svg';

const BottomTab = createBottomTabNavigator();
const width = Dimensions.get('window').width;

function App() {

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({route}) => ({
          headerStatusBarHeight: 20,
          tabBarShowLabel: false,
          tabBarStyle: styles.mainStyles,
          tabBarBackground: () => (
            <ImageBackground
              resizeMode="contain"
              source={require('./src/assets/bottomTabIcons/bottomTabBackground.png')}
              style={styles.imageBackground}
            />
          ),
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              return focused ? <HomeFocused /> : <Home />;
            } else if (route.name === 'Map') {
              return focused ? <MapFocused /> : <Map />;
            } else if (route.name === 'History') {
              return focused ? <HistoryFocused /> : <History />;
            } else if (route.name === 'Profile') {
              return focused ? <ProfileFocused /> : <Profile />;
            } else if (route.name === 'Qr') {
              return <QR />;
            }
          },
        })}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarItemStyle:  styles.homeItem
          }}
        />
        <BottomTab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarItemStyle: styles.mapItem
          }}
        />
        <BottomTab.Screen
          name="Qr"
          component={QRScreen}
          options={{
            tabBarItemStyle: styles.qrItem
          }}
        />
        <BottomTab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarItemStyle: styles.historyItem
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarItemStyle: styles.profileItem,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  mainStyles:{ 
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    elevation: 0},
  imageBackground:{
    flex: 1,
    position: 'absolute',
    bottom: width*0.03,
    left: 0,
    width: '100%',
    height: width*0.2,
  },
  homeItem:{
    flex: 1,
    height: 60,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,},
  mapItem:{
    width: 40,
    height: 60,
    paddingRight: 40,},
  qrItem:{
    position: 'absolute',
    zIndex: 10,
    top: -width*0.1,
    left: width*0.37,
    padding: 30,
    margin: 10,
    width: width*0.1,
    height: width*0.1,
    backgroundColor: '#2E7C07FF',
    borderRadius: 32,
  },
  historyItem:
  {
    width: 40,
    height: 60,
},
  profileItem: {
    flex: 1,
    height: 60,
    width: 100,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
}
})