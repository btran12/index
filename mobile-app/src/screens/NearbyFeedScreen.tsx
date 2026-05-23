import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { ThreadCard } from '../components/ThreadCard';
import { mockPlaces, mockThreads } from '../data/mockData';

export const NearbyFeedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockThreads}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ThreadCard thread={item} place={mockPlaces.find((p) => p.id === item.placeId)} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  list: { padding: 12 }
});
