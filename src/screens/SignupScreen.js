import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, Input, Button } from "@rneui/themed";

import Spacer from "../components/Spacer";

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input label="Email" />
      <Input label="Password" />
      <Button title="Sign Up" />
    </>
  );
};
const styles = StyleSheet.create({});

export default SignupScreen;
