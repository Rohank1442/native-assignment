# Job Finder App

Job Finder App is a React Native application that allows users to browse job listings, bookmark jobs, and view job details. Bookmarked jobs are stored locally for offline viewing.

## How to Run

1. Clone the repository to your local machine.
2. Navigate to the project directory:
```bash
  cd JobApp
```
Install the dependencies:
```bash
  npm install
```
Start the application:
```bash
  npm start
```
Follow the instructions in the terminal to run the app on an emulator or physical device.
Overview of Components
1. JobsScreen: Displays a list of jobs fetched from an API. Users can bookmark jobs or view their details.
2. BookmarksScreen: Displays all bookmarked jobs. Users can remove bookmarks or view job details.
3. JobCard: A reusable component to display individual job details with options to bookmark or view more details.
4. Storage: Bookmarked jobs are stored using AsyncStorage, enabling offline access to saved jobs.
