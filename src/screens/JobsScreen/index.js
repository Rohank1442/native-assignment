import React, { useState, useCallback } from "react";
import { View, ToastAndroid } from "react-native";
import axios from "axios";
import JobCard from "../../components/JobCard";
import { getBookmarks, saveBookmark } from "../../utils/useBookmarks";
import ScreenLoader from "../../components/Loaders/ScreenLoader";
import PaginatedFlatList from "../../components/PaginatedFlatList";
import NotFound from "./NotFound";
import { useFocusEffect } from "@react-navigation/native";

export default function JobsScreen({ navigation }) {
  const PAGE_LIMIT = 10;
  const [loading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  const fetchJobs = async (pg = 1, limit) => {
    try {
      const response = await axios.get('https://testapi.getlokalapp.com/common/jobs', {
        params: { page: pg, limit },
      });
      setJobs(prev => [...prev, ...response.data.results]);
      return {
        page: pg,
        totalPages: response.data.results.length ? pg + 1: pg,
      };
    } catch (err) {
      console.log(err);
      ToastAndroid.show(
        ((err).response?.data).message ?? err,
        ToastAndroid.LONG,
      );
    }
  };

  const handleBookmark = async (job) => {
    await saveBookmark(job);
    setBookmarkedJobs((prev) => [...prev, job]);
  };

  useFocusEffect(useCallback(() => {
    const fetchBookmarks = async () => {
      const savedBookmarks = await getBookmarks();
      setBookmarkedJobs(savedBookmarks);
    };

    fetchBookmarks();
  }, []));

  return loading ? (
    <ScreenLoader />
  ) : (
    <View style={{ flex: 1 }}>
      <PaginatedFlatList
        data={jobs}
        limit={PAGE_LIMIT}
        handleClearDataOnRefresh={() => setJobs([])}
        loadData={fetchJobs}
        ListEmptyComponent={<NotFound />}
        renderItem={({ item, index }) => (
          <View style={{
            marginHorizontal: 8,
            marginVertical: 2
          }}>
            <JobCard
              key={index}
              job={item}
              onPress={() => navigation.navigate("JobDetails", { job: item })}
              isBookmarked={bookmarkedJobs.some((job) => job.id === item.id)}
              onBookmark={() => handleBookmark(item)}
              removeBookMark={() => remove}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{height: 12}} />}
        ListHeaderComponent={() => <View style={{height: 6}} />}
        ListFooterComponent={() => <View style={{height: 6}} />}
      />
    </View>
  );
}
