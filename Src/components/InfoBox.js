import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoBox = ({ label, value }) => {
    return (
        <View style={styles.infoContainer}>
            <View style={styles.infoLabelContainer}>
                <Text style={styles.infoLabel}>{label}</Text>
            </View>
            <Text style={styles.infoText}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // For Android shadow effect
    },
    infoLabelContainer: {
        width: 120,
        justifyContent: 'center',
    },
    infoLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
    },
    infoText: {
        fontSize: 16,
        color: '#333',
        flexShrink: 1,
    },
});

export default InfoBox;
