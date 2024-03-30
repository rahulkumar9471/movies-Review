import React, { useState } from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";
import { commonModuleClasses } from "../../utils/theme";
import FormContainer from "../form/FormContainer";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks";

const validateUserInfo = ({ email, password }) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email.trim()) return { ok: false, error: "Email is missing!" };
  if (!isValidEmail.test(email)) return { ok: false, error: "Invalid email!" };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 Characters!" };

  return { ok: true };
};

const Signin = () => {
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  });

  const { handleLogin, authInfo } = useAuth();

  console.log(authInfo);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserinfo({ ...userinfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userinfo);

    if (!ok) return toast.error(error);

    handleLogin(userinfo.email, userinfo.password);
  };

  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModuleClasses + " w-96"}>
          <Title>Sign In</Title>
          <FormInput
            value={userinfo.email}
            onChange={handleChange}
            lable="Email"
            placeholder="Email"
            name="email"
            type="email"
          />
          <FormInput
            type="password"
            value={userinfo.password}
            onChange={handleChange}
            lable="Password"
            placeholder="**********"
            name="password"
          />
          <Submit value="sign In" />
          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget Password</CustomLink>
            <CustomLink to="/auth/sign-up">Sign Up</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};

export default Signin;
