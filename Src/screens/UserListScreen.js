import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Button, 
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsersAsync, clearUsers} from '../redux/usersSlice';
import ProfileCard from '../components/ProfileCard';

const UserListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users); // Get users from state
  const loading = useSelector(state => state.users.loading); // Get loading state from state
  const error = useSelector(state => state.users.error); // Get error state from state

  // Fetch users on component mount
  useEffect(() => {
    dispatch(fetchUsersAsync({page: 1, limit: 10}));
  }, [dispatch]);

  // Load more users when end of list is reached
  const loadMoreUsers = () => {
    dispatch(fetchUsersAsync({page: users.length / 10 + 1, limit: 10}));
  };

  // Refresh users list by clearing existing data and fetching new data
  const refreshUsers = () => {
    dispatch(clearUsers()); // Clear current data
    dispatch(fetchUsersAsync({page: 1, limit: 10, refresh: true}));
  };

  // Render individual user profile card
  const renderItem = ({item}) => (
    <ProfileCard
      navigatingToUserDetails={() =>
        navigation.navigate('UserDetail', {user: item})
      }
      name={`${item.name.first} ${item.name.last}`}
      gender={item.gender}
      profileImage={item.picture.large}
      email={item.email}
      location={`${item.location.city}, ${item.location.country}`}
    />
  );

  // Display error message with retry button if there's an error
  if (error) {
    return (
      <View style={styles.errorContainer}>
  <View style={styles.errorMessageContainer}>
    <Text style={styles.errorText}>Oops! Something went wrong.</Text>
    <Text style={styles.errorDetailText}>{error}</Text>
  </View>
  <Button 
    title="Retry" 
    onPress={refreshUsers} 
    color="#007BFF" // Button color
  />
</View>

    );
  }

  // Show a message if no users are found and not loading
  if (!loading && users.length === 0) {
    return <Text style={styles.emptyStateText}>No users found.</Text>;
  }

  // Main render with a FlatList of users and refresh control
  return (
    <View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.login.uuid}
        onEndReached={loadMoreUsers} // Load more users when scrolled to end
        onEndReachedThreshold={0.5} // Trigger load more when halfway through the list
        initialNumToRender={10} // Initial number of items to render
        maxToRenderPerBatch={10} // Maximum number of items to render per batch
        windowSize={5} // Number of items to keep in memory
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refreshUsers} /> // Pull-to-refresh control
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8D7DA', // Light red background
    borderRadius: 10, // Rounded corners
    margin: 20, // Margin around the container
  },
  errorMessageContainer: {
    marginBottom: 20, // Space between error message and button
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#721C24', // Dark red color for the error text
    marginBottom: 5, // Space between error message and detailed error
  },
  errorDetailText: {
    fontSize: 16,
    color: '#721C24', // Same dark red color for consistency
    textAlign: 'center',
    marginBottom: 15, // Space before the button
  },
  emptyStateText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#666',
  },
});

export default UserListScreen;
