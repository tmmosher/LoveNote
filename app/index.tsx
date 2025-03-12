import { Text, TextInput, TouchableOpacity, View} from "react-native";
import { useState } from "react";
import { getStyles } from "@/hooks/getStyles.ts";

const saveName = (text : string) => {
    //TODO: implement async storage saving.
    // Could have been put in this task but I didnt for some reason
}

export default function Index() {
    const [text, setText] = useState<string>("");
    const styles = getStyles();
    //TODO: add a border around the text input
    return (
        <View style={styles.background}>
            <Text style={styles.text}>
                Welcome! What is your name?
            </Text>
            <TextInput
                placeholder="Enter your name..."
                style={styles.input}
                maxLength={32}
                value={text}
                onChangeText={newText => setText(newText)}
            >
            </TextInput>
            <TouchableOpacity
                style={styles.button}
                onPress={() => saveName(text)}
            >
                <Text style={styles.text}>
                    Save
                </Text>
            </TouchableOpacity>
        </View>
    )
}