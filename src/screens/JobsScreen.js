import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import axios from "axios";
import JobCard from "../components/JobCard";
import { saveBookmark } from "../utils/useBookmarks";

export default function JobsScreen({ navigation }) {
  const [jobs, setJobs] = useState([]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, [page]);

  useEffect(() => {

    const fetchBookmarks = async () => {
      const savedBookmarks = await getBookmarks();
      setBookmarkedJobs(savedBookmarks);
    };

    fetchBookmarks();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://testapi.getlokalapp.com/common/jobs?page=${page}`
      );
      const jobResults = response.data.results || [];
      setJobs((prev) => [...prev, ...jobResults]);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleBookmark = async (job) => {
    await saveBookmark(job);
    setBookmarkedJobs((prev) => [...prev, job]);
  };

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
      {jobs.length === 0 && !loading ? (
        <Text>No jobs available. Pull down to refresh.</Text>
      ) : (
        <FlatList
          data={jobs}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          renderItem={({ item }) => (
            <JobCard
              job={item}
              onPress={() => navigation.navigate("JobDetails", { job: item })}
              isBookmarked={bookmarkedJobs.some((job) => job.id === item.id)}
              onBookmark={() => handleBookmark(item)}
            />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
        />
      )}
    </View>
  );
}
