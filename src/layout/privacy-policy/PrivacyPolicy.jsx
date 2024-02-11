import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import ScrollToTop from "../../hooks/ScrollToTop";

const PolicyData = [
  {
    id: "1",
    heading: "Introduction",
    detail: `Welcome to Compliance Sheet ("we," "us," "our"). This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our services. We are dedicated to respecting your privacy and ensuring the security of your data. By using Compliance Sheet, you agree to the practices described in this Privacy Policy.`,
  },
  {
    id: "2",
    heading: "Information We Collect",
    detail: `We collect information you provide when using our services, including personal information, company details, compliance records, and communication logs. We may also gather technical information such as device and browser details for analytical purposes.`,
  },
  {
    id: "3",
    heading: "How We Use Your Information",
    detail: `We use the collected information to provide and improve our compliance management services. This includes offering tailored compliance solutions, communicating updates, and enhancing user experience. Your data is used solely for compliance-related purposes.`,
  },
  {
    id: "4",
    heading: "Data Sharing and Disclosure",
    detail: `We do not share your personal information with third parties except for our trusted partners who assist in providing our services. These partners adhere to strict confidentiality standards. We may also disclose information if required by law or to protect our rights, safety, or that of others.`,
  },
  {
    id: "5",
    heading: "Data Security",
    detail: `We prioritize the security of your information and employ industry-standard measures to protect it from unauthorized access, alteration, or disclosure. However, no method of transmission or storage is entirely secure; thus, we cannot guarantee absolute security.`,
  },
  {
    id: "6",
    heading: "Your Rights and Choices",
    detail: `You have the right to access, correct, update, or delete your personal information. You can manage your preferences and communication settings through your account. You can also request a copy of your data or withdraw consent for specific data uses.`,
  },
  {
    id: "7",
    heading: "Cookies and Tracking",
    detail: `We may use cookies and similar technologies to enhance user experience and gather information about how our services are used. You can manage cookie preferences through your browser settings.`,
  },
  {
    id: "8",
    heading: "Children's Privacy",
    detail: `Compliance Sheet is not intended for children under the age of 13. We do not knowingly collect personal information from individuals under 13 years of age.`,
  },
  {
    id: "9",
    heading: "Updates to the Data Policy",
    detail: `We may update this Privacy Policy to reflect changes in laws, regulations, or our services. We will notify you of any significant changes through email or our website.`,
  },
  {
    id: "10",
    heading: "Contact Us",
    detail: `For any inquiries regarding our Privacy Policy or your personal information, please contact our Data Protection Officer at [Compliancesheet07@gmail.com].`,
    detail2: `By using Compliance Sheet, you acknowledge and consent to the practices outlined in this Privacy Policy. Your continued use of our services signifies your acceptance of any changes to this policy.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <>
    <ScrollToTop/>
      <NavBar />
      <Container>
        <Grid container justifyContent={"center"}>
          <Card
            sx={{
              width: "100%",
              background: "#F0F2FC",
              p: { md: "50px", xs: "10px" },
              borderRadius: "15px",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              mb: "40px",
            }}
          >
            <Typography
              className={`item-center font-size-on-small`}
              sx={{
                fontSize: "48px",
                fontWeight: "700",
                fontFamily: "Red Hat Display",
                color: "#697AE2",
                textAlign: "center",
                pb: "20px",
              }}
            >
              Privacy Policy
            </Typography>
            <Box height={"100%"} width={"100%"} padding={"20px 0"}>
              {PolicyData?.map((item ,index) => {
                return (
                  <Box key={index}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        fontFamily: "Red Hat Display",
                        color: "#565666",
                        py: "10px",
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "400",
                        fontFamily: "Red Hat Display",
                        color: "#565666",
                        mb: "10px",
                      }}
                    >
                      {item.detail}
                    </Typography>
                    {item.id === 10 || (
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "400",
                          fontFamily: "Red Hat Display",
                          color: "#565666",
                          mb: "10px",
                        }}
                      >
                        {item.detail2}
                      </Typography>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Card>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
