import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';

export default function Project3() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <CustomButton title="Say hello" onPress={() => alert("hello")} />
            <CustomButton
                title="Say goodbye"
                onPress={() => alert("goodbye")}
                buttonStyle={{ backgroundColor: "#4dc2c2" }}
            />
        </View>
    );
}

const CustomButton = (props) => (
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            backgroundColor: "#ff637c",
            alignSelf: "center",
            padding: 10,
            margin: 10,
            ...props.buttonStyle,
        }}
    >
        <Text style={{ color: "#fff" }}>{props.title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
