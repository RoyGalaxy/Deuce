import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DateSelector = ({sports ,selectedSport ,sportSelector}) => {
  
  return (
    <View style={styles.container}>
      {sports.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.sportItem,
            selectedSport === `${item}` && styles.selectedSport,
          ]}
          className="border border-gray-200"
          onPress={() => {sportSelector(item)}}
        >
          <Text className={`p-1 px-2 font-bold ${selectedSport == item ? 'text-gray-50' : 'text-gray-900'}`}>
            {item.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    paddingHorizontal: 2,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  sportItem: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  selectedSport: {
    backgroundColor: 'rgb(74 222 128)',
  },
  selectedText: {
    color: '#fff',
  },
});

export default DateSelector;
