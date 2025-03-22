import { Text, TextInput, TouchableOpacity, StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { getStyles } from "@/hooks/getStyles.ts";

const saveName = async (text : string) => {
    try {
        await AsyncStorage.setItem("name", text);
    } catch (error) {
        alert({
            title: "Error",
            message: "Failed to save name. Please check permissions.",
            options: {
                cancelable: true
            }
        })
    }
}

export default function Index({navigation}) {
    const [text, setText] = useState<string>("");
    const styles = getStyles();
    return (
        <View style={styles.background}>
            <Text style={[styles.text, localStyles.titleText]}>
                Let's get to know you...
            </Text>
            <Text style={[styles.text, localStyles.welcomeText]}>
                What is your name?
            </Text>
            <TextInput
                placeholder="Enter your name..."
                placeholderTextColor="#cfc9c6"
                style={styles.input}
                maxLength={32}
                value={text}
                onChangeText={newText => setText(newText)}
            />
            <TouchableOpacity
                style={[styles.wideButton, localStyles.saveButton]}
                onPress={() => saveName(text)}
            >
                <Text style={styles.text}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const localStyles = StyleSheet.create({
    titleText: {
      position: "relative",
      fontSize: 35,
      marginBottom: 20,
      shadowOffset: { width: -1, height: 1 },
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowRadius: 10
    },
    welcomeText: {
        position: "relative",
        fontSize: 30,
        marginBottom: 40,
        shadowOffset: { width: -1, height: 1 },
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowRadius: 10
    },
    saveButton: {
        position: "relative",
        marginTop: 40,
    }
})