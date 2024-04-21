import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontWeight: "bold",
        fontSize: 18,
    },
    input: {
        marginTop: 10,
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 10,
        borderRadius: 5,
    }
});

export default () => {
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.label}>What's your name?</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên của bạn"
                placeholderTextColor="#808080" // Sửa màu chữ của placeholder
                onChangeText={(text) => setName(text)}
                value={name}
                autoCorrect={false} // Tắt chức năng tự động sửa chữa
            />
            <Button
                title="Say Hi"
                onPress={() => {
                    alert(`Hello, ${name}!`); 
                }}
            />
        </View>
    );
};
