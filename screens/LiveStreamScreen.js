import React from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';

const LiveStreamScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Video
                source={{ uri: 'url_de_ton_live' }}
                style={{ width: '100%', height: 200 }}
                controls={true}
            />
            <Text>Commentaires en temps réel ici</Text>
            {/* Ajoute un champ de commentaire et la logique */}
        </View>
    );
};

export default LiveStreamScreen;
