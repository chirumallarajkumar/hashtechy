import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileCard = ({ name, gender, profileImage, email, location,navigatingToUserDetails }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={navigatingToUserDetails}>
            <Image source={{ uri: profileImage }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.gender}>{gender}</Text>
                <Text style={styles.email}>{email}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    infoContainer: {
        marginLeft: 15,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212121',
    },
    gender: {
        fontSize: 14,
        color: '#9E9E9E',
    },
    email: {
        fontSize: 14,
        color: '#9E9E9E',
    },
    location: {
        fontSize: 14,
        color: '#9E9E9E',
    },
});

export default ProfileCard;
