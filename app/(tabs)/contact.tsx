import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ContactScreen() {
    const handleSubmit = () => {
        // Logique d'envoi du formulaire ou autre
        console.log('Form submitted');
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Ionicons size={310} name="mail" style={styles.headerImage} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Contact</ThemedText>
            </ThemedView>
            <ThemedText>Ecrivez-nous</ThemedText>

            <View style={styles.contactContainer}>
                <ThemedText style={styles.contactInfo}>🏠 Jeunes de la Race Royale</ThemedText>
                <ThemedText style={styles.contactInfo}>📍 Adresse: 12 Rue Artisanale, Kinshasa/Delvaux, RDC</ThemedText>
                {/*<ThemedText style={styles.contactInfo}>✉️ Email: contact@jeunerr.com</ThemedText>*/}
                <ThemedText style={styles.contactInfo}>📞 Téléphone: +243 812 380 589 </ThemedText>
            </View>

            <ThemedView style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Votre nom"
                    placeholderTextColor="#808080"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Votre téléphone"
                    placeholderTextColor="#808080"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Votre message"
                    placeholderTextColor="#808080"
                    multiline
                    numberOfLines={4}
                />
                <Button title="Envoyer" onPress={handleSubmit} />
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        paddingVertical: 16,
    },
    contactContainer: {
        padding: 16,
        backgroundColor: '#444444', // Fond sombre
        borderRadius: 8,
        marginVertical: 16,
        elevation: 2, // Ajoute une ombre pour un effet de profondeur
    },
    contactInfo: {
        marginBottom: 8,
        fontSize: 16,
        lineHeight: 24, // Améliore la lisibilité
        color: '#FFFFFF', // Texte en blanc pour contraster avec le fond sombre
    },
    formContainer: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
});
