import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { saveBookmark } from './useBookmarks';

const JobCard = ({ job }) => {
    const handleBookmark = async () => {
        const existingBookmarks = await getBookmarks();
        if (existingBookmarks.some((bookmark) => bookmark.id === job.id)) {
          alert('This job is already bookmarked!');
          return;
        }
        await saveBookmark(job);
        alert('Job bookmarked!');
      };      

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.location}>{job.location}</Text>
      <Button title="Bookmark" onPress={handleBookmark} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
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

export default JobCard;
