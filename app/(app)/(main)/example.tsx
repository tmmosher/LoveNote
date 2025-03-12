import { View, Text } from "react-native";
import { getStyles } from "@/hooks/getStyles.ts";

export default function Example() {
    const styles = getStyles();
    return (
        <View>
            <Text style={styles.text}>Yar har har!</Text>
        </View>
    )
}

