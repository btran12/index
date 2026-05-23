import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ThreadCard } from '../components/ThreadCard';
import { mockPlaces, mockThreads } from '../data/mockData';

const checkedInPlace = mockPlaces[0];
const checkedInThreads = mockThreads.filter((thread) => thread.placeId === checkedInPlace.id);

export const CheckInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checked in at {checkedInPlace.name} (within 50m)</Text>
      <FlatList
        data={checkedInThreads}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ThreadCard thread={item} place={checkedInPlace} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', paddingTop: 12 },
  header: { fontSize: 14, fontWeight: '700', paddingHorizontal: 12, marginBottom: 8 },
  list: { paddingHorizontal: 12 }
});
