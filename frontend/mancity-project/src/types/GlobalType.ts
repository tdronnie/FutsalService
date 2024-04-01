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