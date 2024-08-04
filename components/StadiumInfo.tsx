import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StadiumInfo = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.stadiumName}>{ name }</Text>
      <Text style={styles.stadiumAddress}>Shed 21, 206 Lorimer Street, Docklands</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  stadiumImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  stadiumName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  stadiumAddress: {
    fontSize: 16,
    color: '#888',
  },
});

export default StadiumInfo;