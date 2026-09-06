import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  content: string;
  fontsize?: number | string;
  btnpadding?: string;
  btnwidth?: string;
  onClick?: () => void;
  variant?: "contained" | "outlined" | "gold" | "outlined-white";
  to?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  content,
  fontsize = 14,
  btnpadding = "10px 20px",
  btnwidth,
  onClick,
  variant = "contained",
  to,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    } else {
      navigate("/contact");
    }
  };

  const isGold = variant === "gold";
  const isOutlined = variant === "outlined";
  const isOutlinedWhite = variant === "outlined-white";

  let bgColor = "#1e293b";
  let textColor = "#ffffff";
  let borderColor = "none";
  let hoverBg = "#0f172a";
  let hoverText = "#ffffff";
  let hoverBorder = "none";

  if (isGold) {
    bgColor = "#c29b38";
    textColor = "#ffffff";
    borderColor = "1.5px solid #c29b38";
    hoverBg = "#a8832a";
    hoverText = "#ffffff";
    hoverBorder = "1.5px solid #a8832a";
  } else if (isOutlinedWhite) {
    bgColor = "rgba(255, 255, 255, 0.08)";
    textColor = "#ffffff";
    borderColor = "1.5px solid #ffffff";
    hoverBg = "#ffffff";
    hoverText = "#0f172a";
    hoverBorder = "1.5px solid #ffffff";
  } else if (isOutlined) {
    bgColor = "transparent";
    textColor = "#1e293b";
    borderColor = "1.5px solid #cbd5e1";
    hoverBg = "#f8fafc";
    hoverText = "#0f172a";
    hoverBorder = "1.5px solid #94a3b8";
  }

  return (
    <Button
      onClick={handleClick}
      sx={{
        my: 1,
        p: btnpadding,
        fontWeight: 600,
        letterSpacing: "0.02em",
        fontSize: fontsize,
        textTransform: "none",
        backgroundColor: bgColor,
        color: textColor,
        border: borderColor,
        lineHeight: 1.4,
        borderRadius: "8px",
        backdropFilter: isOutlinedWhite ? "blur(6px)" : "none",
        boxShadow: isOutlined || isOutlinedWhite ? "none" : "0 2px 8px rgba(0,0,0,0.08)",
        transition: "all 0.2s ease-in-out",
        ":hover": {
          backgroundColor: hoverBg,
          color: hoverText,
          border: hoverBorder,
          transform: "translateY(-1px)",
          boxShadow: isOutlinedWhite ? "0 4px 16px rgba(0,0,0,0.25)" : isOutlined ? "none" : "0 4px 14px rgba(0,0,0,0.15)",
        },
        width: btnwidth,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {content}
    </Button>
  );
};

export default PrimaryButton;
