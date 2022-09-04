import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width:'223px' }} >
      <Alert severity="error">Usuario invalido</Alert>     
    </Stack>
  );
}