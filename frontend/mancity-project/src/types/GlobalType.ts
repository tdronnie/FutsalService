interface GlobalType {
  test: string;
}

interface NavigateType {
  path: string;
}

interface MatchData {
  id: number;
  file: string;
  subtext: string;
  maintext: string;
  minitext: string;
  buttonlabel: string;
}

interface ClubData {
  id: number;
  name: string;
  emblem: string;
  memberCnt: number;
  score: number;
  region: string;
}

interface MyMatchesData {
  gameId: number;
  courtId: number;
  startDate: string;
  time: number;
  playerNumber: number;
}

interface PlayerData {
  id: number;
  nickName: string;
  image: string;
  goalDecision: number;
  pass: number;
  speed: number;
  distanceCovered: number;
  defense: number;
  overall: number;
  height: number;
  weight: number;
}

interface FeedbackResult {
  possession: number;
  shot: number;
  pass: number;
  goal: number;
  activityLevel: number;
}

interface PersonalFeedbackResult {
  distanceCovered: number;
  speed: number;
  goal: number;
  assist: number;
  shot: number;
  shotOnTarget: number;
  pass: number;
  turnOverInOffense: number;
  turnOverInDefense: number;
}