import Link from "next/link";
import ErrorLottie from "../components/ErrorLottie";
import { Button, Container, Typography } from "@mui/material";
import colors from "../config/colors";
import BrandCard from "../components/BrandCard";

function Error() {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "auto",
			}}
		>
			<ErrorLottie />
			<Typography variant="h6" sx={{ width: "auto", display: "flex" }}>
				Oops! Something went wrong
            </Typography>
            <Typography variant="h4" sx={{ width: "auto", display: "flex", alignItems: "center", margin: "1rem" }}>
				Get back to&nbsp;<Link href="/" style={{color: colors.primary}}>Home</Link>
            </Typography>
            <BrandCard />
		</Container>
	);
}

export default Error;