import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

import type { AuthProps } from "../types/AuthProps";

const Auth = ({ type, inputs, setInputs, onSubmit }: AuthProps) => {
  return (
    <div className="flex flex-col w-full max-w-md mx-auto px-4 space-y-4">
      <h1 className="text-4xl font-bold">
        {type === "signup" ? "Create an account" : "Login"}
      </h1>
      <p className="text-gray-600">
        {type === "signup"
          ? "Already have an account?"
          : "Don't have an account?"}{" "}
        <Link
          to={type === "signup" ? "/signin" : "/signup"}
          className="hover:text-blue-500 underline"
        >
          {type === "signup" ? "Sign in" : "Sign up"}
        </Link>
      </p>

      <div className="py-5">
        {type === "signup" && (
          <Input
            label="Name"
            type="text"
            placeholder="jhondoe"
            value={inputs.username || ""}
            onChange={(e) =>
              setInputs((c: any) => ({ ...c, username: e.target.value }))
            }
          />
        )}
        <Input
          label="Email"
          type="email"
          placeholder="jhondoe123@gmail.com"
          value={inputs.email}
          onChange={(e) =>
            setInputs((c: any) => ({ ...c, email: e.target.value }))
          }
        />
        <Input
          label="Password"
          type="password"
          placeholder="********"
          value={inputs.password}
          onChange={(e) =>
            setInputs((c: any) => ({ ...c, password: e.target.value }))
          }
        />
      </div>

      <Button onSubmit={onSubmit}>
        {type === "signin" ? "Sign in" : "Sign up"}
      </Button>
    </div>
  );
};

export default Auth;
