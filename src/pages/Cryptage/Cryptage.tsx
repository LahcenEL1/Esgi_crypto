import { Box, Divider, Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link, Button, Grid, InputLabel, Input, FormControl, IconButton, InputAdornment, LinearProgress, } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Container } from "@mui/system";
import FormInput from '../../components/FormInput';
import React from 'react';
import * as CryptoJS from "crypto-js";
import * as fs from "fs";
import config from '../../style/config';
import * as crypto from 'crypto';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useState } from "react";
import * as keccak from 'keccak';

function Cryptage() {

  const [selectedValue, setSelectedValue] = useState("sha256");
  const [valueFinal, setValueFinal] = useState("");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };


  // const [consumable, setConsumable] = React.useState(false)


  async function submit(event: any) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const inputData = formData.get("data") as string;

    if (selectedValue == 'sha256') {
      setValueFinal(CryptoJS.SHA256(inputData).toString(CryptoJS.enc.Hex));
    }

    if (selectedValue == 'ripemd160') {
      setValueFinal(CryptoJS.RIPEMD160(inputData).toString(CryptoJS.enc.Hex));
    }

    if (selectedValue == 'md5') {
      setValueFinal(CryptoJS.MD5(inputData).toString(CryptoJS.enc.Hex));
    }

    if (selectedValue == 'keccak') {
     
    }
    if (selectedValue == 'aes') {

    }

    if (selectedValue == 'rsa') {

    }
    console.log("Value final est ", valueFinal)

  }


  return (
    <Box sx={{
      pt: 5,
      minHeight: '80vh',
      backgroundColor: config.mainColor,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Container sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <Box
          sx={{
            backgroundColor: 'white',
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "center",
            width: '100%',
            padding: '1em',
          }}
          component="form"
          noValidate
          onSubmit={submit}
        >
          <Typography component='h3' variant='h4' color='primary'>Your input data</Typography><br />
          <FormInput label="data" id="data"  ></FormInput>
          <Typography component='h3' variant='h4' color='primary'>Chiffrement key</Typography><br />
          <FormInput label="chiffrementKey" id="chiffrementKey"  ></FormInput>


          <select value={selectedValue} onChange={handleChange}>
            <option value="md5">MD5</option>
            <option value="sha256">SHA256</option>
            <option value="keccak">Keccak-512,</option>
            <option value="ripemd160">RipeMD160</option>
            <option value="aes">AES</option>
            <option value="rsa">RSA</option>
          </select>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: 'center',
              alignItems: "center",
              width: '100%',
              padding: '1em'
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                justifyContent: 'space-between',
                alignItems: "center",
                width: '100%',
                padding: '2em'
              }}
            >
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ width: "40%" }}
              >
                Encrypt
              </Button>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ width: "40%" }}
              >
                Decrypt
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                justifyContent: 'space-between',
                alignItems: "center",
                width: '100%',
                padding: '2em'
              }}
            >
              <Typography component='h3' variant='h4' color='primary'>Value: <Typography component='h4' variant='h6' color='primary'>{valueFinal}</Typography><br />
              </Typography>

            </Box>
          </Box >
        </Box>

      </Container>
    </Box>
  )
}

export default Cryptage;