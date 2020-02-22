import React from 'react';
import { StyleSheet } from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  return (
    <WebView 
    source={{uri: 'https://www.figma.com/proto/QkpEf1Bg5hfmc00T0jSboN/Spawn?node-id=19%3A2&scaling=scale-down'}}
    style={{marginTop: 20}}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
