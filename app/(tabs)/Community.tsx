import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from '@expo/vector-icons';
import BlankSpaceFooter from '@/components/BlankSpaceFooter';
import { Stack } from 'expo-router';
import HeaderRight from '@/components/HeaderRight';

const Community = () => {
  const [selectedTab, setSelectedTab] = useState('Feed');
  const [suggestedUsers, setSuggestedUsers] = useState([
    {
      id: 1,
      name: 'Andres Zurita',
      verified: true,
      avatar: require('@/assets/images/background.jpg'),
    },
    {
      id: 2,
      name: 'BMW',
      verified: false,
      avatar: require('@/assets/images/background.jpg'),
    },
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        id: 1,
        name: 'Ale Galán',
        verified: true,
        avatar: require('@/assets/images/avatar.jpg'),
      },
      time: '13 Apr 2023',
      text: 'Recuperando poco a poco de la mejor manera',
      hashtags: ['#AlbaGalán'],
      image: require('@/assets/images/background.jpg'),
      likes: 552,
      comments: 9,
    },
    {
      id: 2,
      user: {
        id: 1,
        name: 'Ale Galán',
        verified: true,
        avatar: require('@/assets/images/avatar.jpg'),
      },
      time: '30 Mar 2023',
      text: '',
      hashtags: [],
      image: require('@/assets/images/background.jpg'),
      likes: 338,
      comments: 4,
    },
    {
      id: 3,
      user: {
        id: 1,
        name: 'Ale Galán',
        verified: true,
        avatar: require('@/assets/images/avatar.jpg'),
      },
      time: '18 Mar 2023',
      text: '',
      hashtags: [],
      image: require('@/assets/images/background.jpg'),
      likes: 0,
      comments: 0,
    },
  ]);

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const renderSuggestedUser = ({ item }) => (
    <View style={styles.suggestedUserContainer}>
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>
          {item.name}
          {item.verified && (
            <FontAwesome5 name="check-circle" size={12} color="#007bff" />
          )}
        </Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderPost = ({ item }) => (
    <View style={styles.postContainer} className='mx-4 my-4 p-4 bg-gray-50'>
      <View style={styles.postHeader}>
        <View style={styles.userAvatar}>
          <Image source={item.user.avatar} style={styles.avatar} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {item.user.name}
            {item.user.verified && (
              <FontAwesome5 name="check-circle" size={12} color="#007bff" />
            )}
          </Text>
          <Text style={styles.postTime}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.postContent}>
        <Text className='text-sm text-gray-900'>{item.text}</Text>
        {item.hashtags.map((hashtag) => (
          <Text key={hashtag} style={styles.hashtag}>
            {hashtag}
          </Text>
        ))}
        <Image source={item.image} style={styles.postImage} />
      </View>
      <View style={styles.postFooter}>
        <View style={styles.postActions}>
          <TouchableOpacity style={styles.postAction}>
            <AntDesign name="heart" size={20} color="#ff0000" />
            <Text className='px-2 text-sm font-bold text-gray-800'>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postAction}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={20}
              color="#111"
            />
            <Text className='px-2 text-sm font-bold text-gray-800'>{item.comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Hi Abhijeet!",
          headerShown: true,
          headerRight: () => <HeaderRight />
        }}
      />
      <View style={styles.tabs} className='py-2 bg-gray-100'>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Feed' && styles.activeTab]}
          onPress={() => handleTabPress('Feed')}
        >
          <Text
            style={[styles.tabText, selectedTab === 'Feed' && styles.activeTabText]}
          >
            Feed
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Groups' && styles.activeTab]}
          onPress={() => handleTabPress('Groups')}
        >
          <Text
            style={[styles.tabText, selectedTab === 'Groups' && styles.activeTabText]}
          >
            Groups
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1">
        <ScrollView className="flex-1">
          {/* <View style={styles.suggestedContainer}>
            <Text style={styles.suggestedTitle}>Suggested for you</Text>
            <FlatList
              horizontal
              data={suggestedUsers}
              renderItem={renderSuggestedUser}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View> */}
          {selectedTab === 'Feed' && (
            <View className='flex-1'>
              <FlatList
                data={posts}
                renderItem={renderPost}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                className='pt-8'
              />
            </View>
          )}
          {selectedTab === 'Groups' && (
            <View className='flex-1 px-4 pt-8'>
              <Text className='flex-1 flex items-center justify-center'>Groups</Text>
            </View>
          )}
          <BlankSpaceFooter />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#181818',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 16,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tabText: {
    width: '100%',
    fontSize: 16,
    color: '#111',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  activeTabText: {
    // fontWeight: 'bold',

  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 16,
  },
  suggestedContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#282828',
  },
  suggestedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  suggestedUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  userInfo: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 16,
    color: '#111',
    fontWeight: 'bold',
  },
  followButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 4,
  },
  followButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  postContainer: {

    borderRadius: 8,
    shadowColor: '#111',
    shadowOpacity: 0.1,
    shadowOffset: { height: 0, width: 0 },
    elevation: 6,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 16,
  },
  postTime: {
    fontSize: 12,
    color: '#888888',
  },
  postContent: {
    marginBottom: 8,
  },
  hashtag: {
    fontSize: 14,
    color: '#007bff',
  },
  postImage: {
    width: '100%',
    height: 200,
    marginTop: 8,
    borderRadius: 8,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  postActionCount: {
    fontSize: 12,
    color: '#ffffff',
    marginLeft: 4,
  },
});

export default Community;
