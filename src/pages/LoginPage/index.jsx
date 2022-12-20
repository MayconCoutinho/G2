import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from 'react';
import { Token } from '../../hooks/token';

export const LoginPage = () => {
  Token()
  const [values, setValues] = useState({
    name: '',
    password: '',
    weight: '',
    showPassword: false,
  })
  const Entrar = () => {
    window.localStorage.setItem("tokenName",values.name)
    window.localStorage.setItem("tokenPassword",values.password)

    Token()
  }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          marginTop: 20
        }}
      >
        <Stack spacing={2}>
          <h1> Login </h1>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple"> Name </InputLabel>
            <Input id="component-simple" value={values.name} onChange={handleChange('name')} />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 5
        }}
      >
        <Stack spacing={2}>
          <Button
            sx={{
              paddingLeft: 10.3,
              paddingRight: 10.3,
              background: "#000",
              '&:hover': {
                backgroundColor: '#222'
              },
            }}
            size="small"
            variant="contained"
            onClick={() => Entrar()}
          > Entrar </Button>

        </Stack>
      </Box>
    </>
  )
}
