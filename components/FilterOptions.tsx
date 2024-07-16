import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const HorizontalFilterOptions = () => {
  // Replace with actual filter options
  const filterOptions = ['Sport & Availability', 'Favorites', 'Offers', 'Others'];

  return (
    <View className='bg-white'>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
      >
        {filterOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.filterOption} className='bg-white'>
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    maxHeight: 56,
  },
  filterOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default HorizontalFilterOptions