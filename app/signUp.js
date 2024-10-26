import {View, Text, Image, TextInput, Pressable, TouchableOpacity, Alert} from 'react-native';
import React, { useRef, useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';

export default function SignUp() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const usernameRef = useRef("");
    const profileRef = useRef("");
    const handleRegister = async () => {
        if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current){
            Alert.alert("Sign Up", "Please fill in all fields");
            return;
        }

        // register process
    }
    return (
        <CustomKeyboardView>
            <StatusBar style="dark" />
            <View className="flex-1 gap-2" style={{paddingTop: hp(2), paddingHorizontal: wp(5)}}>
                {/* signUp image */}
                <View className="items-center">
                    <Image source={require('../assets/images/register.jpg')} style={{height: hp(35)}} 
                    resizeMode='contain' />
                </View>

                <View className="gap-5">
                    <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign Up</Text>
                    {/* inputs */}
                    <View className="gap-4">
                        <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 rounded-xl items-center">
                            <Feather name="user" size={hp(3)} color="gray" />
                            <TextInput onChangeText={value => usernameRef.current = value} style={{fontSize: hp(2)}} 
                            className="flex-1 font-semibold text-neutral-700" 
                            placeholder="Username" placeholderTextColor={"gray"} />
                        </View>
                        <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 rounded-xl items-center">
                            <Octicons name="mail" size={hp(3)} color="gray" />
                            <TextInput onChangeText={value => emailRef.current = value} style={{fontSize: hp(2)}} 
                            className="flex-1 font-semibold text-neutral-700" 
                            placeholder="Email address" placeholderTextColor={"gray"} />
                        </View>
                        <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 rounded-xl items-center">
                            <Octicons name="lock" size={hp(3)} color="gray" />
                            <TextInput onChangeText={value => passwordRef.current = value} style={{fontSize: hp(2)}} 
                            className="flex-1 font-semibold text-neutral-700" secureTextEntry
                            placeholder="Password" placeholderTextColor={"gray"} />
                        </View>
                        <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 rounded-xl items-center">
                            <Feather name="image" size={hp(3)} color="gray" />
                            <TextInput onChangeText={value => profileRef.current = value} style={{fontSize: hp(2)}} 
                            className="flex-1 font-semibold text-neutral-700" 
                            placeholder="Profile url" placeholderTextColor={"gray"} />
                        </View>
                        {/* submit button */}

                        <View className="gap-2">
                            {
                                loading? (
                                    <View className="flex-row justify-center">
                                        <Loading size={hp(18)} />
                                    </View>
                                ):(
                                    <TouchableOpacity onPress={handleRegister} style={{height: hp(7)}} 
                                    className="bg-indigo-500 rounded-xl justify-center items-center">
                                        <Text style={{fontSize: hp(3.5)}} className="text-white font-bold tracking-wider">Sign Up</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        {/* sign up text */}
                        <View className="flex-row justify-center">
                            <Text style={{fontSize: hp(2)}} className="font-semibold text-neutral-500">Already have an account? </Text>
                            <Pressable onPress={() => router.push('signIn')}>
                                <Text style={{fontSize: hp(2)}} className="font-semibold text-indigo-500">Sign In</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </CustomKeyboardView>
    );
}