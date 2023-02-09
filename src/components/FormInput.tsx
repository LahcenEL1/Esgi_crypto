import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import BootstrapInput from "./BootstrapInput";
export default function DisplayformInput(props:any) {

  const { label, id, value, setValue, defaultValue, isDisabled } = props
  return (
    
    <FormControl fullWidth variant="standard">
      <InputLabel
        shrink
        htmlFor={id}
      >
        {label}
      </InputLabel>
      <BootstrapInput
        id={id}
        defaultValue={defaultValue}
        disabled={isDisabled}
        name={id}
        value={value}
        sx={{ backgroundColor: "white", border: "1px solid #000000" }}
      />
    </FormControl>
  );
}