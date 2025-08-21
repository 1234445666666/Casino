import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Main";
import Game from "../pages/Game";
import MyProfile from "../pages/MyProfile";
import Promotions from "../pages/Promotions.tsx";
import Support from "../pages/Support";
import Error from "../pages/Error";

export default function AppRoutes() {
  return (
    <Routes>
      {/* main page and other pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/games" element={<Game />} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/support" element={<Support />} />

      {/* accaunt page */}
      <Route path="/profile" element={<MyProfile />} />

      {/* error page  */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
