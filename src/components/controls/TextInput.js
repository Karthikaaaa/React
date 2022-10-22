import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  console.log("Karthu bh", props);
  return (
    // <Box
    //   component="form"
    //   sx={{
    //     "& .MuiTextField-root": { m: 1, width: "25ch" }
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    <div>
      <TextField
        required
        id="outlined-required"
        label="hi"
        defaultValue="Hello World"
      />
    </div>
    // </Box>
  );
};
export default TextInput;
