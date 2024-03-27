import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import Submit from "../form/Submit";
import FormInput from "../form/FormInput";
import FormContainer from "../form/FormContainer";
import { commonModuleClasses } from "../../utils/theme";

const ConfirmPassword = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModuleClasses +" w-96"}>
          <Title>Enter New Password</Title>
          <FormInput lable="New Password" placeholder="********" name="Password" type="password" />
          <FormInput lable="Confirm Password" placeholder="********" name="confirmPassword" type="password" />
          <Submit value="Confirm Password" />
       
        </form>
      </Container>
    </FormContainer>
  );
};

export default ConfirmPassword;
