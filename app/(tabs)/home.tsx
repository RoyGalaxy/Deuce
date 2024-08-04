import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import BlankSpaceFooter from '@/components/BlankSpaceFooter';
import SectionTitle from '@/components/SectionTitle';
import Card from "@/components/Card";
import { Stack, useRouter } from 'expo-router';
import HeaderRight from '@/components/HeaderRight';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {
  const router = useRouter();
  const [name, setName] = useState("")

  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const user = JSON.parse(value);
        setName(user.name.split(' ')[0])
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData("@user");
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: `Hi ${name}!`,
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
