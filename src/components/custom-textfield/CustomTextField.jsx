import { TextField, InputAdornment } from "@mui/material";
import React from "react";

const CustomTextField = ({
  label,
  fieldType,
  placeholder,
  endIcon,
  require,
  multiline = false,
  rows,
  id,
  helperText,
  error,
  onChange,
  value
}) => {

  const fieldStyles = {
    ".MuiOutlinedInput-notchedOutline": { border: "0px " },
    "& .MuiInputBase-input": {
      color: "#565666",
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: "Red Hat Display",
    },
    "& .MuiOutlinedInput-root": {
      border: "2px solid #C6D7FF",
      borderRadius: "8px",
      marginTop: "10px",
      p: "2px 15px 2px 0",
    },
    "& .MuiOutlinedInput-root.Mui-error": {
      border: "1.5px solid red",
    },
    "& .MuiOutlinedInput-root:after": {
      borderColor: "#C6D7FF",
    },
    "& .Mui-error:after": {
      borderColor: "#C6D7FF",
    },
    "& .Mui-error:before": {
      borderColor: "#C6D7FF !important",
    },

    "& .MuiInputBase-root:hover": {
      backgroundColor: "#F0F2FC",
    },
    "& .MuiSelect-select:hover": {
      backgroundColor: "#FFFFF",
    },
    "&  .MuiInputBase-inputMultiline ":{
       p: "2px 15px 2px 0",
       marginLeft:"15px"
  },
}

  const labelStyles = {
    fontFamily: "Red Hat Display",
    color: error ? "red" : "#565666",
    fontWeight: error ? '600' : 'normal',
    marginLeft: '5px',
  };

  const inputProps = {
    style: {
      padding: "10px 16px",
    },
  };

  return (
    <div>
      <label style={labelStyles}>
        {label} {require && <span className="error-color">*</span>}
      </label>
      <TextField
        fullWidth
        multiline={multiline}
        rows={rows}
        placeholder={placeholder}
        sx={fieldStyles}
        inputProps={multiline ? false : inputProps}
        InputProps={{
          endAdornment: (
            endIcon && <InputAdornment position="end">{endIcon}</InputAdornment>
          ),
        }}
        className="margin-top-0"
        type={fieldType}
        id={id}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
      />
    </div>
  );
};

export default CustomTextField;
