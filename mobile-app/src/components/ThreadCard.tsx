import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Thread, Place } from '../types';

type Props = {
  thread: Thread;
  place?: Place;
};

export const ThreadCard = ({ thread, place }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.place}>{place?.name ?? 'Unknown Place'}</Text>
      <Text style={styles.title}>{thread.title}</Text>
      <Text style={styles.body}>{thread.body}</Text>
      <Text style={styles.meta}>
        u/{thread.authorHandle} · {thread.createdAt} · {thread.score} points · {thread.comments} comments
      </Text>
      <Text style={styles.badge}>{thread.verifiedHereNow ? 'Verified here now' : 'Nearby, not checked in'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 12, marginBottom: 10 },
  place: { fontSize: 12, fontWeight: '700', color: '#555' },
  title: { fontSize: 16, fontWeight: '700', marginTop: 4 },
  body: { fontSize: 14, color: '#222', marginTop: 6 },
  meta: { fontSize: 12, color: '#666', marginTop: 8 },
  badge: { fontSize: 12, color: '#0a7', marginTop: 4 }
});
