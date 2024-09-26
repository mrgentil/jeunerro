import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function EgliseScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Qui sommes-nous?</Text>

            {/* Description de l'église */}
            <Text style={styles.description}>
                L'Église La Compassion est un lieu où l'amour, la sainteté, la puissance et l'équilibre sont prêchés avec ferveur.
                Nous croyons en la transformation des vies par la parole de Dieu et offrons des moments de partage et de communion lors
                de nos cultes hebdomadaires. Rejoignez-nous pour découvrir une atmosphère de foi, de guérison et de renouveau.
            </Text>

            <Text style={styles.sectionTitle}>NOS PROGRAMMES</Text>

            {/* Dimanche */}
            <View style={styles.programCard}>
                <View style={styles.programText}>
                    <Text style={styles.programDay}>Dimanche</Text>
                    <Text style={styles.programDetails}>
                        1er Culte de 7h00 à 9h00{"\n"}
                        2ème Culte de 10h00 à 12h00{" "}
                        <Text style={styles.liveText}>(diffusé en Live 🔴)</Text>{"\n"}
                        3ème Culte de 13h00 à 15h00
                    </Text>
                </View>
                <Image
                    source={require('../../assets/images/IMG_8305.jpg')} // Remplace par l'image appropriée
                    style={styles.programImage}
                />
            </View>

            {/* Mercredi */}
            <View style={styles.programCard}>
                <View style={styles.programText}>
                    <Text style={styles.programDay}>Mercredi</Text>
                    <Text style={styles.programDetails}>
                        Mercredi "Soirées de Gloire"{"\n"}De 17h à 19h30
                    </Text>
                </View>
                <Image
                    source={require('../../assets/images/IMG_8305.jpg')} // Remplace par l'image appropriée
                    style={styles.programImage}
                />
            </View>

            {/* Vendredi */}
            <View style={styles.programCard}>
                <View style={styles.programText}>
                    <Text style={styles.programDay}>Vendredi</Text>
                    <Text style={styles.programDetails}>
                        « Intercession et Étude Biblique »{"\n"}De 17h à 19h30
                    </Text>
                </View>
                <Image
                    source={require('../../assets/images/IMG_8305.jpg')} // Remplace par l'image appropriée
                    style={styles.programImage}
                />
            </View>

            <Text style={styles.sectionTitle}>NOTRE ADRESSE & NOS CONTACTS</Text>
            <View style={styles.addressCard}>
                <Text style={styles.addressText}>
                    Limete 2ème rue Q.industriel, N4.{"\n"}Kinshasa RDC.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginBottom: 16,
        lineHeight: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 12,
    },
    programCard: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        alignItems: 'center',
        elevation: 2,
    },
    programText: {
        flex: 1,
    },
    programDay: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    programDetails: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
    liveText: {
        color: 'red',
        fontWeight: 'bold',
    },
    programImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 16,
    },
    addressCard: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 16,
        marginTop: 16,
        elevation: 2,
    },
    addressText: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
});
