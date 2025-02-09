import React, { useCallback, useState } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Alert, TouchableNativeFeedback } from 'react-native';
import { getBookmarks, removeBookmark } from "../../utils/useBookmarks";
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import NotFound from './NotFound';

const BookmarksScreen = ({ navigation }) => {
    const [bookmarks, setBookmarks] = useState([]);

    useFocusEffect(useCallback(() => {
        const fetchBookmarks = async () => {
            const savedBookmarks = await getBookmarks();
            setBookmarks(savedBookmarks);
        };

        fetchBookmarks();
    }, []));

    const handleUnbookmark = async (jobId) => {
        await removeBookmark(jobId);
        const updatedBookmarks = await getBookmarks();
        setBookmarks(updatedBookmarks);
    };

    const renderBookmark = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={(() => navigation.navigate("JobDetails", { job: item }))}>
            <View style={{ flexDirection: "row", columnGap: 10 }}>
                <Text style={styles.title}>{item.title ?? "N/A"}</Text>
                <TouchableNativeFeedback>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => handleUnbookmark(item.id)}
                    >
                        <Ionicons name="bookmark" size={24} color="red" />
                    </TouchableOpacity>
                </TouchableNativeFeedback>
            </View>
            <View>
                <Text style={styles.detail}>Location: {item.job_location_slug || "N/A"}</Text>
                <Text style={styles.detail}>Salary: {item.salary_min || "N/A"}</Text>
                <Text style={styles.detail}>Phone: {item.whatsapp_no || "N/A"}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={bookmarks}
                keyExtractor={(item, index) => index}
                renderItem={renderBookmark}
                ListEmptyComponent={<NotFound />}
                contentContainerStyle={{ flexGrow: bookmarks.length > 0 ? 0 : 1 }}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                ListHeaderComponent={() => <View style={{ height: 10 }} />}
                ListFooterComponent={() => <View style={{ height: 6 }} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        flexDirection: "column",
        rowGap: 10,
        marginHorizontal: 8,
        marginVertical: 2
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
    },
});

export default BookmarksScreen;
