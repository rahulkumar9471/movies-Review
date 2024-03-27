import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit"; 
import CustomLink from "../CustomLink";
import FormContainer from "../form/FormContainer";
import { commonModuleClasses } from "../../utils/theme";


const ForgetPassword = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModuleClasses +" w-96"}>
          <Title>Please Enter Your Email</Title>
          <FormInput lable="Email" placeholder="Email" name="email" />
           
          <Submit value="Send Link" />
          <div className="flex justify-between">
            <CustomLink to="/auth/sign-in">Sign In</CustomLink>
            <CustomLink to="/auth/sign-up">Sign Up</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};

export default ForgetPassword;
