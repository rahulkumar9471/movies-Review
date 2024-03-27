import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";
import { commonModuleClasses } from "../../utils/theme";
import FormContainer from "../form/FormContainer";

const Signup = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModuleClasses +" w-72"}>
         <Title>Sign Up</Title>
          <FormInput lable="Name" placeholder="Name" name="name" />
          <FormInput lable="Email" placeholder="Email" name="email" />
          <FormInput lable="Password" placeholder="**********" name="password" />
          <Submit value='sign Up'/>
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
