import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Title from "../form/Title";
import Submit from "../form/Submit";
import FormContainer from "../form/FormContainer";
import { commonModuleClasses } from "../../utils/theme";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyUserEmail } from "../../api/auth";
import toast from "react-hot-toast";

const OTP_LENGTH = 6;

const isValidOTP = (otp) => {
  let valid = false;
  for (let val of otp){
    valid = !isNaN(parseInt(val))
    if(!valid) break;
  }
  return valid
}

const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [activeOtpIndex, setactiveOtpIndex] = useState(0);
  const inputRef = useRef();

  const { state } = useLocation();

  const user = state?.id;

  const navigate = useNavigate();

  const focusNextInputField = (index) => {
    setactiveOtpIndex(index + 1);
  };
  const focusPreInputField = (index) => {
    let nextIndex;
    const deff = index - 1;
    nextIndex = deff !== 0 ? deff : 0;
    setactiveOtpIndex(nextIndex);
  };

  const handleOtpChange = ({ target }, index) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1, value.length);

    if (!value) focusPreInputField(index);
    else focusNextInputField(index);
    setOtp([...newOtp]);
  };

  const handleKeyDown = (key, index) => {
    if (key === "Backspace") {
      focusPreInputField(index);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!isValidOTP(otp)){
      return toast.error("Invalid OTP");
    }

    const { error, message } = await verifyUserEmail({
      OTP: otp.join(''), 
      userId: user
    })

    if(error) return toast.error(error);

    toast.success(message);
 
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  useEffect(() => {
    if (!user) navigate("/not-found");
  }, [user]);

    return (
      <FormContainer>
        <Container>
          <form onSubmit={handleSubmit} className={commonModuleClasses}>
            <div>
              <Title>Please Enter the OTP to verify your accout</Title>
              <p className="text-center dark:text-dark-subtle text-light-subtle">
                OTP has been sent to your email
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4">
              {otp.map((_, index) => {
                return (
                  <input
                    ref={activeOtpIndex === index ? inputRef : null}
                    type="number"
                    value={otp[index] || ""}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    key={index}
                    className="w-12 h-12 border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary rounded bg-transparent outline-none text-center dark:text-white text-primary font-semibold text-xl spin-button-none"
                  />
                );
              })}
            </div>
            <Submit value="Verify Account" />
          </form>
        </Container>
      </FormContainer>
    );
};

export default EmailVerification;
