import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";

export default function JobsScreen({ navigation }) {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      setJobs((prev) => [...prev, ...response.data.data]);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {jobs.length === 0 && !loading ? (
        <Text>No jobs available. Pull down to refresh.</Text>
      ) : (
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("JobDetails", { job: item })}>
              <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
                <Text>{item.title}</Text>
                <Text>{item.location}</Text>
                <Text>{item.salary}</Text>
                <Text>{item.phone}</Text>
              </View>
            </TouchableOpacity>
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator /> : null}
        />
      )}
    </View>
  );  
}
