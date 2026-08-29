import emailjs from "@emailjs/browser";

const sendEmail = async (
  serviceId: string,
  templateId: string,
  publicKey: string,
  templateParams: object
) => {
  try {
    emailjs.init(publicKey);
    const response = await emailjs.send(serviceId, templateId, templateParams as Record<string, unknown>);
    console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email sending failed");
  }
};

export default sendEmail;
