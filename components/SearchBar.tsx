import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ onSearch, searchValue, setSearchValue }) => {
  return (
    <View className='bg-white px-4 py-4'>
        <View style={styles.container} className='bg-gray-200'>
          <TextInput
            style={styles.input}
            placeholder="Search For Venues"
            value={searchValue}
            onChangeText={setSearchValue}
          />
          <TouchableOpacity style={styles.iconContainer} onPress={onSearch}>
            <Ionicons name="search-outline" size={20} color="rgb(107,114,128)" />
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
  },
  input: {
    fontSize: 18,
    flex: 1,
    height: 60,
    paddingLeft: 16,
  },
  iconContainer: {
    paddingRight: 24,
  },
});

export default SearchBar;
