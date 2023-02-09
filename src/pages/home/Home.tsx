import { Box, Divider, Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link, Button, Grid, InputLabel, Input, FormControl, IconButton, InputAdornment, LinearProgress, } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Container } from "@mui/system";

import config from '../../style/config';
function Home() {
  let navigate = useNavigate();

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


            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: "start",
                width: { xs: "100%", md: "49%" },
                minWidth: '50%',
              }}
            >
              <Typography component='h3' variant='h4' color='primary'>Bienvenue dans le monde fascinant de la cryptographie !</Typography><br />
              <Typography component='p' variant='h6'   > La cryptographie est l'étude des méthodes pour protéger l'information en la chiffrant pour en faire un secret. Cela permet de garantir la confidentialité, l'intégrité et l'authenticité des données transmises. Dans ce monde, vous découvrirez des algorithmes complexes et des protocoles de sécurité qui vous permettront de protéger vos informations les plus sensibles. Vous découvrirez également des moyens de déchiffrer les informations et de comprendre les méthodes utilisées pour les protéger. Alors, préparez-vous à explorer les profondeurs de la cryptographie et à apprendre comment protéger les informations dans un monde numérique en constante évolution.</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: 'space-between',
                  alignItems: "center",
                  width: '100%',
                  marginTop: '1em'
                }}
              >

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ width: "100%" }}
                    onClick={() => navigate(`/login`)}
                  >Login
                  </Button>

              </Box>
            </Box>
            <Box sx={{}}>
              <img style={{ display: 'flex', width: '100%', maxWidth: '40em', height: '100%', objectFit: 'contain' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png" alt="" />
            </Box>
          </Box>
   

        </Box >
      </Container>
    </Box>
  )
}

export default Home;