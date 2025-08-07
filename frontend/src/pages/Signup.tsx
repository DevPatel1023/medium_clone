import axios from "axios";
import Auth from "../components/Auth"
import Quote from "../components/Quote"
import {} from "@adp_2sdcp/common-medium-clone"
import { useState } from "react";
import type { SignUpInput } from "@adp_2sdcp/common-medium-clone";

import { backend_url } from '../../config'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [inputs, setInputs] = useState<SignUpInput>({
  username: "",
  email: "",
  password: "",
});
const navigate = useNavigate();
const submitData = async () => {
  try {
    const res = await axios.post(`${backend_url}/api/v1/user/signup`, inputs);
    const jwt = res.data.jwt_token;
    localStorage.setItem("token", jwt);
    navigate("/blogs");
  } catch (error: any) {
    console.log("error while signing up", error);
  }
};
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className="flex justify-center items-center">
      <Auth
          type="signup"
          inputs={inputs}
          setInputs={setInputs}
          onSubmit={submitData}
        />
      </div>
      <div className="hidden md:flex h-full">
      <Quote />
      </div>
    </div>
  )
}

export default Signup
