import { Routes, Route } from "react-router-dom";
import SignUpForm from "./dev/SignUpForm";
import LoginForm from "./dev/LoginForm";
import UserList from "./dev/UserList";
import Dashboard from "./components/Dashboard";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <>
      <LoginPage /> {/* Login page */}


      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
