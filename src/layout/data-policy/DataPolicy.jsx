import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import ScrollToTop from "../../hooks/ScrollToTop";

const PolicyData = [
  {
    id: "1",
    heading: "Introduction",
    detail: `Compliance Sheet ("we," "us," "our") is committed to safeguarding the privacy and security of your data. This Data Policy outlines how we collect, use, store, and protect the data you provide when using our services. By using Compliance Sheet, you agree to the practices described in this policy.`,
  },
  {
    id: "2",
    heading: "Data Collection",
    detail: `We collect and store data necessary for providing our compliance management services. This may include personal information, company details, compliance records, and communication logs. We may also gather technical information such as device and browser details for analytical purposes.`,
  },
  {
    id: "3",
    heading: "Data Usage",
    detail: `We use the collected data to offer, maintain, and improve our services. This includes providing compliance solutions tailored to your industry and function, communicating updates, and enhancing user experience. Your data is utilized solely for compliance-related purposes.`,
  },
  {
    id: "4",
    heading: "Data Security",
    detail: `We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. Our systems are designed to maintain data integrity and prevent breaches. However, no method of transmission or storage is completely secure; thus, we cannot guarantee absolute security.`,
  },
  {
    id: "5",
    heading: "Data Sharing",
    detail: `We do not share your data with third parties except for our trusted partners who assist in providing our services. These partners adhere to strict confidentiality standards. We may also disclose data if required by law or to protect our rights, safety, or that of others.`,
  },
  {
    id: "6",
    heading: "Data Retention",
    detail: `We retain your data as long as needed to provide our services and comply with legal obligations. You can request data deletion at any time, subject to applicable laws and regulations.`,
  },
  {
    id: "7",
    heading: "User Control",
    detail: `You have the right to access, correct, update, or delete your data. You can manage your preferences and communication settings through your account. You can also request a copy of your data or withdraw consent for specific data uses.`,
  },
  {
    id: "8",
    heading: "Cookies and Tracking",
    detail: `We may use cookies and similar technologies to enhance user experience and gather information about how our services are used. You can manage cookie preferences through your browser settings.`,
  },
  {
    id: "9",
    heading: "Updates to the Data Policy",
    detail: `We may update this Data Policy from time to time to reflect changes in laws, regulations, or our services. We will notify you of any significant changes through email or our website.`,
  },
  {
    id: "10",
    heading: "Contact Us",
    detail: `For any inquiries regarding our Data Policy or your data, please contact our Data Protection Officer at [Compliancesheet07@gmail.com].`,
    detail2: `By using Compliance Sheet, you acknowledge and consent to the practices outlined in this Data Policy. Your continued use of our services signifies your acceptance of any changes to this policy.`,
  },
];

const DataPolicy = () => {
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
              Data Policy
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

export default DataPolicy;
