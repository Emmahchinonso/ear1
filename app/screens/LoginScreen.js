import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { COLORS } from "../constants/Colors";
import {
	CustomButton,
	CustomText,
	SmallText,
	Separator,
	Bar,
} from "../components";

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
				<CustomText color={COLORS.grey} size="32px">
					Meet <CustomText color={COLORS.white}>ear1</CustomText>,
				</CustomText>
				<Separator size="16px" />

				<CustomButton bg="#171817">Login / Sign Up with apple</CustomButton>
				<Separator size="8px" />
				<CustomButton color={COLORS.black400} bg={COLORS.green}>
					Sign Up with Google
				</CustomButton>
				<Separator size="8px" />
				<CustomButton bg={COLORS.blue}>Sign Up with Twitter</CustomButton>
				<Separator size="10px" />
				<SmallText style={styles.textSmall}>
					Have an account?
					<Text style={styles.decorateText}> Login</Text>
				</SmallText>
			</View>
			<Bar bg={COLORS.white} opacity="0.1" />
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
		marginTop: "16px",
		paddingLeft: "21px",
		paddingRight: "21px",
	},
	text: {
		color: COLORS.grey,
		fontFamily: "coolvetica",
		fontSize: "32px",
		lineHeight: "38px",
	},
	textSmall: {
		textAlign: "center",
		color: COLORS.white,
		opacity: "0.5",
		fontSize: "12px",
		lineHeight: "20px",
		fontWeight: "400",
	},
	innerText: {
		color: COLORS.white,
	},
	decorateText: {
		textDecorationStyle: "solid",
		textDecorationLine: "underline",
	},
});

export default LoginScreen;
