import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobDetailsScreen = ({ route }) => {
  const { job } = route.params; // Access the job details passed via navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.detail}>Location: {job.location}</Text>
      <Text style={styles.detail}>Salary: {job.salary}</Text>
      <Text style={styles.detail}>Phone: {job.phone}</Text>
      <Text style={styles.description}>{job.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 15,
    lineHeight: 22,
  },
});

export default JobDetailsScreen;
