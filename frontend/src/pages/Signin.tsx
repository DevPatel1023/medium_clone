import type { SignInInput } from "@adp_2sdcp/common-medium-clone";
import Auth from "../components/Auth";
import Quote from "../components/Quote";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [inputs, setInputs] = useState<SignInInput>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const submitData = async () => {
    try {
      const res = await axios.post(`{backend_url}/api/v1/user/signin`, inputs);
      const jwt = res.data.jwt_token;
      localStorage.setItem("token",jwt);
      navigate("/blog");
    } catch (error) {
      console.log("error while signing in");
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
