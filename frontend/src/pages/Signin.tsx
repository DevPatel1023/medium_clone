import type { SignInInput } from "@adp_2sdcp/common-medium-clone";
import Auth from "../components/Auth";
import Quote from "../components/Quote";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { backend_url } from "../../config";

const Signin = () => {
  const [inputs, setInputs] = useState<SignInInput>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitData = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    
    if (!inputs.email || !inputs.password) {
      console.error("All fields are required");
      return;
    }

    try {
      const res = await axios.post(`${backend_url}/api/v1/user/signin`, {
        email: inputs.email,
        password: inputs.password,
      });
      
      const jwt = res.data.jwt_token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error: any) {
      console.log("Error while signing in:", error);
      // Add better error handling
      if (error.response) {
        console.log("Server response:", error.response.data);
        console.log("Status:", error.response.status);
      }
    }
  };

  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="flex justify-center items-center">
        <Auth
          type="signin"
          inputs={inputs}
          setInputs={setInputs}
          onSubmit={submitData}
        />
      </div>
      <div className="hidden md:flex h-full">
        <Quote />
      </div>
    </div>
  );
};

export default Signin;