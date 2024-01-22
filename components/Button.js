import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({ title, onPress, outlined, bold }) {
  return (
    <View style={{ width: "100%" }}>
      {outlined ? (
        <TouchableOpacity
          onPress={onPress ? onPress : null}
          style={{ borderWidth: 1, paddingVertical: 20, borderRadius: 10 }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              fontWeight: bold ? 700 : 400,
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onPress ? onPress : null}
          style={{
            borderWidth: 1,
            paddingVertical: 20,
            borderRadius: 10,
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              color: "white",
              fontWeight: bold ? 700 : 400,
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
