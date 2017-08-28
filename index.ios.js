//Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a Component
const App = () => {
  return (
    <View style={{ flex: 1 }} >
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};

//Render the component on the device screen
AppRegistry.registerComponent('albums', () => App);
