import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { COLORS } from "../constants/Colors";
import CustomButton from '../components/CustomButton'

const LoginScreen = () => {
	return (
		<View style={styles.wrapper}>
			<Image style={styles.logo} source={require("../assets/logo.png")} />

			<View style={styles.imageWrapper}>
				<Image
					style={[styles.image, styles.imageBig]}
					source={require("../assets/chatIcon-big.png")}
				/>
				<Image
					style={[styles.image, styles.imageSmall]}
					source={require("../assets/chatIcon-small.png")}
				/>
			</View>

			<View style={styles.content}>
				<Text style={styles.text}>
					Meet <Text style={styles.innerText}>ear1</Text>,
				</Text>
        <CustomButton>
          Login / Sign Up with apple
        </CustomButton>
        <CustomButton>
          Sign Up with Google
        </CustomButton>
        <CustomButton>
          Sign Up with Twitter
        </CustomButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		position: "relative",
		flex: 1,
	},
	imageWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	image: {
		display: "block",
		opacity: "0.1",
	},
	imageBig: {
		width: "190px",
		height: "439.38px",
	},
	imageSmall: {
		width: "136px",
		height: "300px",
		transform: "translateY(56px)",
	},
	logo: {
		width: "36.92px",
		height: "41.75px",
		position: "absolute",
		top: "85px",
		left: "21px",
	},
	content: {
		marginTop: "15px",
		paddingLeft: "21px",
		paddingRight: "21px",
	},
	text: {
		color: COLORS.grey,
		fontFamily: "coolvetica",
		fontSize: "32px",
		lineHeight: "38px",
	},
	innerText: {
		color: COLORS.white,
	},
});

export default LoginScreen;
