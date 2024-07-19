import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MatchBooking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a place in a match</Text>
      <Text style={styles.subtitle}>
        There aren’t any Open Matches available at this time. Try another time. <Icon name="alarm" size={16} color="#888" />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 16,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#666',
  },
});

export default MatchBooking;
