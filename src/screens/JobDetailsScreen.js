import React from "react";
import { View, Text, StyleSheet } from "react-native";

const JobDetailsScreen = ({ route }) => {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.detail}>What we do: {job.company_name || "N/A"}</Text>
      <Text style={styles.detail}>Job Role: {job.job_role || "N/A"}</Text>
      <Text style={styles.detail}>Job Type: {job.job_hours || "N/A"}</Text>
      <Text style={styles.detail}>About us: {job.other_details || "N/A"}</Text>
      <Text style={styles.detail}>Job Category: {job.job_category || "N/A"}</Text>
      <Text style={styles.description}>
        {job.description || "No additional description available."}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3f4f6",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 20,
    textAlign: "center",
    textTransform: "capitalize",
  },
  detail: {
    fontSize: 16,
    color: "#334155",
    marginBottom: 12,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  description: {
    fontSize: 16,
    color: "#475569",
    marginTop: 25,
    lineHeight: 26,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  section: {
    marginBottom: 20,
  },
});

export default JobDetailsScreen;