import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit"; 
import CustomLink from "../CustomLink";  
import { commonModuleClasses } from "../../utils/theme";
import FormContainer from "../form/FormContainer";

const Signin = () => {
  
  return (
    <FormContainer>
      <Container>
        <form className={commonModuleClasses +" w-72"}>
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
    </FormContainer>
  );
};

export default Signin;
