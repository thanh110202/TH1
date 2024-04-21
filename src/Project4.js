import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Button } from 'react-native';

export default function Project4() {
    const [pressCount, setPressCount] = useState(0);
    return (
        <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>You've pressed the button: {pressCount} time(s)</Text>
            <Button
                title={`Pressed ${pressCount} time(s)`}
                onPress={() => setPressCount(pressCount + 1)}
            />
        </View>
    );
};
