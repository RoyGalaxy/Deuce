import React from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const aspectRatio = 16 / 8;
const imagePadding = 12;
const imageWidth = width - 2 * imagePadding;
const imageHeight = imageWidth / aspectRatio;

const images = [
  { id: 1, source: require('@/assets/images/background.jpg') },
  { id: 2, source: require('@/assets/images/background.jpg') },
  { id: 3, source: require('@/assets/images/background.jpg') },
  // Add more images as needed
];

const HorizontalScrollBanner = () => {
  return (
    <View className={`py-3 bg-white`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={imageWidth + imagePadding} // Adjust for padding between images
        scrollEventThrottle={200}
        pagingEnabled
        contentContainerStyle={styles.container}
        className={`overflow-hidden gap-3`}
      >
        {images.map((image) => (
          <View key={image.id} style={styles.imageContainer} className="rounded-2xl overflow-hidden">
            <Image source={image.source} className="w-full h-full" resizeMode="cover" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: imagePadding,
    flex: 0,
  },
  imageContainer: {
    width: imageWidth,
    height: imageHeight,
  },
});

export default HorizontalScrollBanner;