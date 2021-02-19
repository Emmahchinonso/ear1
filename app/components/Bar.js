import React from "react";
import { View, StyleSheet } from "react-native";

const Bar = ({ bg , opacity}) => {
	return <View style={[styles.bar, { backgroundColor: bg, opacity: opacity }]} />;
};

const styles = StyleSheet.create({
	bar: {
		width: "134px",
		height: "5px",
		position: "absolute",
		bottom: " 8px",
		left: "50%",
		transform: "translateX(-50%)",
		borderRadius: "100px",
    
	},
});

export default Bar;
