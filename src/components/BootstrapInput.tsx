import { TextField, alpha, styled } from "@mui/material";
import { TextFieldProps } from "@mui/material";

const BootstrapInput = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    color: "black",
    borderRadius: 0,
    position: "relative",
    backgroundColor: "white",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
  },
}));

export default BootstrapInput;