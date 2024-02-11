import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import MainBG from "../../../assests/main-bg.png";
import CustomTextField from "../../../components/custom-textfield/CustomTextField";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const initialValues = {
  email: "",
};

const EmailForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${MainBG})`,
      }}
    >
      <Container>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
        >
          <Card
            sx={{
              background: "white",
              borderRadius: "8px",
              p: "50px 30px",
              mb: "20px",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              width:{xl:'1056px'},
              px:{xl:'19rem', lg:'15rem'}
            }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "600",
                fontFamily: "Red Hat Display",
                color: "#697AE2",
                textAlign: "center",
              }}
            >
              Forgot Your Password
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Red Hat Display",
                color: "#565666",
                py: "10px",
                mb: "20px",
                textAlign: "center",
              }}
            >
              Enter your Email and we will send you instructions to reset your
              password.
            </Typography>
            <Grid item xs={12} sx={{mb:'20px'}}>
              <CustomTextField
                label="Email"
                id="email"
                placeholder="Enter your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Link Link to="/new-password">
            <Button
              type="submit"
              fullWidth
              sx={{
                my: "20px",
                py: "12px",
                background: "#697AE2",
                fontWeight: "500",
                textTransform: "none",
                color: "#fff",
                "&:hover": {
                  background: "#5567d4",
                },
              }}
            >
              Continue
            </Button>
            </Link>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default EmailForm;
