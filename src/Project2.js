import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Project2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Hello Word 1" onPress={() => alert("Hello")} />
            <TouchableOpacity onPress={() => alert("Hello 2!")} style={MyStyle.button}>
                <Text style={MyStyle.text}>Button</Text>
            </TouchableOpacity>
        </View>
    );
}

const MyStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        backgroundColor: "blue",
        marginTop: 10,
        alignItems: "center",
        padding: 10
    },
    text: {
        color: "white",
        fontSize: 18
    }
});
