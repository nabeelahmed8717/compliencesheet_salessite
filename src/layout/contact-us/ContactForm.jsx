import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Button, Container, Grid, Snackbar } from '@mui/material';
import CustomTextField from '../../components/custom-textfield/CustomTextField';
import axios from "axios";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('First Name is required'),
  last_name: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone_number: Yup.string().required('Phone Number is required'),
  message: Yup.string().required('Comments are required'),
  subject: Yup.string().required('Subject is required'),

});

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number:'',
  message: '',
  subject: '',

};

const ContactForm = () => {
    const [open, setOpen] = React.useState(false);
    const vertical = "top";
    const horizontal = "center";
      const handleClose = () => {
        setOpen(false);
      };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async  (values, { resetForm }) => {
      values.business_name = "Legal Help Squad";
      // console.log(values);
      try {
        const response = await axios.post(
          "https://jobs.orcaloholding.co.uk/api/sale-site/contact-us",
          values
        );
        setOpen(true);
        resetForm();
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
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
          <Grid item lg={6} xs={12}>
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
        <Grid Container justifyContent={"center"}>
          <Grid item xs={12} sx={{ my: "15px" }}>
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
          <Grid item xs={12} sx={{ my: "15px" }}>
            <CustomTextField
              label="Phone Number"
              id="phone_number"
              placeholder="Enter your Phone Number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              error={
                formik.touched.phone_number &&
                Boolean(formik.errors.phone_number)
              }
              helperText={
                formik.touched.phone_number && formik.errors.phone_number
              }
            />
          </Grid>
          <Grid item xs={12} sx={{ my: "15px" }}>
            <CustomTextField
              label="Subject"
              id="subject"
              placeholder="Enter your Subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              label="Message"
              id="message"
              placeholder="Enter message...."
              multiline={true}
              rows={3}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
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
          Send Message
        </Button>
      </form>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Your message have been sent successfully! We will be in contact with
          you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactForm;
