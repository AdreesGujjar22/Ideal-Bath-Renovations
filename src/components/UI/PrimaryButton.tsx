import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  content: string;
  fontsize?: number | string;
  btnpadding?: string;
  btnwidth?: string;
  onClick?: () => void;
  variant?: "contained" | "outlined" | "gold";
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
        backgroundColor: isGold ? "#c29b38" : isOutlined ? "transparent" : "#1e293b",
        color: isOutlined ? "#1e293b" : "#ffffff",
        border: isOutlined ? "1.5px solid #1e293b" : isGold ? "1.5px solid #c29b38" : "none",
        lineHeight: 1.4,
        borderRadius: "8px",
        boxShadow: isOutlined ? "none" : "0 2px 8px rgba(0,0,0,0.08)",
        transition: "all 0.2s ease-in-out",
        ":hover": {
          backgroundColor: isGold ? "#a8832a" : isOutlined ? "#f1f5f9" : "#0f172a",
          transform: "translateY(-1px)",
          boxShadow: isOutlined ? "none" : "0 4px 14px rgba(0,0,0,0.15)",
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
