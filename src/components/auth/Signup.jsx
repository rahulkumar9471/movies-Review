import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import CustomLink from "../CustomLink";

const Signup = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-4">
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
    </div>
  );
};

export default Signup;
