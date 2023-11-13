import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { watchPositionAsync } from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  // const [subscriber, setSubscriber] = useState(null);

  // const startWatching = async () => {
  //   try {
  //     await Location.requestForegroundPermissionsAsync();
  //   } catch (e) {
  //     setErr(e);
  //   }
  // };

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErr("Please enable location services");
        }

        // const sub = await watchPositionAsync(
        subscriber = await watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
        // setSubscriber(sub);
      } catch (error) {
        console.error("Error while starting location tracking:", error);
        setErr("Error while starting location tracking");
      }
      // } catch (e) {
      //   setErr(e);
      // }
    };

    // const cleanup = async () => {
    //   if (subscriber) {
    //     await subscriber.remove();
    //     setSubscriber(null);
    //   }
    // };

    if (shouldTrack) {
      startWatching();
    } else {
      // stop watching
      // cleanup();
      if (subscriber) {
        subscriber.remove();
      }
      // subscriber.remove();
      //  setSubscriber(null);
      subscriber = null;
    }
    // return () => cleanup(); // Cleanup on unmount
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};
