import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const QRScreen = () => {
  return (
    <View style={styles.container}>
      <Text>QR Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default QRScreen;
