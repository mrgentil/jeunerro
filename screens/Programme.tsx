import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Programme = () => {
    return (
        <View style={styles.container}>
            <Text>Programme</Text>
            {/* Ajoutez ici le contenu de votre écran Programme */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Programme;