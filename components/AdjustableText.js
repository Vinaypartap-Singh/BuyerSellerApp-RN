import { View, Text } from "react-native";
import React from "react";

export default function AdjustableText({ title, fontSize, fontWeight }) {
  return (
    <Text
      style={{
        fontSize: fontSize ? fontSize : 16,
        fontWeight: fontWeight ? fontWeight : 500,
      }}
    >
      {title}
    </Text>
  );
}
