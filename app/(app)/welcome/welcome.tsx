import {Pressable, StyleSheet, TextInput, View} from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme.ts";
import { useState } from "react";

const colors = useColorScheme();
const [text, setText] = useState<string>("");

export default function Welcome() {
    return (
        <View style={styles.background}>
            Welcome! What is your name?
            <TextInput
                placeholder="Enter your name..."
                style={styles.input}
                value={text}
                onChangeText={setText}
            />
            {/*TODO: add button here later*/}
            <Pressable />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors["background"],
        tintColor: colors["tint"],
        color: colors["text"],

    },
    input: {
        color: colors["text"],
        fontSize: 25,
    }

})