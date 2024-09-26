import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons'; // Pour les icônes
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const sections = [
        {
            title: "SORTIE PICASSO BEACH 2023",
            data: [
                { id: '1', title: 'LES ANCIENS SENTIERS DU RÉVEIL', image: require('../../assets/images/church-background.png') },
                { id: '2', title: 'PAS DE RÉVEIL SANS LE SAINT ESPRIT', image: require('../../assets/images/beach2.jpg') },
                { id: '3', title: 'PAS DE RÉVEIL SANS LE SAINT ESPRIT', image: require('../../assets/images/image1.jpg') },
                { id: '4', title: 'PAS DE RÉVEIL SANS LE SAINT ESPRIT', image: require('../../assets/images/image2.jpg') },
                { id: '5', title: 'PAS DE RÉVEIL SANS LE SAINT ESPRIT', image: require('../../assets/images/image3.jpg') },
            ],
        },
        {
            title: "20 MATINS 2024",
            data: [
                { id: '6', title: 'ABANDONNE LA PROSTITUÉE', image: require('../../assets/images/beach3.jpg') },
                { id: '7', title: 'LA PERTE DU PREMIER AMOUR', image: require('../../assets/images/beach4.jpg') },
            ],
        },
    ];
    const renderSection = (section) => (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Details', { itemId: item.id, itemTitle: item.title, itemImage: item.image })}
                    >
                        <Image source={item.image} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Carrousel */}
                <Swiper style={styles.wrapper} showsPagination={true} autoplay={true}>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/images/IMG_8206.jpg')} style={styles.bannerImage} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/images/IMG_8287.jpg')} style={styles.bannerImage} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/images/IMG_8262.jpg')} style={styles.bannerImage} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/images/IMG_8305.jpg')} style={styles.bannerImage} />
                    </View>
                </Swiper>
                {/* Sections */}
                {sections.map(renderSection)}
            </ScrollView>
        </View>
    );
};

const DetailsScreen = ({ route }) => {
    const { itemId, itemTitle, itemImage } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{itemTitle}</Text>
            <Image source={itemImage} style={styles.image} />
            <Text style={styles.description}>Description de l'élément</Text>
        </View>
    );
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    wrapper: {
        height: 250,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
    },
    sectionContainer: {
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        width: 200,
        marginRight: 10,
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 8,
    },
    cardTitle: {
        color: '#fff',
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#111',
        borderTopColor: '#333',
        borderTopWidth: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    description: {
        fontSize: 16,
        color: '#fff',
    },
});

export default App;