import React, { useCallback, useState } from "react";
import { InstagramLogo } from "../../static/png";
import Card from "../../component/Card";
import { Divider, styled } from "@mui/material";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { ILoginUser } from "../../page/Auth";

export interface ILogin {
  loginUser: ILoginUser;
  changeLoginUserData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginWrap = styled(Card)({
  maxWidth: 350,
  width: 350,
});

const Login = ({ loginUser, changeLoginUserData }: ILogin) => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const changeVisiblePassword = useCallback(() => {
    setVisiblePassword(!visiblePassword);
  }, [visiblePassword]);
  return (
    <LoginWrap>
      <InstagramLogo />
      <Input
        value={loginUser.id}
        onChange={changeLoginUserData}
        placeholder={"전화번호,사용자 이름 또는 이메일"}
      />
      <Input
        endAdornment={
          <Button
            text={visiblePassword ? "비밀번호 표시" : "비밀번호 숨기기"}
            onClick={changeVisiblePassword}
          />
        }
        onChange={changeLoginUserData}
        value={loginUser.password}
        placeholder={"비밀번호"}
        type={visiblePassword ? "password" : "text"}
      />
      <Button text={"로그인"} />
      <Divider>또는</Divider>
    </LoginWrap>
  );
};

export default Login;
