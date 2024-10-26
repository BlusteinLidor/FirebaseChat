import { router, Slot, useRouter, useSegments} from "expo-router";
import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useAuth, AuthContextProvider } from "../context/authContext";

// Import your global CSS file
import "../global.css";

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        // check if the user is authenticated
        if(typeof isAuthenticated === "undefined"){
            return;
        }
        const inApp = segments[0] == '(app)';
        if(isAuthenticated && !inApp){
            // redirect to home
            router.replace('home');
        }
        else if(isAuthenticated==false){
            // redirect to signIn
            router.replace('signIn');
        }
    }, [isAuthenticated]);

    return <Slot />
}

export default function RootLayout(){
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    )
}
