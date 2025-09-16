import { Routes, Route } from "react-router-dom";
import SignUpForm from "./dev/SignUpForm";
import LoginForm from "./dev/LoginForm";
import UserList from "./dev/UserList";

function App() {
  return (
    <>
      <SignUpForm />
      <LoginForm />
      <UserList />
    </>
  );
}

export default App;
