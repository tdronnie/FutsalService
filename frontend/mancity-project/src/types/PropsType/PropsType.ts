interface TailwindPropsType {
  type?: string;
  style?: any;
  textSize?: string;
  fontWeight?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;

  id?: string;

  hoverTextColor?: string;
  hoverBgColor?: string;
  hoverBorderColor?: string;

  width?: string;
  height?: string;
  rounded?: string;
  label?: string;
  placeholder?: string;
  textValue?: string;
  setTextValue?: React.Dispatch<React.SetStateAction<string>>;
  isdisabled?: boolean;

  bgimg?: string;
  file?: string;
  hover?: boolean;

  reverse?: boolean;
}

interface GlobalButton {
  isdisabled?: boolean;
  width?: string;
  label?: string;
  hover?: boolean;
}

interface MyTypographyType {
  textSize?: string;
  fontWeight?: string;
  textColor?: string;
  label?: string | number;
  id?: string;
}

interface GlobalInputType {
  type?: string;
  width?: string;
  placeholder?: string;
  textValue?: string;
  setTextValue?: React.Dispatch<React.SetStateAction<string>>;
  // 숫자 prop 내리는 형식 따로 생성
  numberTextValue?: number;
  setNumberTextValue?: React.Dispatch<React.SetStateAction<number>>;
}

/////////////////////////////////////

interface WideCardPropsType {
  file?: string;
  subtext: string;
  maintext: string;
  minitext?: string | number;
  buttonlabel: string;
}

interface HalfCardPropsType {
  file?: string;
  maintext: string;
  rounded?: string;
}

interface HomeCardPropsType {
  file?: string;
  maintext: string;
  subtext: string;
}

interface PlayerInfoPropsType {
  player: string;
  color: string;
}

interface CommunityCardPropsType {
  file?: string;
  subtext: string;
  maintext: string;
  likes: number;
  comments: number;
  toWhere: number;
}

interface ClubListPropsType {
  bgimg?: string;
  clubTitile: string;
  clubInfo: string;
  file?: string;
}

interface ShadcnDropdownPropsType {
  items: { value: number | string; label: string }[];
  width?: string;
  position: string | undefined;
  setPosition?: React.Dispatch<React.SetStateAction<string>>;
  setNumberValue?:
    | React.Dispatch<React.SetStateAction<number>>
    | React.Dispatch<React.SetStateAction<string>>;
}

interface DropdownPropsType extends ShadcnDropdownPropsType {
  MyTypographyLabel: string;
}

interface HeaderPropsType {
  label?: string;
  backArrow: boolean;
  headerButton: boolean;
  onClickButton?: () => void;
  buttonLabel?: string;
  toWhere?: string;
}

interface InputGroupPropsType {
  type?: string;
  MyTypographyLabel: string;
  placeholder?: string;
  checking: boolean;
  checkingLabel?: string;
  textValue?: string;
  setTextValue?: React.Dispatch<React.SetStateAction<string>>;

  // 숫자 prop 내리는 형식 따로 생성
  numberTextValue?: number;
  setNumberTextValue?: React.Dispatch<React.SetStateAction<number>>;

  setIsCheck?: React.Dispatch<React.SetStateAction<boolean | null>>;
}

interface GlobalCardProps {
  mainTitle: string;
  subTitle?: string;
  file?: string;
}

interface HighlightCardProps {
  mainTitle: string;
  file?: string;
}

interface ExampleCustomInputProps extends React.HTMLProps<HTMLButtonElement> {
  value?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface MiniMapPropsType {
  lat: number;
  lng: number;
  address: string;
  tel: string;
  onClick: () => Promise<void>;
}

interface MapPropsType {
  lat: number;
  lng: number;
}

interface MemberListPropsType {
  participants: {
    id: number;
    userId: number;
    image: string;
  }[];
}

interface ImgBoxType {
  file: string;
  width: string;
  height: string;
  rounded: string;
}

interface GlobalSwitchPropsType {
  label: string;
  isSwitchOn: boolean;
  setIsSwitchOn: React.Dispatch<React.SetStateAction<boolean>>;
  switchMarginTop: string;
}

interface TypographyLinePropsType {
  lineWidth: string;
  label: string;
}

interface FooterPropsType {
  label: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

interface TextareaContainerPropsType {
  textareaValue: string;
  setTextareaValue: React.Dispatch<React.SetStateAction<string>>;
}

interface FollowCardPropsType {
  file: string;
  nickName: string;
  overall: number;
}

interface futsalCourts {
  id: number;
  title: string;
  address: string;
  lat: number;
  lng: number;
  tel: string;
}

interface muiModalPropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
  handleClose: () => void;
}

interface userStatModalPropsType {
  userId: number;
}

interface SearchBarPropsType {
  contents: futsalCourts[];
  setPlaceValue: React.Dispatch<React.SetStateAction<number>>;
}

interface MatchDetailPropsType {
  matchDetailPropsData: matchDetailPropsDataType;
  courtData: futsalCourts;
}

// 메인페이지에서 플레이어 랭킹 type
interface MainPlayer {
  id: number;
  nickName: string;
  image: string;
  goal: string;
  pass: number;
  playedTimes: number;
}

interface ReplayGame {
  id: number;
  courtId: number;
  startDate: string;
  time: number;
  replayUrl: string;
}
interface ReplayModalPropsType {
  players?: MainPlayer[];
  games: ReplayGame[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
