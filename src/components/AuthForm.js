import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "@rneui/themed";

import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {errorMessage ? (
        <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
      ) : null}
      <Spacer />
      <Button
        title={submitButtonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessageStyle: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
