import {Stack} from "expo-router";
import { AppProvider } from "./assets/hooks";

export default function Layout() {
    return (
    <AppProvider>
        <Stack />
    </AppProvider>
       
    );
}