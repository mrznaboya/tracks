import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { watchPositionAsync } from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  // const startWatching = async () => {
  //   try {
  //     await Location.requestForegroundPermissionsAsync();
  //   } catch (e) {
  //     setErr(e);
  //   }
  // };
  const startWatching = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErr("Please enable location services");
      }
      const sub = await watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(sub);
    } catch (error) {
      console.error("Error while starting location tracking:", error);
      setErr("Error while starting location tracking");
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      // stop watching
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [err];
};
