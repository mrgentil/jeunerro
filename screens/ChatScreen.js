import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const ChatScreen = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]); // Exemple, remplace avec Firebase plus tard

    const sendMessage = () => {
        // Logique pour envoyer un message (Firebase Firestore par exemple)
        setMessages([...messages, { id: Date.now(), text: message }]);
        setMessage('');
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={messages}
                renderItem={({ item }) => <Text>{item.text}</Text>}
                keyExtractor={item => item.id.toString()}
            />
            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Écrire un message"
            />
            <Button title="Envoyer" onPress={sendMessage} />
        </View>
    );
};

export default ChatScreen;
