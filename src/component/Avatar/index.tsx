import React from "react";
import { Avatar, styled } from "@mui/material";

type AvatarProps = {
  size?: number;
};

const Container = ({ size = 36 }: AvatarProps) => {
  return (
    <Avatar
      style={{ width: size, height: size }}
      src={"https://mui.com/static/images/avatar/1.jpg"}
    />
  );
};

export default Container;
