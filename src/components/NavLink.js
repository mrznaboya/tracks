import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Spacer from "./Spacer";

const NavLink = ({ text, name }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(name)}>
      <Spacer>
        <Text style={styles.linkStyle}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkStyle: {
    color: "blue",
  },
});

export default NavLink;
