import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CustomTextField from "../../components/custom-textfield/CustomTextField";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
 
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [status, setStatus] = useState("");
  const [open, setOpen] = React.useState(false);
    const vertical = "top";
    const horizontal = "center";

    const handleClose = () => {
      setOpen(false);
    };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
       values.business_name = "Compliance Sheet";
      try {
        const response = await axios.post(
          "https://jobs.orcaloholding.co.uk/api/sale-site/signup",
          values
        );
        console.log("RESPONSE", response)
        setStatus(response.data.status);
        setOpen(true);
      } catch (error) {
        console.error("API Error:", error);
      }
      resetForm();
    },
  });

  const fieldStyles = {
    root: {
      color: "#565666",
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "Red Hat Display",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "0px",
      },
      "& .MuiOutlinedInput-root": {
        border: "2px solid #C6D7FF",
        borderRadius: "8px",
        marginTop: "10px",
        "&.Mui-error": {
          border: "1.5px solid red",
        },
        "&:after": {
          borderColor: "#C6D7FF",
        },
        "&.Mui-error:after": {
          borderColor: "#C6D7FF",
        },
        "&.Mui-error:before": {
          borderColor: "#C6D7FF !important",
        },
        "& .MuiInputBase-input": {
          paddingLeft: "15px",
          paddingBottom: "10px",
        },
      },
    },
  };

  const labelStyles = {
    fontFamily: "Red Hat Display",
    color:
      formik.touched.password && formik.errors.password ? "red" : "#565666",
    fontWeight:
      formik.touched.password && formik.errors.password ? "600" : "400",
    marginLeft: "5px",
  };

  const inputProps = {
    style: {
      padding: "10px 16px",
    },
  };

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Card
          sx={{
            background: "white",
            borderRadius: "8px",
            p: "50px 30px",
            mb: "20px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: "600",
              fontFamily: "Red Hat Display",
              color: "#697AE2",
            }}
          >
            Sign Up
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Red Hat Display",
              color: "#565666",
              py: "10px",
              mb: "20px",
            }}
          >
            Get started with your account
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <CustomTextField
                label="First Name"
                id="first_name"
                placeholder="Enter your First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={formik.touched.first_name && formik.errors.first_name}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CustomTextField
                label="Last Name"
                id="last_name"
                placeholder="Enter your Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ my: "10px" }}
          >
            <Grid item md={12} xs={12}>
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
            {/* <Grid item md={6} xs={12}>
              <CustomTextField
                label="Phone Number"
                id="phoneNumber"
                placeholder="Enter your Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </Grid> */}
          </Grid>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ my: "10px" }}
          >
            <Grid item md={6} xs={12} sx={{ mb: "15px" }}>
              <label style={labelStyles}>Password</label>
              <TextField
                fullWidth
                sx={{
                  ...fieldStyles.root,
                  "& .MuiInputBase-root:hover": {
                    backgroundColor: "#F0F2FC",
                  },
                }}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your Password"
                inputProps={inputProps}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps("password")}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item md={6} xs={12} sx={{ mb: "15px" }}>
              <label style={labelStyles}>Confirm Password</label>
              <TextField
                fullWidth
                sx={{
                  ...fieldStyles.root,
                  "& .MuiInputBase-root:hover": {
                    backgroundColor: "#F0F2FC",
                  },
                }}
                type={showPassword ? "text" : "password"}
                id="password_confirmation"
                placeholder="Confirm your Password"
                inputProps={inputProps}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle visibility"
                        onClick={() =>
                          setShowPasswordConfirm(!showPasswordConfirm)
                        }
                        edge="end"
                      >
                        {showPasswordConfirm ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps("password_confirmation")}
                error={
                  formik.touched.password_confirmation &&
                  Boolean(formik.errors.password_confirmation)
                }
                helperText={
                  formik.touched.password_confirmation &&
                  formik.errors.password_confirmation
                }
              />
            </Grid>
          </Grid>

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
            Sign Up
          </Button>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "Red Hat Display",
              color: "#565666",
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <b
              style={{
                fontWeight: "500",
                fontFamily: "Red Hat Display",
                color: "#697AE2",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              <Link
                Link
                to="/sign-in"
                style={{ textDecoration: "none", color: "#697AE2" }}
              >
                Sign In
              </Link>
            </b>
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "16px", xs: "14px" },
              fontWeight: "500",
              fontFamily: "Red Hat Display",
              color: "#565666",
              textAlign: "center",
              py: "15px",
              mb: "20px",
            }}
          >
            By Signing up, you are creating a guest account, and you agree to
            Compliance Sheet
            <b
              style={{
                fontWeight: "500",
                fontFamily: "Red Hat Display",
                color: "#697AE2",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              {" "}
              terms and conditions & Privacy statement.{" "}
            </b>
          </Typography>
        </Card>
        <Snackbar
          open={open}
          anchorOrigin={{ vertical, horizontal }}
          onClose={handleClose}
        >
          {status ? (
            <Alert onClose={handleClose} severity="success">
              You have successfully registered. Please Check your Email!{" "}
            </Alert>
          ) : (
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Email Already exists
            </Alert>
          )}
        </Snackbar>
      </form>
    </Container>
  );
};

export default SignUpForm;
