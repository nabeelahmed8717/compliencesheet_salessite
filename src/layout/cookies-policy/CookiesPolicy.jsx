import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import ScrollToTop from "../../hooks/ScrollToTop";

const PolicyData = [
  {
    id: "1",
    heading: "Introduction",
    detail: `Welcome to Compliance Sheet ("we," "us," "our"). This Cookie Policy explains how we use cookies and similar technologies on our website and services. By using Compliance Sheet, you agree to the use of cookies as described in this policy.`,
  },
  {
    id: "2",
    heading: "What Are Cookies?",
    detail: `Cookies are small text files that are placed on your device when you visit a website. They help websites remember your actions and preferences over time, allowing for improved user experience.`,
  },
  {
    id: "3",
    heading: "How We Use Cookies",
    detail: `We use cookies to enhance and personalize your experience on Compliance Sheet. These cookies may collect information about your device, browser, and interactions with our website. Cookies also enable us to analyze website traffic and improve our services.`,
  },
  {
    id: "4",
    heading: "Types of Cookies We Use",
    detail: `Essential Cookies: These cookies are necessary for the functioning of our website. They enable you to navigate our site and use its features securely.`,
    detail2: `Performance and Analytics Cookies: These cookies help us understand how visitors interact with our website. They collect information about page visits, traffic sources, and user behavior, which aids us in improving our services.`,
    detail3: `Functional Cookies: These cookies allow our website to remember your preferences and settings, providing a more personalized experience.`,
    detail4: `Targeting and Advertising Cookies: These cookies may be set through our website by advertising partners. They may be used to build a profile of your interests and show you relevant ads on other websites.`,
  },
  {
    id: "5",
    heading: "Managing Cookies",
    detail: `You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, please note that blocking cookies may affect your experience on our website.`,
  },
  {
    id: "6",
    heading: "Your Consent",
    detail: `By continuing to use Compliance Sheet, you consent to the use of cookies as outlined in this policy. You can change your cookie preferences at any time through your browser settings.`,
  },
  {
    id: "7",
    heading: "Updates to the Cookie Policy",
    detail: `We may update this Cookie Policy to reflect changes in laws, regulations, or our services. We will notify you of any significant changes through our website.`,
  },
  {
    id: "8",
    heading: "Contact Us",
    detail: `For any inquiries regarding our Cookie Policy, please contact us at [Compliancesheet07@gmail.com].`,
    detail2: `By using Compliance Sheet, you acknowledge and consent to the use of cookies as described in this Cookie Policy.`,
  },
];

const CookiesPolicy = () => {
  return (
    <>
      <ScrollToTop />
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
              Cookies Policy
            </Typography>
            <Box height={"100%"} width={"100%"} padding={"20px 0"}>
              {PolicyData?.map((item , index) => {
                return (
                  <div key={index}>
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
                    {item.id === 8 || item.id === 4 || (
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
                    {item.id === 4 || (
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "400",
                          fontFamily: "Red Hat Display",
                          color: "#565666",
                          mb: "10px",
                        }}
                      >
                        {item.detail3}
                      </Typography>
                    )}
                    {item.id === 4 || (
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "400",
                          fontFamily: "Red Hat Display",
                          color: "#565666",
                          mb: "10px",
                        }}
                      >
                        {item.detail4}
                      </Typography>
                    )}
                  </div>
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

export default CookiesPolicy;
