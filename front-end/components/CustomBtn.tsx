import { buttonProps } from "@/types";
import React from "react";

export const CustomBtn = ({ title, style }: buttonProps) => {
  return <button className={style}>{title}</button>;
};
