import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';// import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({ image, title, description, width, icon, onPress }) => {
  return (
    <View style={[styles.container, { width: width }]} className={`bg-white rounded-lg overflow-hidden flex-1 m-2 w-[${width}px]`}>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <Image source={image} className='w-full h-[100px]' resizeMode="cover" />
        <View className='p-3'>

          {icon != undefined && (
            <View className='absolute bg-emerald-500 -top-5 left-3 p-2 rounded-lg'>
              {icon}
            </View>
          )}
          <Text className='font-semibold mb-2 mt-4 text-base'>{title}</Text>
          <Text className='text-gray-500 text-sm'>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#111",
    shadowOpacity: 0.1,
    shadowOffset: { height: -2, width: 3 },
    elevation: 3,
  }
});

export default Card;
