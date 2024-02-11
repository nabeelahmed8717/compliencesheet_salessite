import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
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
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      values.business_name = "Compliance Sheet";
      try {
        const response = await axios.post(
          "https://jobs.orcaloholding.co.uk/api/sale-site/login",
          values
        );
        console.log("DATA", response);

        if (response.data.status) {
          // success scenario - redirect user
          localStorage.setItem("username", response.data.data.token);
          navigate("/under-construction");
        } else {
          setError(response.data.msg);
        }
      } catch (error) {
        console.error("API Error:", error.response);
        if (error.response.data.status) {
          // success scenario - redirect user
          // router.replace("/under-construction");
        } else {
          setError(error.response.data.msg);
        }
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
        "& .MuiInputBase-root:hover": {
          backgroundColor: "#F0F2FC",
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
            Sign In
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "Red Hat Display",
              color: "#565666",
              py: "10px",
              mb: "20px",
            }}
          >
            Let’s Sign You In
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sx={{ mb: "10px" }}>
              <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12} sx={{ mb: "15px" }}>
              <label style={labelStyles}>Password</label>
              <TextField
                fullWidth
                sx={fieldStyles.root}
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
          </Grid>
          <Typography
            sx={{
              textAlign: "center",
              paddingBottom: "10px",
            }}
          >
            {error}
          </Typography>
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
            Sign In
          </Button>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "Red Hat Display",
              color: "#697AE2",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <Link
              Link
              to="/forgot-password"
              style={{ textDecoration: "none", color: "#697AE2" }}
            >
              Forgot Password?
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "Red Hat Display",
              color: "#565666",
              textAlign: "center",
              py: "10px",
            }}
          >
            Or
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "Red Hat Display",
              color: "#565666",
              textAlign: "center",
              py: "10px",
              mb: "20px",
            }}
          >
            Not a registered user?
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
                to="/sign-up"
                style={{ textDecoration: "none", color: "#697AE2" }}
              >
                Register Now
              </Link>
            </b>
          </Typography>
        </Card>
      </form>
    </Container>
  );
};

export default SignInForm;
