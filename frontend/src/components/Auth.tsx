import { Link } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";
import type { SignUpInput } from "@adp_2sdcp/common-medium-clone";
import Button from "./Button";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [userInputs, setUserInputs] = useState<SignUpInput>({
    username: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex justify-center flex-col space-y-2">
      <h1 className="text-4xl font-bold">Create an account</h1>
      <p className="text-gray-600">
        Already have an account?{" "}
        <Link to="/signin" className=" hover:text-blue-500 underline ">
          Login
        </Link>
      </p>

      {/* inputs */}
      <Input
        label="Name"
        type="text"
        placeholder="jhondoe"
        value={userInputs.username}
        onChange={(e) =>
          setUserInputs((c) => ({
            ...c,
            username: e.target.value,
          }))
        }
      />
      <Input
        label="Email"
        type="email"
        placeholder="jhondoe123@gmail.com"
        value={userInputs.email}
        onChange={(e) =>
          setUserInputs((c) => ({
            ...c,
            email: e.target.value,
          }))
        }
      />
      <Input
        label="password"
        type="text"
        placeholder="********"
        value={userInputs.password}
        onChange={(e) => setUserInputs((c)=>({
          ...c,
          password : e.target.value}))
        }
      />

      {/* submit button */}
      <Button>Submit</Button>
    </div>
  );
};

export default Auth;
