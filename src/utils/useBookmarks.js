import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveBookmark = async (job) => {
  try {
    const bookmarks = await AsyncStorage.getItem('bookmarks');
    const parsedBookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    const updatedBookmarks = [...parsedBookmarks, job];
    await AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  } catch (error) {
    console.error('Error saving bookmark:', error);
  }
};

export const getBookmarks = async () => {
  try {
    const bookmarks = await AsyncStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
  } catch (error) {
    console.error('Error retrieving bookmarks:', error);
    return [];
  }
};

export const removeBookmark = async (jobId) => {
  try {
    const bookmarks = await AsyncStorage.getItem('bookmarks');
    const parsedBookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    const updatedBookmarks = parsedBookmarks.filter((job) => job.id !== jobId);
    await AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  } catch (error) {
    console.error('Error removing bookmark:', error);
  }
};
