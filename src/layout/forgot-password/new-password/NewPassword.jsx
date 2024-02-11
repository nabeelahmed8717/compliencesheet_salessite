import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Card, Container, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import MainBG from "../../../assests/main-bg.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  password: "",
  confirmPassword: "",
};

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
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
              width: { xl: "1056px" },
              px: { xl: "19rem", lg: "15rem" },
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
              Reset Your Password
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
              Enter the new password 
            </Typography>
            <Grid
              container
              justifyContent="center"
              spacing={2}
              sx={{ my: "10px" }}
            >
              <Grid item xs={12} sx={{ mb: "15px" }}>
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
              <Grid item xs={12} sx={{ mb: "15px" }}>
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
                  id="confirmPassword"
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
                  {...formik.getFieldProps("confirmPassword")}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
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
              Continue
            </Button>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default NewPassword;
