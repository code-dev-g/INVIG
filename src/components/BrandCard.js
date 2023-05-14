import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import colors from '../config/colors';
import Link from 'next/link';

export default function BrandCard () {
    return (
        <Link href="/" style={{ textDecoration: 'none' }}>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                } }
            >
                <Box
                    sx={ {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                    } }
                >
                    <Image src="/LOGO.png" alt="INVIG Logo" width={ 50 } height={ 50 } />
                    <Typography
                        variant="h3"
                        sx={ { fontFamily: 'Fira Sans' } }
                    >
                        INVIG
                    </Typography>
                </Box>

                <Typography
                    variant="h6"
                    sx={ {
                        fontFamily: 'Fira Sans',
                        color: colors.primary,
                    } }
                >
                    The Invigilation Management System
                </Typography>
            </Box>
        </Link>
    );
}