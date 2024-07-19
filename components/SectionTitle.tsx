import React from 'react';
import { View, Text } from 'react-native';

const SectionTitle = ({ title }) => {
  return (
    <View className='p-4 bg-white'>
      <Text className='font-bold text-lg'>{title}</Text>
    </View>
  );
};

export default SectionTitle;
