import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from './app/screens/LoginScreen';
import {COLORS} from './app/constants/Colors';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    'coolvetica': require('./app/assets/fonts/coolvetica-rg.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
		<View style={styles.container}>
			<LoginScreen />
			<StatusBar style="auto" backgroundColor="transparent"/>
		</View>
	);
  }
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.black,
	},
});
