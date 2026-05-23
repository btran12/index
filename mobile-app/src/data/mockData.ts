import { Place, Thread } from '../types';

export const mockPlaces: Place[] = [
  {
    id: 'place_1',
    name: 'Blue Bottle Coffee',
    latitude: 37.7764,
    longitude: -122.4231,
    category: 'Cafe',
    distanceMiles: 0.2,
    liveCount: 14
  },
  {
    id: 'place_2',
    name: 'Mission Dolores Park',
    latitude: 37.7596,
    longitude: -122.4269,
    category: 'Park',
    distanceMiles: 0.9,
    liveCount: 48
  },
  {
    id: 'place_3',
    name: 'SF Public Library - Main',
    latitude: 37.7789,
    longitude: -122.4158,
    category: 'Library',
    distanceMiles: 0.7,
    liveCount: 9
  }
];

export const mockThreads: Thread[] = [
  {
    id: 'thread_1',
    placeId: 'place_1',
    title: 'Line is short right now',
    body: 'Only 3 people ahead. Great time to grab a seat.',
    authorHandle: 'SidewalkSparrow',
    score: 22,
    comments: 6,
    createdAt: '2m ago',
    verifiedHereNow: true
  },
  {
    id: 'thread_2',
    placeId: 'place_2',
    title: 'Pickup soccer near the south end?',
    body: 'We have 6 players. Need at least 4 more.',
    authorHandle: 'FogCityNomad',
    score: 15,
    comments: 11,
    createdAt: '8m ago',
    verifiedHereNow: true
  },
  {
    id: 'thread_3',
    placeId: 'place_3',
    title: 'Best quiet floor today?',
    body: '3rd floor seemed packed this morning.',
    authorHandle: 'UrbanPulse',
    score: 8,
    comments: 4,
    createdAt: '19m ago',
    verifiedHereNow: false
  }
];
