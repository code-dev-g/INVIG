import { Box, Typography } from "@mui/material";
import { authHandle } from "../../config/firebase";
import NotAuthorizedCard from "../../components/NotAuthorizedCard";
import Head from "next/head";

const Faculty = () => {
    const user = authHandle.currentUser;
    if ( !user ) {
        return (
            <NotAuthorizedCard />
        );
    }
    return (
        <>
            <Head>
                <title>Admin - INVIG</title>
            </Head>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh',
                } }
            >
                <Typography variant="h5">
                    Welcome admin, { user.email }
                </Typography>
            </Box>
        </>
    );
};

export default Faculty;