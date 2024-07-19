import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const PriorityAlert = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Priority alerts</Text>
      <Text>Configure your alert in one click with your predefined filters</Text>
      <View style={styles.switchContainer}>
        <Switch
          value={isEnabled}
          onValueChange={setIsEnabled}
        />
        <Text style={styles.manageText}>Manage Alerts</Text>
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
  manageText: {
    color: '#007BFF',
  },
});

export default PriorityAlert;
