import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/core/Home";
import NotFound from "./pages/support/NotFound";
import Journal from "./pages/core/Journal";
import Calendar from "./pages/core/Calendar";
import Entry from "./pages/core/Entry";
import Tasks from "./pages/core/Tasks";
import Settings from "./pages/support/Settings";
import Profile from "./pages/support/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/calendar/entry/:id" element={<Entry />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
 