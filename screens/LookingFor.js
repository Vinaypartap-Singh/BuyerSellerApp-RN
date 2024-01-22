import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";

export default function LookingFor() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 30,
        justifyContent: "center",
      }}
    >
      <Title title={"Continue As"} center={true} />
      <Button
        title={"Buyer"}
        outlined={false}
        bold={true}
        onPress={() => navigation.replace("RegisterBuyer")}
      />
      <Button
        title={"Seller"}
        outlined={true}
        bold={true}
        onPress={() => navigation.replace("RegisterSeller")}
      />
    </View>
  );
}
