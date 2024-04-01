import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/main/HomePage";
import NotFoundPage from "@/pages/main/NotFoundPage";
import SignUpPage from "@/pages/user/SignUpPage";
import LoginPage from "@/pages/user/LoginPage";
import AlertPage from "@/pages/main/AlertPage";
import MapPage from "@/pages/main/MapPage";
import MatchListPage from "@/pages/match/MatchListPage";
import MatchFilterPage from "@/pages/match/MatchFilterPage";
import MatchDetailPage from "@/pages/match/MatchDetailPage";
import MatchRegisterPage from "@/pages/match/MatchRegisterPage";
import PlayerFixPage from "@/pages/analysis/PlayerFixPage";
import FeedbackPage from "@/pages/analysis/FeedbackPage";
import ReplayPage from "@/pages/analysis/ReplayPage";
import CommunityPage from "@/pages/community/CommunityListPage";
import CommunityRegisterPage from "@/pages/community/CommunityRegisterPage";
import CommunityEditPage from "@/pages/community/CommunityEditPage";
import ClubListPage from "@/pages/club/ClubListPage";
import ClubDetailPage from "@/pages/club/ClubDetailPage";
import ClubRegisterPage from "@/pages/club/ClubRegisterPage";
import ClubEditPage from "@/pages/club/ClubEditPage";
import ClubFilterPage from "@/pages/club/ClubFilterPage";
import ProfilePage from "@/pages/user/ProfilePage";
import ProfileEditPage from "@/pages/user/ProfileEditPage";
import CommunityDetailPage from "@/pages/community/CommunityDetailPage";
import EntryPage from "@/pages/main/EntryPage";
import FollowPage from "@/pages/user/FollowPage";
import PersonalFeedbackPage from "@/pages/analysis/PersonalFeedbackPage";
import ScorePage from "@/pages/analysis/ScorePage";
import PersonalScorePage from "@/pages/analysis/PersonalScorePage";
import TacticalBoardPage from "@/pages/analysis/TacticalBoardPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/entry" element={<EntryPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/alert" element={<AlertPage />} />
    <Route path="/map" element={<MapPage />} />
    <Route path="/match" element={<MatchListPage />} />
    <Route path="/match/filter" element={<MatchFilterPage />} />
    <Route path="/match/:match_id" element={<MatchDetailPage />} />
    <Route path="/match/register" element={<MatchRegisterPage />} />
    <Route path="/playerfix/:match_id" element={<PlayerFixPage />} />
    <Route path="/feedback/:match_id" element={<FeedbackPage />} />
    <Route path="/replay/:match_id" element={<ReplayPage />} />
    <Route
      path="/personalfeedback/:player_id"
      element={<PersonalFeedbackPage />}
    />
    <Route path="/personalscore/:player_id" element={<PersonalScorePage />} />
    <Route path="/score/:match_id" element={<ScorePage />} />
    <Route path="/community" element={<CommunityPage />} />
    <Route path="/community/register" element={<CommunityRegisterPage />} />
    <Route path="/community/edit" element={<CommunityEditPage />} />
    <Route path="/community/:community_id" element={<CommunityDetailPage />} />
    <Route path="/club" element={<ClubListPage />} />
    <Route path="/club/:club_id" element={<ClubDetailPage />} />
    <Route path="/club/register" element={<ClubRegisterPage />} />
    <Route path="/club/filter" element={<ClubFilterPage />} />
    <Route path="/club/edit/:club_id" element={<ClubEditPage />} />
    <Route path="/profile/:user_id" element={<ProfilePage />} />
    <Route path="/profile/edit/:user_id" element={<ProfileEditPage />} />
    <Route path="/follow/:user_id" element={<FollowPage />} />
    <Route path="/tactical_board" element={<TacticalBoardPage />} />
  </Routes>
);

export default AppRoutes;