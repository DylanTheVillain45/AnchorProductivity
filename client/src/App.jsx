import { Routes, Route } from "react-router-dom";
import SignUpForm from "./dev/SignUpForm";
import LoginForm from "./dev/LoginForm";
import UserList from "./dev/UserList";
import JournalDisplay from "./dev/JournalDisplay";
import CreateJournal from "./dev/CreateJournal";

function App() {
  return (
    <>
      <SignUpForm />
      <LoginForm />
      <UserList />
      <CreateJournal />
      <JournalDisplay />
    </>
  );
}

export default App;
