import {
  View,
  Text,
  ScrollView,
  TextInput,
  Alert,
  NativeModules,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Title from "../../components/Title";
import {
  UserIcon,
  EnvelopeIcon,
  AcademicCapIcon,
  IdentificationIcon,
  BuildingLibraryIcon,
  MapPinIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import { theme } from "../../theme";
import Button from "../../components/Button";
import AdjustableText from "../../components/AdjustableText";
import URLButton from "../../components/URLButton";

export default function BuyerRegister() {
  const { StatusBarManager } = NativeModules;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [studentName, setStudentName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const inputField = [
    {
      placeholderText: "Username",
      icon: <UserIcon color={theme.iconsColor} />,
      placeholderColor: theme.placeholderColor,
      onChgeTXT: (text) => setUsername(text),
    },
    {
      placeholderText: "Email",
      icon: <EnvelopeIcon color={theme.iconsColor} />,
      placeholderColor: theme.placeholderColor,
      onChgeTXT: (text) => setEmail(text),
    },
    {
      placeholderText: "Student Name",
      icon: <AcademicCapIcon color={theme.iconsColor} />,
      placeholderColor: theme.placeholderColor,
      onChgeTXT: (text) => setStudentName(text),
    },
    {
      placeholderText: "College/University Name",
      icon: <BuildingLibraryIcon color={theme.iconsColor} />,
      placeholderColor: theme.placeholderColor,
      onChgeTXT: (text) => setCollegeName(text),
    },
    {
      placeholderText: "Student ID",
      icon: <IdentificationIcon color={theme.iconsColor} />,
      placeholderColor: theme.placeholderColor,
      onChgeTXT: (text) => setStudentID(text),
    },
    {
      placeholderText: "Your Address",
      icon: <MapPinIcon color={theme.iconsColor} />,
      placeholderColor: theme.placeholderColor,
      onChgeTXT: (text) => setAddress(text),
    },
    {
      placeholderText: "Password",
      icon: <LockClosedIcon color={theme.iconsColor} />,
      placeholderColor: theme.placeholderColor,
      onChgeTXT: (text) => setPassword(text),
    },
  ];

  const registerBuyer = async () => {
    if (
      username === "" ||
      email === "" ||
      studentName === "" ||
      collegeName === "" ||
      studentID === "" ||
      address === "" ||
      password === ""
    ) {
      Alert.alert(
        "Invalid Details",
        "Please fill all the details to create an account",
        [
          {
            text: "OK",
            style: "default",
          },
          {
            text: "Cancel",
            style: "cancel",
          },
        ]
      );
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
      }}
    >
      <View style={{ gap: 40 }}>
        <Title title={"Create An Account"} center={true} />
        {inputField.map(
          ({ placeholderText, icon, placeholderColor, onChgeTXT }, index) => {
            return (
              <View
                key={index}
                style={{
                  paddingHorizontal: 15,
                  borderWidth: 1,
                  paddingVertical: 20,
                  borderRadius: 10,
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                {icon}
                <TextInput
                  placeholder={placeholderText}
                  placeholderTextColor={placeholderColor}
                  style={{ fontWeight: "600" }}
                  onChangeText={onChgeTXT}
                />
              </View>
            );
          }
        )}
        <Button title={"Register Now"} bold={true} onPress={registerBuyer} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AdjustableText
            title={"Already have an account ?"}
            fontWeight={600}
          />
          <URLButton
            title={"Login Now"}
            textDecorationLine={"underline"}
            fontWeight={700}
            onPress={() => console.log("logged")}
          />
        </View>

        <View style={{ marginBottom: 50 }}></View>
      </View>
    </ScrollView>
  );
}
