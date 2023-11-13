import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = () => {
  const navigation = useNavigation();
  const { state } = useContext(TrackContext);
  const route = useRoute();
  // const _id = navigation.getParam('_id');
  const { _id } = route.params;

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.1,
          ...initialCoords,
        }}
        style={styles.mapStyle}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 300,
  },
});

export default TrackDetailScreen;
