import { useColorScheme as useColorScheme } from "./useColorScheme";
import { StyleSheet } from "react-native";

export const getStyles = () => {
    const color = useColorScheme();
    return StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: color["background"],
            tintColor: color["tint"],
            color: color["text"],
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            color: color["text"],
            fontSize: 25,
        },
        input: {
            color: color["secondary"],
            fontSize: 20,
        },
        button: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: color["interactive"],
            borderRadius: 10,
            padding: 10,
            minWidth: 100,
            minHeight: 50,
            maxWidth: 100,
            maxHeight: 50,
        }
    })
}