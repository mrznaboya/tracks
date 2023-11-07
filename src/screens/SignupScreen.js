import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Input, Button } from "@rneui/themed";

import Spacer from "../components/Spacer";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Button title="Sign Up" />
    </>
  );
};
const styles = StyleSheet.create({});

export default SignupScreen;
