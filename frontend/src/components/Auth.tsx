import { Link } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        placeholder="jhondoe123@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="password"
        type="text"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default Auth;
