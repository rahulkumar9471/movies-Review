import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";
import { commonModuleClasses } from "../../utils/theme";
import FormContainer from "../form/FormContainer";
import { createUser } from "../../api/auth";
import toast from "react-hot-toast";


const validateUserInfo = ({ name, email, mobile, password }) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidName = /^[a-z A-Z]+$/;
  const isValidMobile = /^\d{10}$/;

  if (!name.trim()) return { ok: false, error: "Name is missing!" };
  if (!isValidName.test(name)) return { ok: false, error: "Invalid Name!" };

  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (!isValidEmail.test(email)) return { ok: false, error: "Invalid email!" };

  if (!mobile.trim()) return { ok: false, error: "Mobile No. is missing!" };
  if (!isValidMobile.test(mobile.trim()))
    return {
      ok: false,
      error: "Invalid mobile number! Please enter a 10-digit number.",
    };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 Characters!" };

  return { ok: true };
};



const Signup = () => {
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate()
  const { name, email, mobile, password } = userinfo;

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserinfo({ ...userinfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userinfo);

    if (!ok) return toast.error(error);

    var response = await createUser(userinfo);

    if (response.error) return toast.error(response.error);

    navigate('/auth/verification', {
      state: response.user,
      replace: true
    })
    
  };

  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModuleClasses + " w-96"}>
          <Title>Sign Up</Title>
          <FormInput
            lable="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <FormInput
            lable="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <FormInput
            lable="Mobile No."
            placeholder="Mobile No."
            name="mobile"
            value={mobile}
            onChange={handleChange}
          />
          <FormInput
            lable="Password"
            type="password"
            placeholder="**********"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
          />
          <Submit value="sign Up" />
          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget Password</CustomLink>
            <CustomLink to="/auth/sign-in">Sign In</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};

export default Signup;
