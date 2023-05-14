import Head from 'next/head';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import colors from '../config/colors';
import BrandCard from '../components/BrandCard';

export default function Home () {
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
      </Box>
    </>
  );
}
