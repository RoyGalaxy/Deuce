// import { StatusBar } from "expo-status-bar"
// import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View, ScrollView } from "react-native"
import { Stack } from "expo-router"
import SearchBar from "@/components/SearchBar"
import HorizontalScrollBanner from "@/components/HorizntalScrollBanner";
import TurfListing from "@/components/TurfListing";
import HorizontalFilterOptions from "@/components/FilterOptions";
import HeaderRight from "@/components/HeaderRight";

const home = () => {

  return (
      <View className="flex-1 bg-gray-100">
        <Stack.Screen
          options={{
            headerShown: true,
            headerRight: () => <HeaderRight />
          }}
        />
        <ScrollView stickyHeaderIndices={[2]} className="">
          <SearchBar />
          <HorizontalScrollBanner />
          <HorizontalFilterOptions />
          <TurfListing />
        </ScrollView>
      </View>
  )
}

export default home