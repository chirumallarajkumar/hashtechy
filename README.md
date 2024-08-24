# User Management App

## Overview

This project is a mobile application built using React Native CLI, designed for managing users. It features user list retrieval with infinite scrolling, pull-to-refresh functionality, and detailed views for individual users. The app uses `react-navigation` for navigation and Redux Toolkit with `redux-thunk` for state management and handling asynchronous operations.

## Features

- User List with Infinite Scrolling: Automatically loads more users as the user scrolls down the list.
- Pull-to-Refresh: Allows refreshing the user list to load the latest users.
- User Details View: Displays detailed information about a selected user.
- Error Handling: Provides feedback to users when API calls fail or encounter errors.

## Project Structure

```
.
├── App.js
├── navigation
│   └── AppNavigator.js
├── screens
│   ├── UserDetailScreen.js
│   └── UserListScreen.js
├── components
│   ├── InfoBox.js
│   └── ProfileCard.js
├── redux
│   ├── store.js
│   ├── usersSlice.js
│   └── userService.js
└── README.md
```

### Explanation of Structure

- App.js: The entry point of the application. It sets up the Redux provider and initializes the main navigator.
- AppNavigator.js: Handles navigation between screens using `react-navigation`.
- UserListScreen.js: Displays the list of users, implements infinite scrolling, and provides pull-to-refresh functionality.
- UserDetailScreen.js: Displays detailed information about the selected user.
- ProfileCard.js: A reusable component that displays a user's profile information in a card format.
- InfoBox.js: A reusable component for displaying labeled information (like email, phone, etc.) in a box format.
- usersSlice.js: Manages user data in Redux, handles asynchronous API calls for fetching user data, and updates the state accordingly.
- store.js: Configures the Redux store and integrates the users slice.
- userService.js: Contains functions to interact with the API, specifically to fetch user data.

## Setup Instructions

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or Yarn (>= 1.x)
- React Native CLI
- Android Studio or Xcode for running on a physical device or emulator

### Installation

1. Clone the Repository:

   ```bash
   git clone https://github.com/your-username/MyNewProject.git
   cd MyNewProject
   ```

2. Install Dependencies:

   Using npm:
   ```bash
   npm install
   ```

   Or using Yarn:
   ```bash
   yarn install
   ```

3. Run the Application:

   For Android:
   ```bash
   npx react-native run-android
   ```

   For iOS:
   ```bash
   npx react-native run-ios
   ```

### Running on a Physical Device

1. Connect your Android/iOS device to your computer.
2. Ensure USB debugging is enabled (for Android).
3. Run the app with `npx react-native run-android` or `npx react-native run-ios`.

### State Management

- Redux Toolkit: Used for managing the global state of the application. It simplifies the setup and usage of Redux, reducing boilerplate code.
- redux-thunk: Chosen to handle asynchronous actions such as API requests. It allows dispatching functions instead of actions, providing direct access to the Redux store.

### Navigation

- react-navigation: Used to navigate between screens. It’s a popular library in the React Native ecosystem, offering a robust solution for navigation.

### API Integration

- Random User API: The app fetches user data from `https://randomuser.me/api/`. The pagination is handled by passing the `page` parameter, with 10 results per page.

### Error Handling

- Error Feedback: If the API request fails or any other error occurs, the app displays an appropriate error message to inform the user.

### Component Reusability

- Components like `ProfileCard` and `InfoBox` are designed to be reusable, improving maintainability and scalability of the code.

## Error Handling

- Errors during API calls are captured, and error messages are displayed to the user in the `UserListScreen`. This ensures users are informed of any issues in data retrieval.

