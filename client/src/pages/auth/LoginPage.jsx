import React from "react";
import LoginForm from "../../components/auth/LoginForm.jsx";
import joshuaImage from "../../assets/joshua.png";
import starrynight from "../../assets/starrynight.jpg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen p-10 bg-purple-200"
      style={{
        backgroundImage: `url(${starrynight})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex gap-5 p-10 bg-white rounded-xl shadow-xl max-w-5xl w-full h-[80vh]">
        <div className="flex flex-col items-center justify-center w-1/2 gap-6">
          <LoginForm />
          <Link to="/signup" className="btn btn-primary w-3/4">
            Don’t Have an Account? Sign Up Here
          </Link>
        </div>

        <div className="w-1/2 h-full">
          <img
            src={joshuaImage}
            alt="Joshua Tree"
            className="object-cover w-full h-full rounded-xl shadow-xl transition-transform duration-500 grayscale hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
