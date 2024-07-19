import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const CourtBooking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a court</Text>
      <Text>Create a private match where you can invite your friends</Text>
      <View style={styles.switchContainer}>
        <Text>Show available courts only</Text>
        <Switch value={true} />
      </View>
      <View style={styles.courtsContainer}>
        {['Padel Court 1', 'Padel Court 2', 'Instant Padel Court'].map((court, index) => (
          <View key={index} style={styles.court}>
            <Text style={styles.courtTitle}>{court}</Text>
            <View style={styles.bookingOptions}>
              <TouchableOpacity style={styles.bookingButton}>
                <Text style={styles.bookingText}>A$50 60 min</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookingButton}>
                <Text style={styles.bookingText}>A$83.33 90 min</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  courtsContainer: {
    marginTop: 16,
  },
  court: {
    marginBottom: 16,
  },
  courtTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bookingOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookingButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginRight: 8,
  },
  bookingText: {
    color: '#fff',
  },
});

export default CourtBooking;
