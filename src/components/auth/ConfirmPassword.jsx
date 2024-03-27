import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import Submit from "../form/Submit";
import FormInput from "../form/FormInput";

const ConfirmPassword = () => {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-96 space-y-4">
          <Title>Enter New Password</Title>
          <FormInput lable="New Password" placeholder="********" name="Password" type="password" />
          <FormInput lable="Confirm Password" placeholder="********" name="confirmPassword" type="password" />
          <Submit value="Confirm Password" />
       
        </form>
      </Container>
    </div>
  );
};

export default ConfirmPassword;
