import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Card, Container, Grid, Typography } from '@mui/material';
import CustomTextField from '../../components/custom-textfield/CustomTextField';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    country: Yup.string().required(),
    help: Yup.string().required(),
});

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    help: '',
};

const DemoForm = () => {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        },
    });


    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <Card sx={{
                    background: 'white',
                    borderRadius: '8px',
                    p: '50px 30px',
                    mb: '20px',
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                }}>
                    <Typography
                        sx={{
                            fontSize: "40px",
                            fontWeight: "600",
                            fontFamily: "Red Hat Display",
                            color: "#697AE2",
                        }}
                    >
                        Request a Demo
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: "600",
                            fontFamily: "Red Hat Display",
                            color: "#565666",
                            py: "10px",
                            mb: '20px'
                        }}
                    >
                        Get started with your account
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <CustomTextField
                                label='First Name'
                                id="firstName"
                                placeholder='Enter your First Name'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <CustomTextField
                                label='Last Name'
                                id="firstName"
                                placeholder='Enter your Last Name'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" spacing={2} sx={{ my: '10px' }}>
                        <Grid item md={6} xs={12}>
                            <CustomTextField
                                label='Business Email Address'
                                id="email"
                                placeholder='Enter your Email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <CustomTextField
                                label='Country'
                                id="country"
                                placeholder='Enter your Country'
                                value={formik.values.country}
                                onChange={formik.handleChange}
                                error={formik.touched.country && Boolean(formik.errors.country)}
                                helperText={formik.touched.country && formik.errors.country}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" spacing={2} sx={{ my: '10px' }}>
                        <Grid item xs={12}>
                            <CustomTextField
                                label='How can we help you?'
                                id="help"
                                placeholder='How can we help you?'
                                value={formik.values.help}
                                onChange={formik.handleChange}
                                error={formik.touched.help && Boolean(formik.errors.help)}
                                helperText={formik.touched.help && formik.errors.help}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        sx={{
                            my: "20px",
                            py: '12px',
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
                            color: "#565666",
                            textAlign: 'center',
                        }}
                    >
                        Already have an account? <b style={{
                            fontWeight: "500",
                            fontFamily: "Red Hat Display",
                            color: "#697AE2",
                            marginLeft: '5px',
                            cursor: 'pointer'
                        }}><Link Link to="/sign-in" style={{ textDecoration: "none", color: "#697AE2" }}>Sign In</Link></b>
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { md: "16px", xs: '14px' },
                            fontWeight: "500",
                            fontFamily: "Red Hat Display",
                            color: "#565666",
                            textAlign: 'center',
                            py: '15px',
                            mb: '20px',
                        }}
                    >
                        By  Signing up, you are creating a guest account, and you agree to Compliance Sheet<b style={{
                            fontWeight: "500",
                            fontFamily: "Red Hat Display",
                            color: "#697AE2",
                            marginLeft: '5px',
                            cursor: 'pointer'
                        }}> terms and conditions & Privacy statement. </b>
                    </Typography>
                </Card>
            </form>
        </Container>
    );
};

export default DemoForm;
