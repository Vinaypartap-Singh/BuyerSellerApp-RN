import { View, Text } from "react-native";
import React from "react";

export default function Title({ title, center }) {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: 700,
        textAlign: center ? "center" : "auto",
      }}
    >
      {title}
    </Text>
  );
}
