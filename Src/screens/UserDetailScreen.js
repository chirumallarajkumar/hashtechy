import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import InfoBox from '../components/InfoBox';

const UserDetailScreen = ({route, navigation}) => {
  const {user} = route.params || {};

  if (!user) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>User data is missing!</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: user.picture.large}} style={styles.profileImage} />
      <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
      <InfoBox label="Email:" value={user.email} />
      <InfoBox label="Phone:" value={user.phone} />
      <InfoBox
        label="Location:"
        value={`${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} - ${user.location.postcode}`}
      />
      <InfoBox
        label="Date of Birth:"
        value={new Date(user.dob.date).toLocaleDateString()}
      />
      <InfoBox
        label="Registered:"
        value={new Date(user.registered.date).toLocaleDateString()}
      />
      <InfoBox label="ID:" value={user.id.value} />
      <InfoBox label="Nationality:" value={user.nat} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default UserDetailScreen;
