import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";

import Map from "../components/Map";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  // const startWatching = async () => {
  //   try {
  //     await Location.requestForegroundPermissionsAsync();
  //   } catch (e) {
  //     setErr(e);
  //   }
  // };
  const startWatching = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErr("Please enable location services");
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
