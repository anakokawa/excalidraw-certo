import { createContext, useContext } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({});

export function FontProvider({children}) {

    const [loaded, error] = useFonts({
        regular: require("../font/Montserrat-Regular.ttf"),
        bold: require("../font/Montserrat-Bold.ttf"),
        black: require("../font/Montserrat-Black.ttf"),
        semibold: require("../font/Montserrat-SemiBold.ttf"),
        light: require("../font/Montserrat-Light.ttf"),
        medium: require("../font/Montserrat-Medium.ttf"),
        thin: require("../font/Montserrat-Thin.ttf"),
        extralight: require("../font/Montserrat-ExtraLight.ttf"),
        italic: require("../font/Montserrat-Italic.ttf"),
        bolditalic: require("../font/Montserrat-BoldItalic.ttf"),
    });

    if (!loaded && !error) {
        return (
        <View style={{ flex: 1, justifyContent: "center", alingItems: "center"}}>
            <Text style={{fontSize: 28}}></Text>
        <ActivityIndicator size={28}/>
        </View>
        );
    }

    return <FontContext.Porvider  value={{}}>{children}</FontContext.Porvider>;
}

export function useFont() {
    const context = useContext(FontContext);
    if (!context) {
        throw new Error ("useFont must be used within a FontProvider");
    }  
    return context;
}