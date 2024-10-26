import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';

export default function SignIn() {
    return (
        <View className="pt-5 flex-1">
            <StatusBar style="dark" />
            <View className="flex-1 gap-12" style={{paddingTop: hp(4), paddingHorizontal: wp(5)}}>
                {/* signIn image */}
                <View className="items-center">
                    <Image source={require('../assets/images/login.jpg')} style={{height: hp(35)}} 
                    resizeMode='contain' />
                </View>

                <View className="gap-5">
                    <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>
                    {/* inputs */}
                    <View className="gap-4">
                        <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 rounded-xl items-center">
                            <Octicons name="mail" size={hp(3)} color="gray" />
                            <TextInput style={{fontSize: hp(2)}} className="flex-1 font-semibold text-neutral-700" 
                            placeholder="Email address" placeholderTextColor={"gray"} />
                        </View>
                        <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 rounded-xl items-center">
                            <Octicons name="lock" size={hp(3)} color="gray" />
                            <TextInput style={{fontSize: hp(2)}} className="flex-1 font-semibold text-neutral-700" 
                            placeholder="Password" placeholderTextColor={"gray"} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}