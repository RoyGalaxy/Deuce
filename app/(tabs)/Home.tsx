import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import BlankSpaceFooter from '@/components/BlankSpaceFooter';
import SectionTitle from '@/components/SectionTitle';
import Card from "@/components/Card";
import { Stack, useRouter } from 'expo-router';
import HeaderRight from '@/components/HeaderRight';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const HomeScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Hi Abhijeet!",
          headerShown: true,
          headerRight: () => <HeaderRight />,
          }}
      />
      <ScrollView>
        <SectionTitle title="Find your perfect match" />
        <View className='flex flex-row flex-wrap justify-around px-4'>
          <Card
            image={require("@/assets/images/background.jpg")}
            title="Book a court"
            description="If you already know who you are playing with"
            icon={<Ionicons name="search-outline" size={24} color="white" />}
            width={undefined}
            onPress={() => { router.push("/book") }}
          />
          <Card
            image={require("@/assets/images/background.jpg")}
            title="Competitions"
            description="Look For Nearby Competitions"
            icon={<Feather name="shield" size={24} color="white" />}
            width={undefined}
            onPress={() => { }}
          />
        </View>
        <SectionTitle title="Your clubs" />
        <View className='px-4'>
          <Card
            image={require("@/assets/images/background.jpg")}
            title="Find clubs around you"
            description="Activate location"
            icon={<Ionicons name="location-outline" size={24} color="white" />}
            width={160}
            onPress={() => { }}
          />
        </View>
        <BlankSpaceFooter />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
