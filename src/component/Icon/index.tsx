import React from "react";
import {
  HighlightOffRounded,
  CheckCircleOutlineRounded,
  SettingsBackupRestoreRounded,
  Facebook,
} from "@mui/icons-material";

export type IconType = {
  name:
    | "HighlightOffRounded"
    | "CheckCircleOutlineRounded"
    | "SettingsBackupRestoreRounded"
    | "Facebook";
};

const findIconByName = (iconName: string) => {
  if (iconName === "HighlightOffRounded") return <HighlightOffRounded />;
  if (iconName === "CheckCircleOutlineRounded")
    return <CheckCircleOutlineRounded />;
  if (iconName === "SettingsBackupRestoreRounded")
    return <SettingsBackupRestoreRounded />;
  if (iconName === "Facebook") return <Facebook />;
  return null;
};

const Icon = (props: IconType) => {
  return <div>{findIconByName(props.name)}</div>;
};

export default Icon;
