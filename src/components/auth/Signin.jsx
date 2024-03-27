import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit"; 
import CustomLink from "../CustomLink";  

const Signin = () => {
  
  return (
    <div className="fixed inset-0 dark:bg-primary bg-white -z-10 flex justify-center items-center">
      <Container>
        <form className="dark:bg-secondary bg-white drop-shadow-lg rounded p-6 w-72 space-y-4">
         <Title>Sign In</Title>
          <FormInput lable="Email" placeholder="Email" name="email" />
          <FormInput lable="Password" placeholder="**********" name="password" />
          <Submit value='sign In'/>
          <div className="flex justify-between"> 
            <CustomLink to="/auth/forget-password">Forget Password</CustomLink>
            <CustomLink to="/auth/sign-up">Sign Up</CustomLink> 
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signin;
