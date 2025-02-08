import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getBookmarks, removeBookmark } from '../utils/useBookmarks';
import { Ionicons } from '@expo/vector-icons';

const BookmarksScreen = ({ navigation }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const savedBookmarks = await getBookmarks();
      setBookmarks(savedBookmarks);
    };

    fetchBookmarks();
  }, []);

  const handleUnbookmark = async (jobId) => {
    await removeBookmark(jobId);
    const updatedBookmarks = await getBookmarks();
    setBookmarks(updatedBookmarks);
  };

  const renderBookmark = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => handleUnbookmark(item.id)}
        >
          <Ionicons name="bookmark-outline" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate("JobDetails", { job: item })}
        >
          <Ionicons name="ios-eye" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={bookmarks}
      keyExtractor={(item) => (item.id ? item.id.toString() : item.title)}
      renderItem={renderBookmark}
      ListEmptyComponent={<Text>No bookmarks found.</Text>}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  location: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default BookmarksScreen;
