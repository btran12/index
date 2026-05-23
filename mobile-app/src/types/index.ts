export type Place = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  category: string;
  distanceMiles: number;
  liveCount: number;
};

export type Thread = {
  id: string;
  placeId: string;
  title: string;
  body: string;
  authorHandle: string;
  score: number;
  comments: number;
  createdAt: string;
  verifiedHereNow: boolean;
};
