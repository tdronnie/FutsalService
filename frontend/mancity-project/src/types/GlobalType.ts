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

interface PlayerData {
  id: number;
  nickName: string;
  image: string;
  goalDecision: string;
  pass: string;
  speed: string;
  distanceCovered: string;
  defense: string;
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