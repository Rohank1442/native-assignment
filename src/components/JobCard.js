import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const JobCard = ({ job, onPress, isBookmarked, onBookmark }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.detail}>Location: {job.job_location_slug || "N/A"}</Text>
      <Text style={styles.detail}>Salary: {job.salary_min || "N/A"}</Text>
      <Text style={styles.detail}>Phone: {job.whatsapp_no || "N/A"}</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.bookmarkButton}
          onPress={() => {
            if (!isBookmarked) {
              onBookmark();
            }
          }}
          disabled={isBookmarked}
        >

          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={24}
            color="red"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onPress}
        >
          <Ionicons name="ios-eye" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    fontSize: 16,
    color: "#666",
  },
  salary: {
    fontSize: 14,
    color: "#333",
  },
  phone: {
    fontSize: 14,
    color: "#333",
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  iconButton: {
    padding: 5,
  },
});

export default JobCard;
