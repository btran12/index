import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { mockPlaces } from '../data/mockData';

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        }}
      >
        {mockPlaces.map((place) => (
          <Marker
            key={place.id}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            title={place.name}
            description={`${place.category} · ${place.liveCount} live now`}
          />
        ))}
      </MapView>
      <View style={styles.legend}>
        <Text style={styles.legendText}>Browse nearby places within 1 mile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  legend: { position: 'absolute', bottom: 20, alignSelf: 'center', backgroundColor: '#fff', padding: 8, borderRadius: 8 },
  legendText: { fontSize: 12 }
});
