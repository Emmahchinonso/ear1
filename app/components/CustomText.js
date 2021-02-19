import React from 'react';
import { Text, StyleSheet } from 'react-native';


const CustomText = ({children, size, color, align="left", height='38px'}) => {
  return (
    <Text style={[styles.text, {fontSize: size, color: color, textAlign: align, lineHeight: height}]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "coolvetica",
		lineHeight: "38px",
  }
})

export default CustomText
