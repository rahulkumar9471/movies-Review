import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit"; 
import CustomLink from "../CustomLink";


const ForgetPassword = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-96 space-y-4">
          <Title>Please Enter Your Email</Title>
          <FormInput lable="Email" placeholder="Email" name="email" />
           
          <Submit value="Send Link" />
          <div className="flex justify-between">
            <CustomLink to="/auth/sign-in">Sign In</CustomLink>
            <CustomLink to="/auth/sign-up">Sign Up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ForgetPassword;
