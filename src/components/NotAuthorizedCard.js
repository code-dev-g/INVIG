import { Box, Typography } from "@mui/material";
import colors from "../config/colors";
import BrandCard from "./BrandCard";
import Link from "next/link";
import Head from "next/head";

const NotAuthorizedCard = () => {
    return (
        <>
        <Head>
            <title>Not Authorized - INVIG</title>
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
                    You are not authorized to access this page
                </Typography>

                <Typography variant="h6" sx={ { width: "auto", display: "flex", alignItems: "center", margin: "1rem" } }>
                    Get back to&nbsp;<Link href="/" style={ { color: colors.primary } }>Home</Link>
                </Typography>
                <BrandCard />
            </Box>
            </>
    )
};

export default NotAuthorizedCard;