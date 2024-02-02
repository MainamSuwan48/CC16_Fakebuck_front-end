import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import LoginForm from "../features/auth/components/LoginForm";

function LoginPage() {
  return (
    <div className="m-auto max-w-sm my-32 p-4 rounded-lg bg-white shadow-lg">
      <LoginForm/>     
    </div>
  );
}

export default LoginPage;
