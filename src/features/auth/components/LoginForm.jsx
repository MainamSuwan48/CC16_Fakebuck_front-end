import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import RegisterContainer from "./RegisterContainer";

function LoginForm() {
  return (
    <div>
      <form className="grid gap-4">
        <Input placeholder={"Email address or phone number"} />
        <Input type="password" placeholder={"Password"} />
        <Button bg="blue" color="white" width={"full"}>
          Login
        </Button>
        <hr className="my-4 border"></hr>
      </form>
      <RegisterContainer />
    </div>
  );
}

export default LoginForm;
