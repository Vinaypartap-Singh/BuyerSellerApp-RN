import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../theme";

export default function URLButton({
  title,
  fontSize,
  fontWeight,
  textDecorationLine,
  textDecorationColor,
  textAlign,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress ? onPress : null}>
      <Text
        style={{
          fontSize: fontSize ? fontSize : 16,
          fontWeight: fontWeight ? fontWeight : 400,
          textDecorationLine: textDecorationLine ? textDecorationLine : "none",
          textDecorationColor: textDecorationColor
            ? textDecorationColor
            : theme.iconsColor,
          textAlign: textAlign ? textAlign : "auto",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
