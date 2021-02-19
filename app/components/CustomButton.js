import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ children, color="#fff", bg }) => (
	<TouchableOpacity style={[styles.buttonStyles, {backgroundColor: bg}]}>
		<Text style={[styles.text, {color: color}]}>{children}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	buttonStyles: {
		paddingVertical: "15px",
		borderRadius: "32px",
		textAlign: "center",
	},
	text: {
		fontFamily: "coolvetica",
    fontSize: '19px',
    fontWeight: '400'
	},
});

export default CustomButton;
