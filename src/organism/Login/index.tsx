import React from "react";
import { InstagramLogo } from "../../static/png";
import Card from "../../component/Card";
import { Divider, styled } from "@mui/material";
import { ButtonInsideTextBox, DefaultTextBox } from "../../component/Input";
import Button from "../../component/Button";

const LoginWrap = styled(Card)({
  maxWidth: "350px",
});

const Login = () => {
  return (
    <LoginWrap>
      <InstagramLogo />
      <DefaultTextBox
        value={""}
        placeholder={"전화번호,사용자 이름 또는 이메일"}
      />
      <ButtonInsideTextBox
        endAdornment={<Button text={"숨기기"} />}
        value={""}
      />
      <Button text={"로그인"} />
      <Divider>또는</Divider>
    </LoginWrap>
  );
};

export default Login;
