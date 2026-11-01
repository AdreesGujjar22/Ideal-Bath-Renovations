import { useState } from "react";
import { Box } from "@mui/material";
import { Mail, MessageCircle, Phone, X } from "lucide-react";

const ContactQuickActions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonSx = {
    width: 56,
    height: 56,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.24)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    "&:hover": {
      transform: "scale(1.06)",
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
    },
    "&:focus-visible": { outline: "3px solid #2563eb", outlineOffset: 3 },
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: 16, sm: 24 },
        bottom: { xs: 16, sm: 24 },
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.25,
      }}
    >
      {isOpen && (
        <>
          <Box
            component="a"
            href="https://wa.me/16722730434"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            sx={{ ...buttonSx, backgroundColor: "#20c76a", textDecoration: "none" }}
          >
            <MessageCircle size={29} strokeWidth={2.2} />
          </Box>
          <Box
            component="a"
            href="mailto:info@idealbathrenovations.ca"
            aria-label="Email Ideal Bath Renovations"
            sx={{ ...buttonSx, backgroundColor: "#ed365c", textDecoration: "none" }}
          >
            <Mail size={27} strokeWidth={2.2} />
          </Box>
          <Box
            component="a"
            href="tel:16722730434"
            aria-label="Call Ideal Bath Renovations"
            sx={{ ...buttonSx, backgroundColor: "#10b981", textDecoration: "none" }}
          >
            <Phone size={27} fill="currentColor" strokeWidth={1.5} />
          </Box>
        </>
      )}
      <Box
        component="button"
        type="button"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        sx={{
          ...buttonSx,
          border: 0,
          p: 0,
          backgroundColor: "#000000",
          font: "inherit",
        }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={29} strokeWidth={1.8} />}
      </Box>
    </Box>
  );
};

export default ContactQuickActions;
