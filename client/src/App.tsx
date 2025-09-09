import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/core/Home";
import NotFound from "./pages/support/NotFound";
import Journal from "./pages/core/Journal";
import Calendar from "./pages/core/Calendar";
import Entry from "./pages/core/Entry";
import Tasks from "./pages/core/Tasks";
import Preferences from "./pages/support/Preferences";
import Profile from "./pages/support/Profile";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar/entry/:id" element={<Entry />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
   
  );
}

export default App
 