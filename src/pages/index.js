import Head from 'next/head';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import colors from '../config/colors';
import BrandCard from '../components/BrandCard';
import { authHandle } from '../config/firebase';

export default function Home () {
  const user = authHandle.currentUser;
  console.log(user);
  return (
    <>
      <Head>
        <title>INVIG - The Invigilation Management System</title>
      </Head>
      <Box
        sx={ {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        } }
      >
        <BrandCard />
        {
          user ? (
            <Typography variant="h5" sx={ { margin: '1rem' } }>
              Welcome { user.displayName }
            </Typography>
          ) : (
              <Button href='/signin' variant='contained' sx={ { margin: '1rem' } }>Sign In</Button>
            )
        }
      </Box>
    </>
  );
}
