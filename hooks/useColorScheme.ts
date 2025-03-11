import { useColorScheme as useRNColorScheme } from "react-native";
import {light, dark} from "@/constants/palettes.ts";

export function useColorScheme() {
    return useRNColorScheme() === "dark" ? dark : light;
}