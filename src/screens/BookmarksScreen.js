import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { getBookmarks } from '../utils/useBookmarks';

const BookmarksScreen = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const savedBookmarks = await getBookmarks();
      setBookmarks(savedBookmarks);
    };

    fetchBookmarks();
  }, []);

  const renderBookmark = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </View>
  );

  return (
    <FlatList
      data={bookmarks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderBookmark}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
    color: '#666',
  },
});

export default BookmarksScreen;
