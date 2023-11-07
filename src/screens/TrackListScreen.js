import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TrackListScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
