import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bienvenue sur l'application de l'Église</Text>
            <Link href="/lives">
                <Button title="Suivre le Live" />
            </Link>
            <Link href="/program">
                <Button title="Voir le Programme" />
            </Link>
            <Link href="/chat">
                <Button title="Chat" />
            </Link>
            <Link href="/sermons">
                <Button title="Voir les Prédications" />
            </Link>
        </View>
    );
}
