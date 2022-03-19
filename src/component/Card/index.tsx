import React from "react";
import { Card as MuiCard, styled } from "@mui/material";

const FlexRowCard = styled(MuiCard)({
  display: "flex",
  flexDirection: "column",
  boxShadow: "none",
  border: "1px solid #dbdbdb",
  borderRadius: 1,
});

export interface CardProps {
  children?: React.ReactNode;
}

export const Card = (props: CardProps) => {
  return <FlexRowCard>{props.children}</FlexRowCard>;
};

export default Card;
