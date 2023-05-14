import Head from 'next/head';
import { Box, Button, Typography } from '@mui/material';
import colors from '../config/colors';

export default function Home () {
  return (
    <>
      <Head>
        <title>INVIG - The Invigilation Management System</title>
      </Head>
      <Box>
        <Typography
          variant="h1"
          sx={{ fontFamily: 'Fira Sans' }}
        >
          INVIG
        </Typography>
        <Button variant='contained' sx={{background: colors.primary}}>Hello</Button>
      </Box>
    </>
  );
}
