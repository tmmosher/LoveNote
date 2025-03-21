import { useColorScheme as useColorScheme } from "./useColorScheme";
import { Dimensions, StyleSheet } from "react-native";
import {useEffect, useState} from "react";

export const getStyles = () => {
    const color = useColorScheme();
    const [dimensions, setDimensions] = useState({
        window: Dimensions.get("window"),
        screen: Dimensions.get("screen")
    });

    useEffect(() => {
        const dimensionCheck = Dimensions.addEventListener("change",
            ({ window, screen }) => {
                setDimensions({ window, screen })
            });
        return () => dimensionCheck?.remove();
    })

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
            color: color["text"],
            backgroundColor: color["interactive"],
            fontSize: 20,
            borderRadius: 5,
            padding: 10,
            width: dimensions.screen.width * 3/7,
            height: 50
        },
        button: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: color["interactive"],
            borderRadius: 100,
            padding: 10,
            minWidth: 100,
            minHeight: 50,
            maxWidth: 100,
            maxHeight: 50,
        },
        wideButton: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: color["interactive"],
            textDecorationColor: color["secondary"],
            borderRadius: 100,
            padding: 10,
            minWidth: dimensions.screen.width * 3/7,
            minHeight: 50,
            maxWidth: dimensions.screen.width * 5/7,
            maxHeight: 50,
        }
    })
}