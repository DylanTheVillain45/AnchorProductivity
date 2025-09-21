import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import NotFound from "./pages/util/NotFound";
import AdminPanel from "./pages/util/AdminPanel";
import JournalPage from "./pages/JournalPage";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
