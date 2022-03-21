import React, { useCallback, useState } from "react";
import Login from "../../organism/Login";
import Card from "../../component/Card";
import Button from "../../component/Button";

export interface ILoginUser {
  id: string;
  password: string;
}
const AuthPage = () => {
  const [loginUser, setLoginUser] = useState<ILoginUser>({
    id: "",
    password: "",
  });
  const [authState, setAuthState] = useState<boolean>(true);

  const changeLoginUserData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    },
    [loginUser]
  );

  const toggleLoginOrJoin = useCallback(() => {
    setAuthState(!authState);
  }, [authState]);

  return (
    <div>
      <div>
        {authState ? (
          <Login
            changeLoginUserData={changeLoginUserData}
            loginUser={loginUser}
          />
        ) : (
          <div>회원가입</div>
        )}
      </div>
      <div>
        <Card>
          <Button
            variant={"text"}
            text={authState ? "로그인" : "회원가입"}
            onClick={toggleLoginOrJoin}
          />
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
