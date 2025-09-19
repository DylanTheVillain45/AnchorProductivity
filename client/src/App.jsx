import { Routes, Route } from "react-router-dom";
import SignUpForm from "./dev/SignUpForm";
import LoginForm from "./dev/LoginForm";
import UserList from "./dev/UserList";
import JournalDisplay from "./dev/JournalDisplay";
import CreateJournal from "./dev/CreateJournal";
import Dashboard from "./components/Dashboard";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <SignUpForm />
      <LoginForm />
      <UserList />
      <CreateJournal />
      <JournalDisplay />
      <LoginPage />


      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes
    </>
  );
}

export default App;
