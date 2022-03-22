import React from "react";
import { styled } from "@mui/material";
import Card from "../../component/Card";
import { InstagramLogo } from "../../static/png";
import Input from "../../component/Input";

const JoinWrap = styled(Card)({
  maxWidth: 350,
});
const Join = () => {
  return (
    <JoinWrap>
      <InstagramLogo />
    </JoinWrap>
  );
};

export default Join;
