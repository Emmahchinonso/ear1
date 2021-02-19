import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

const SmallText = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		textAlign: "center",
		color: COLORS.white,
		opacity: "0.4",
		fontSize: "12px",
		lineHeight: "20px",
		fontWeight: "400",
	},
});

export default SmallText;
