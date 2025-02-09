import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, TouchableNativeFeedback } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const JobCard = ({ job, onPress, isBookmarked, onBookmark }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={{
        flexDirection: "row",
        columnGap: 10
      }}>
        <Text style={styles.title}>{job.title??"N/A"}</Text>
        <TouchableNativeFeedback>
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
        </TouchableNativeFeedback>
      </View>
      <View>
        <Text style={styles.detail}>Location: {job.job_location_slug || "N/A"}</Text>
        <Text style={styles.detail}>Salary: {job.salary_min || "N/A"}</Text>
        <Text style={styles.detail}>Phone: {job.whatsapp_no || "N/A"}</Text>
      </View>
    </TouchableOpacity>
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
    flexDirection: "column",
    rowGap: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1
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
