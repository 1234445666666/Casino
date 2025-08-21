import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Main';
import Error from '../pages/Error';
import MyProfile from '../pages/MyProfile';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<MyProfile />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}