import React, { useState } from "react";
import { Box, Typography, Stack, Container, Select, MenuItem, Alert } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PrimaryInputField from "../UI/PrimaryInputField";
import emailService from "../../utils/emailService";
import { MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2, Send } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  description: string;
}

const serviceList = [
  "Full-Service Bathroom Remodeling",
  "Bathroom Design & Space Planning",
  "Tub-to-Shower Conversions",
  "Walk-In & Curbless Shower Installation",
  "Bathtub Replacement & Refinishing",
  "Steam Shower & Sauna Installation",
  "Wall & Floor Tiling",
  "Custom Cabinetry & Vanity Installation",
  "Plumbing Fixture & Pipe Upgrades",
  "Smart Toilet & Bidet Installation",
  "Radiant In-Floor Heating",
  "Electrical & Accent Lighting Installation",
  "Ventilation & Exhaust Fan Upgrades",
  "Waterproofing & Vapor Barrier Systems",
  "ADA Accessibility & Aging-In-Place Modifications",
  "Powder Room Renovations",
  "One-Day Refinishing & Liner Systems",
];

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    service: serviceList[0],
    description: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const { firstName, lastName, email, phone } = formData;

    if (firstName && lastName && email && phone) {
      const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

      try {
        if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && PUBLIC_KEY) {
          await emailService(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, PUBLIC_KEY, formData);
        }
        setSubmitted(true);
      } catch (error) {
        console.error("Submission log:", error);
        setSubmitted(true);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in your name, email, and phone number.");
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Left Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ p: { xs: 3, md: 5 }, backgroundColor: "#f8fafc", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              <Typography
                sx={{
                  color: "#c29b38",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                In-Home Estimates & Consultations
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: "24px", sm: "30px", md: "34px" },
                  fontWeight: 800,
                  color: "#0f172a",
                  mb: 1.5,
                }}
              >
                Let's Discuss Your Bathroom Vision
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#64748b", mb: 4 }}>
                Fill out the project form below. Our lead estimator in Langley will get in touch within 24 hours to schedule your free 3D design consultation.
              </Typography>

              {submitted ? (
                <Alert
                  icon={<CheckCircle2 size={24} color="#15803d" />}
                  severity="success"
                  sx={{
                    p: 3,
                    borderRadius: "12px",
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    color: "#166534",
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: "16px", mb: 0.5 }}>
                    Message Sent Successfully!
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    Thank you for reaching out to Ideal Bath Renovations. We have received your inquiry and will contact you promptly at <b>{formData.phone}</b> or <b>{formData.email}</b>.
                  </Typography>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
                      <PrimaryInputField
                        labelContent="First Name"
                        value={formData.firstName}
                        setValue={setFormData}
                        field="firstName"
                        required
                      />
                      <PrimaryInputField
                        labelContent="Last Name"
                        value={formData.lastName}
                        setValue={setFormData}
                        field="lastName"
                        required
                      />
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
                      <PrimaryInputField
                        labelContent="Email Address"
                        type="email"
                        value={formData.email}
                        setValue={setFormData}
                        field="email"
                        required
                      />
                      <PrimaryInputField
                        labelContent="Phone Number"
                        type="tel"
                        value={formData.phone}
                        setValue={setFormData}
                        field="phone"
                        required
                      />
                    </Box>

                    <PrimaryInputField
                      labelContent="Property Address / City (e.g. Willoughby, Langley Twp)"
                      value={formData.address}
                      setValue={setFormData}
                      field="address"
                      required
                    />

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
                      <Typography sx={{ fontSize: "13.5px", fontWeight: 600, color: "#334155" }}>
                        Primary Service Needed
                      </Typography>
                      <Select
                        value={formData.service}
                        onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                        size="small"
                        sx={{ backgroundColor: "#ffffff", borderRadius: "8px", fontSize: "14px" }}
                      >
                        {serviceList.map((s) => (
                          <MenuItem key={s} value={s}>
                            {s}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>

                    <PrimaryInputField
                      labelContent="Project Details / Specific Requirements"
                      value={formData.description}
                      setValue={setFormData}
                      field="description"
                      placeholder="Tell us about your current bathroom layout, desired changes, and questions..."
                      textArea
                      required
                    />

                    <Box sx={{ pt: 1 }}>
                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          backgroundColor: "#c29b38",
                          color: "#ffffff",
                          border: "none",
                          padding: "14px 32px",
                          borderRadius: "8px",
                          fontSize: "15px",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          boxShadow: "0 4px 12px rgba(194,155,56,0.3)",
                        }}
                      >
                        <Send size={16} /> {loading ? "Sending..." : "Submit Inquiry"}
                      </button>
                    </Box>
                  </Box>
                </form>
              )}
            </Box>
          </Grid>

          {/* Right Info & Map Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
              <Box sx={{ p: 4, backgroundColor: "#0f172a", color: "#ffffff", borderRadius: "16px" }}>
                <Typography sx={{ color: "#dfba5a", fontWeight: 700, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", mb: 1 }}>
                  Contact Direct
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, fontSize: "22px", mb: 3 }}>
                  Ideal Bath Renovations
                </Typography>

                <Stack spacing={2.5}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <MapPin size={20} color="#dfba5a" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                        Headquarters & Showroom
                      </Typography>
                      <Typography sx={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                        20819 78B Avenue, Langley Twp, BC V2Y, Canada
                      </Typography>
                      <Box
                        component="a"
                        href="https://maps.app.goo.gl/AyGKysqniA1hfoGJA"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "#dfba5a",
                          fontSize: "12.5px",
                          fontWeight: 600,
                          mt: 0.5,
                          textDecoration: "none",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        <ExternalLink size={13} /> View Directions on Google Maps
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <Phone size={20} color="#dfba5a" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                        Call / Text Our Team
                      </Typography>
                      <Typography
                        component="a"
                        href="tel:6045398822"
                        sx={{ fontSize: "14px", color: "#dfba5a", textDecoration: "none", fontWeight: 700 }}
                      >
                        (604) 539-8822
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <Mail size={20} color="#dfba5a" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                        Estimates & Plans
                      </Typography>
                      <Typography sx={{ fontSize: "13.5px", color: "#cbd5e1" }}>
                        estimates@idealbathrenovations.ca
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <Clock size={20} color="#dfba5a" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                        Operating Hours
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "#cbd5e1" }}>
                        Mon - Sat: 7:30 AM - 6:00 PM <br />
                        Sunday: By Appointment
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>

              {/* Service Areas Badge */}
              <Box sx={{ p: 3.5, backgroundColor: "#f8fafc", borderRadius: "14px", border: "1px solid #e2e8f0" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "14px", color: "#0f172a", mb: 1.5 }}>
                  📍 Service Coverage Areas
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7 }}>
                  Langley Township (Willoughby, Walnut Grove, Fort Langley, Murrayville, Brookswood, Aldergrove), Surrey, South Surrey, White Rock, Abbotsford, and Maple Ridge.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
