import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

interface InputFieldProps<T = Record<string, string>> {
  labelContent: string;
  value?: string;
  field: string;
  setValue: React.Dispatch<React.SetStateAction<T>> | ((updater: (prev: T) => T) => void);
  textArea?: boolean;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const PrimaryInputField = <T extends object>({
  labelContent,
  value = "",
  field,
  setValue,
  textArea = false,
  type = "text",
  placeholder = "",
  required = false,
}: InputFieldProps<T>): React.ReactElement => {
  const [focus, setIsFocused] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    (setValue as (updater: (prev: T) => T) => void)((prev: T) => ({
      ...prev,
      [field]: val,
    }));
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 0.8,
      }}
    >
      <Typography
        component="label"
        htmlFor={field}
        sx={{
          fontSize: "13.5px",
          fontWeight: 600,
          color: "#334155",
        }}
      >
        {labelContent} {required && <span style={{ color: "#ef4444" }}>*</span>}
      </Typography>
      {textArea ? (
        <textarea
          id={field}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
          style={{
            padding: "12px 14px",
            width: "100%",
            backgroundColor: "#ffffff",
            border: focus ? "1.5px solid #c29b38" : "1px solid #cbd5e1",
            borderRadius: "8px",
            outline: "none",
            fontSize: "14px",
            fontFamily: "inherit",
            color: "#1e293b",
            transition: "all 0.2s ease",
            boxShadow: focus ? "0 0 0 3px rgba(194, 155, 56, 0.15)" : "none",
            resize: "vertical",
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={4}
        />
      ) : (
        <input
          type={type}
          id={field}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
          style={{
            padding: "11px 14px",
            width: "100%",
            backgroundColor: "#ffffff",
            border: focus ? "1.5px solid #c29b38" : "1px solid #cbd5e1",
            borderRadius: "8px",
            outline: "none",
            fontSize: "14px",
            fontFamily: "inherit",
            color: "#1e293b",
            transition: "all 0.2s ease",
            boxShadow: focus ? "0 0 0 3px rgba(194, 155, 56, 0.15)" : "none",
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}
    </Box>
  );
};

export default PrimaryInputField;
